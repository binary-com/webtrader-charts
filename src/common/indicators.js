import $ from 'jquery';
import _ from 'lodash';
import Highcharts from 'highstock-release/highstock';
import indicatorsArray from '../indicators-config.js';

const indicatorsMetaData = _.cloneDeep(indicatorsArray);
const events = $('<div />'); // use in memory jquery object for events

function updateOrAddScatterOrFlagSeriesData(iu, indicatorSeries, redraw = true) {
   var seriesData = indicatorSeries.data;
   if (iu.value && _.isFunction(iu.value.toJSObject)) {
      var x = iu.value.x;
      var matchingSeriesData = _.find(seriesData, function (ee) {
         var isTrue = _.isNumber(x) && x > 0 && x === ee.x;
         if (isTrue && iu.value.marker) {
            isTrue = iu.value.marker.symbol === ee.marker.symbol;
         }
         return isTrue;
      });
      if (matchingSeriesData) {
         matchingSeriesData.remove();
      }
      if (_.isNumber(x) && x > 0 && !_.isEmpty(iu.value.text) && !_.isEmpty(iu.value.title)) {
         indicatorSeries.addPoint(iu.value, redraw);
      }
   }
}

var indicators = {
   OPEN: 0, HIGH: 1, LOW: 2, CLOSE: 3,

   initHighchartIndicators : function(barsTable) {
      Highcharts.Series.prototype.addIndicator = function(indicatorID, options) {
         var data = barsTable.query({instrumentCdAndTp: this.options.id});
         console.log(data);
         //Class name for all CDL type of indicators is CDL
         var indicatorObject = new window[_.startsWith(indicatorID.toUpperCase(), 'CDL') ? 'CDL' : indicatorID.toUpperCase()](data, options, indicators);
         var series = this;
         var chart = series.chart;
         var indicatorMetadata = indicatorsMetaData[indicatorID];
         if (indicatorMetadata) {
            var seriesAndAxisConfArr = indicatorObject.buildSeriesAndAxisConfFromData(indicatorMetadata);
            console.log(seriesAndAxisConfArr);
            seriesAndAxisConfArr.forEach(function(seriesAndAxisConf) {
               if (seriesAndAxisConf.axisConf) {
                  chart.addAxis(seriesAndAxisConf.axisConf, false, false, false);
                  indicators.recalculate(chart);
               }
               if (seriesAndAxisConf.seriesConf) {
                  var conf = _.extend(seriesAndAxisConf.seriesConf, {
                     dataGrouping : series.options.dataGrouping,
                     opposite : series.options.opposite
                  });
                  if (indicatorMetadata.onChartIndicator) {
                     conf = _.extend(conf, {
                        compare : series.options.compare
                     });
                  }
                  chart.addSeries(conf, false, false);
               }
            });
            chart.redraw();
            this[indicatorID] = this[indicatorID] || [];
            this[indicatorID].push(indicatorObject);

            // send notification, used in bot.es6 -----------
            const filteredSeries = seriesAndAxisConfArr
                                    .filter(r => r.seriesConf.type === 'line')
                                    .map(r => r.seriesConf);
            if(filteredSeries.length) {
               var dialog_id = chart.renderTo.id.replace("_chart", "");
               var uniqueIds = seriesAndAxisConfArr.map(r => r.seriesConf.id);
               var values = filteredSeries.map(r => r.data[r.data.length-1][1]);
               events.trigger('indicator-add', [{
                  dialogId: dialog_id,
                  indicatorId: indicatorID,
                  uniqueIds: uniqueIds,
                  values: values,
                  color: indicatorObject.options[_.find(indicatorMetadata.fields, { type: "colorpicker" }).key]
               }]); 
            }
            // ----------------------------------------------
         } else {
            console.error('Unable to add indicator!');
         }
         var dialog_id = chart.renderTo.id.replace("_chart", "");
         var dialog = $('#' + dialog_id);
         dialog.trigger('chart-indicators-changed', chart);
      };
      Highcharts.Series.prototype.removeIndicator = function(indicatorSeriesIDArr) {
         var series = this;
         var chartId = this.chart.renderTo.id;
         if (series.options.isInstrument && series.options.id !== 'navigator') {
            for (var key in indicatorsMetaData) {
               var each = indicatorsMetaData[key];
               if (series[each.id]) {//This is a check to find out, if this indicator was loaded for this chart
                  series[each.id].forEach(function (eachInstanceOfTheIndicator, index) {
                     if (eachInstanceOfTheIndicator.isSameInstance(indicatorSeriesIDArr)) {
                        indicatorSeriesIDArr.forEach(function(e) {
                           /**
                            * There could be only 2 things to remove
                            * 1. Axis   -> "indicatorID-uniqueID"
                            * 2. series -> "uniqueID"
                            */
                           //Delete series
                           var something = series.chart.get(e);
                           if (something) {
                              something.remove(false);
                           }
                           //Delete axis
                           something = series.chart.get(each.id + '-' + e);
                           if (something) {
                              something.remove(false);
                              indicators.recalculate(series.chart);
                           }
                        });
                        series[each.id].splice(index, 1);

                        // send notification for bot.es6 -----------
                        var uniqueIds = eachInstanceOfTheIndicator.getIDs();
                        var dialog_id = chartId.replace("_chart", "");
                        events.trigger('indicator-remove', [{
                           dialogId: dialog_id,
                           indicatorId: each.id,
                           uniqueId: uniqueIds[0]
                        }]);
                        // ------------------------------------------

                        return false;
                     }
                  });
               }
            }
         }
         this.chart.redraw();
         var dialog_id = chartId.replace("_chart", "");
         var dialog = $('#' + dialog_id);
         dialog.trigger('chart-indicators-changed', this.chart);
      };
      /*
       *  Wrap HC's Series.addPoint
       */
      Highcharts.wrap(Highcharts.Series.prototype, 'addPoint', function(proceed, options, redraw, shift, animation) {
         proceed.call(this, options, redraw, shift, animation);
         var series = this;
         var chartId = this.chart.renderTo.id;
         if (series.options.isInstrument && series.options.id !== 'navigator') {
            var time = options[0];
            var bar = barsTable.find({instrumentCdAndTp: series.options.id, time: time});
            if (bar) {
               for (var key in indicatorsMetaData) {
                  var each = indicatorsMetaData[key];
                  if (series[each.id]) {//This is a check to find out, if this indicator was loaded for this chart
                     series[each.id].forEach(function (eachInstanceOfTheIndicator) {
                        var indicatorUpdated = eachInstanceOfTheIndicator.addPoint(bar);
                        indicatorUpdated.forEach(function(iu) {
                           var indicatorSeries = series.chart.get(iu.id);
                           if (_.isArray(iu.value)) {
                              var rangePoint = _.flattenDeep([time, iu.value]);
                              indicatorSeries.addPoint(rangePoint, true, false, false);
                           } else if (iu.value instanceof CDLUpdateObject || iu.value instanceof FractalUpdateObject) {
                              updateOrAddScatterOrFlagSeriesData(iu, indicatorSeries, false);
                           } else {
                              //iu.color is used by Awesome indicator
                              if (iu.color) {
                                 indicatorSeries.addPoint({x:time, y:iu.value, color:iu.color}, false);
                              } else if (iu.time) { // iu.time is used by ichimoku indicator
                                 indicatorSeries.addPoint([iu.time, iu.value], false);
                              }
                              else {
                                 indicatorSeries.addPoint([time, iu.value], false);
                              }
                           }
                        });

                        // send notification, used in bot.es6 ----------
                        var filteredValues = indicatorUpdated
                              .filter(
                                 r => !_.isArray(r.value) &&
                                      !(r.value instanceof CDLUpdateObject || r.value instanceof FractalUpdateObject)
                              )
                              .map(r => r.value);
                        var uniqueIds = eachInstanceOfTheIndicator.getIDs();
                        if(filteredValues.length) {
                           var dialog_id = chartId.replace("_chart", "");
                           events.trigger('indicator-update', [{
                              dialogId: dialog_id,
                              indicatorId: each.id,
                              uniqueIds: uniqueIds,
                              values: filteredValues
                           }]); 
                        }
                        // -----------------------------------------------
                     });
                  }
               }
               this.redraw();
            }
         }
      });

      /*
       * Update will be called for all series
       * We do not have to worry about indicator series, because they will not have instance of indicator Classes
       * Wrap HC's Point.update
       */
      Highcharts.wrap(Highcharts.Point.prototype, 'update', function(proceed, options, redraw, animation) {
         proceed.call(this, options, redraw, animation);
         var series = this.series;
         if (series.options.isInstrument && series.options.id !== 'navigator') {
            var time = this.x || this.time;
            var bar = barsTable.find({instrumentCdAndTp: series.options.id, time: time});
            if (bar) {
               for (var key in indicatorsMetaData) {
                  var each = indicatorsMetaData[key];
                  if (series[each.id]) {
                     series[each.id].forEach(function (eachInstanceOfTheIndicator) {
                        var indicatorUpdated = eachInstanceOfTheIndicator.update(bar);
                        indicatorUpdated.forEach(function(iu) {
                           var indicatorSeries = series.chart.get(iu.id);
                           var seriesData = indicatorSeries.data;
                           if (_.isArray(iu.value)) {
                              //e.g, dc indicator
                              seriesData[seriesData.length - 1].update(_.flattenDeep([time, iu.value]));
                           } else if (iu.value instanceof CDLUpdateObject || iu.value instanceof FractalUpdateObject) {
                              updateOrAddScatterOrFlagSeriesData(iu, indicatorSeries);
                           } else {
                              seriesData[seriesData.length - 1]
                                 .update({
                                    y: iu.value
                                 });
                           }
                        });
                     });
                  }
               }
            }
         }
      });
   },

   /*
    * Function to recalculate heights of different sections in a chart
    */
   recalculate: function (chart) {
      var GAP = 5;
      var totalYAxes = chart.yAxis.length;
      totalYAxes--;//Excluding main chart
      totalYAxes--;//Excluding navigator chart
      var heightOfEachSubWindow = Math.round(45 / totalYAxes)-5;
      var topForNextSubWindow = 0;

      if (totalYAxes <= 0) {
         //assign all space to the main chart
         chart.yAxis[0].update({
            top: '0%',
            height: '100%'
         }, false);
      }
      else {
         $.each(chart.yAxis, function (index, current_yAxis) {
            //Main chart - Keeping it at 50%
            if (index == 0) {
               current_yAxis.update({
                  top: '0%',
                  height: '50%'
               }, false);
               topForNextSubWindow += 50;
            }
            //Ignore navigator axis
            else if (current_yAxis.options && current_yAxis.options.id && current_yAxis.options.id.toLowerCase().indexOf('navigator') != -1) {
            }
            else {
               //I am dividing remaining 45% among all subwindows. If its crossing 100%, the last window will get what is possible out of left over from 100%
               current_yAxis.update({
                  top: (topForNextSubWindow + GAP) + '%',
                  height: ((topForNextSubWindow + GAP + heightOfEachSubWindow) > 100 ? (100 - topForNextSubWindow - GAP) : heightOfEachSubWindow) + '%',
                  offset: 0
               }, false);
               topForNextSubWindow += GAP + heightOfEachSubWindow;
            }
         });
      }
   },

   appliedPriceString: function (intValue) {
      var ret = 'CLOSE';
      switch (intValue) {
         case indicators.OPEN:
            ret = 'OPEN';
            break;
         case indicators.HIGH:
            ret = 'HIGH';
            break;
         case indicators.LOW:
            ret = 'LOW';
            break;
         case indicators.CLOSE:
            ret = 'CLOSE';
            break;
      }
      return ret;
   },

   getIndicatorOrPriceValue: function(data, appliedTo) {
      var price = data.close;
      switch(appliedTo) {
         case this.OPEN: price = data.open; break;
         case this.HIGH: price = data.high; break;
         case this.LOW: price  = data.low; break;
      }
      return price;
   },

   /**
    * Long candle is "candle body" = "70% of Math.abs(high - low)"
    * @param open
    * @param high
    * @param low
    * @param close
    * @returns {boolean}
    */
   isLongCandle : function(open, high, low, close) {
      var bodySize = Math.abs(open - close);
      var candleSize = Math.abs(high - low);
      return bodySize >= (.7 * candleSize);
   },

   /*Return indicators-config.js data*/
   getIndicatorsJSONData: function() {
      return indicatorsMetaData;
   },

   events: events
};

export default indicators;

