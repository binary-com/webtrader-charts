export const config = {
  atr: {
    id: "atr",
    long_display_name: "Average True Range",
    short_display_name: "ATR",
    editable: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 100, value: 14, type: "slider"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#FA6B0D", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    levels:{
      fields: [
        {title: "Level", key: "value", min: 1, max: 100, value: 50, type: "slider"},
        {title: "Stroke width", key: "width", min: 1, max: 10, value: 1, type: "slider"},
        {title: "Stroke", key: "color", value: "#FA6B0D", type: "colorpicker"},
        {title: "Dash style", key: "dashStyle", value: "Dash", type: "dashstyle"}
      ],
      values: [
        {color: "#FA6B0D", dashStyle: "Dash", label: { text: 30}, value: 30, "width" : 1},
        {color: "#FA6B0D", dashStyle: "Dash", label: { text: 70}, value: 70, "width" : 1}
      ]
    },
    category: [
      "Volatility Indicators"
    ],
    description: "The Average Directional Movement Index index (ADX) was developed in 1978 by J. Welles Wilder as an indicator of trend strength in a series of prices of a financial instrument ADX will range between 0 and 100. Generally, ADX readings below 20 indicate trend weakness, and readings above 40 indicate trend strength."
  },
  ema: {
    id: "ema",
    long_display_name: "Exponential Moving Average",
    short_display_name: "EMA",
    onChartIndicator: true,
    editable: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 100, value: 21, type: "slider"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#E14906", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    category: [
      "Overlap Studies"
    ],
    description: "The Exponential Moving Average (EMA) represents an average of prices, but places more weight on recent prices. The weighting applied to the most recent price depends on the selected period of the moving average. The shorter the period for the EMA, the more weight that will be applied to the most recent price."
  },
  rsi: {
    id: "rsi",
    long_display_name: "Relative Strength Index",
    short_display_name: "RSI",
    editable: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 200, value: 14, type: "slider"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#806C3D", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    levels:{
      fields: [
        {title: "Level", key: "value", min: 1, max: 100, value: 50, type: "slider"},
        {title: "Stroke width", key: "width", min: 1, max: 10, value: 1, type: "slider"},
        {title: "Stroke", key: "color", value: "#806C3D", type: "colorpicker"},
        {title: "Dash style", key: "dashStyle", value: "Dash", type: "dashstyle"}
      ],
      values: [
        {color: "#806C3D", dashStyle: "Dash", label: { text: 30}, value: 30, "width" : 1},
        {color: "#806C3D", dashStyle: "Dash", label: { text: 70}, value: 70, "width" : 1}
      ]
    },
    category: [
      "Momentum Indicators"
    ],
    description: "The Relative Strength Index (RSI) was published by J. Welles Wilder. The current price is normalized as a percentage between 0 and 100. The name of this oscillator is misleading because it does not compare the instrument relative to another instrument or set of instruments, but rather represents the current price relative to other recent pieces within the selected lookback window length."
  },
  sma: {
    id: "sma",
    long_display_name: "Simple Moving Average",
    short_display_name: "SMA",
    onChartIndicator: true,
    editable: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 200, value: 21, type: "slider"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#50B3AA", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    category: [
      "Overlap Studies"
    ],
    description: "The Simple Moving Average (SMA) is calculated by adding the price of an instrument over a number of time periods and then dividing the sum by the number of time periods. The SMA is basically the average price of the given time period, with equal weighting given to the price of each period."
  },
  roc: {
    id: "roc",
    long_display_name: "Rate Of Change",
    short_display_name: "ROC",
    editable: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 200, value: 14, type: "slider"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#319F67", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    levels:{
      fields: [
        {title: "Level", key: "value", min: 1, max: 100, value: 50, type: "slider"},
        {title: "Stroke width", key: "width", min: 1, max: 10, value: 1, type: "slider"},
        {title: "Stroke", key: "color", value: "#319F67", type: "colorpicker"},
        {title: "Dash style", key: "dashStyle", value: "Dash", type: "dashstyle"}
      ],
      values: [ ]
    },
    category: [
      "Momentum Indicators"
    ],
    description: "The Price Rate-of-Change (ROC) indicator displays the difference between the current price and the price x-time periods ago. The difference can be displayed in either points or as a percentage."
  },
  typprice: {
    id: "typprice",
    long_display_name: "Typical Price",
    short_display_name: "TYPPRICE",
    onChartIndicator: true,
    editable: true,
    fields: [
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#ECD078", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"}
    ],
    category: [
      "Price Transformation"
    ],
    formula: "typprice",
    description: "The Typical Price function measures the average of the high, low, and closing prices for the day using a simple, single-line plot. The ordinary price gives a simplified view of the day trading prices for as well as it happens with other price-adjustment functions. You can use it for smoothing out some of the inconstancy of the closing price because it comprises information for the whole trading day and not only the result of the day's end. The Typical Price indicator is measured by adding the high, low, and closing prices together, and then dividing by three."
  },
  willr: {
    id: "willr",
    long_display_name: "Williams' %R",
    short_display_name: "WILLR",
    editable: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 200, value: 14, type: "slider"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#D95B43", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    levels:{
      fields: [
        {title: "Level", key: "value", min: 1, max: 100, value: 50, type: "slider"},
        {title: "Stroke width", key: "width", min: 1, max: 10, value: 1, type: "slider"},
        {title: "Stroke", key: "color", value: "#D95B43", type: "colorpicker"},
        {title: "Dash style", key: "dashStyle", value: "Dash", type: "dashstyle"}
      ],
      values: [ ]
    },
    category: [
      "Momentum Indicators"
    ],
    description: "Developed by Larry Williams, Williams %R is a momentum indicator that is the inverse of the Fast Stochastic Oscillator. Also referred to as %R, Williams %R reflects the level of the close relative to the highest high for the look-back period."
  },
  rocp: {
    id: "rocp",
    long_display_name: "Rate Of Change Percentage",
    short_display_name: "ROCP",
    editable: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 200, value: 14, type: "slider"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#C02942", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    levels:{
      fields: [
        {title: "Level", key: "value", min: 1, max: 100, value: 50, type: "slider"},
        {title: "Stroke width", key: "width", min: 1, max: 10, value: 1, type: "slider"},
        {title: "Stroke", key: "color", value: "#C02942", type: "colorpicker"},
        {title: "Dash style", key: "dashStyle", value: "Dash", type: "dashstyle"}
      ],
      values: [ ]
    },
    category: [
      "Momentum Indicators"
    ],
    description: "The Rate of Change Percentage (ROCP) indicator compares the current price with the previous price from a selected number of periods ago. The current price is divided by the previous price. ROCP does not express as a percentage. This indicator is also commonly known as a momentum indicator."
  },
  rocr: {
    id: "rocr",
    long_display_name: "Rate Of Change Ratio",
    short_display_name: "ROCR",
    editable: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 200, value: 14, type: "slider"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#542437", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    levels:{
      fields: [
        {title: "Level", key: "value", min: 1, max: 100, value: 50, type: "slider"},
        {title: "Stroke width", key: "width", min: 1, max: 10, value: 1, type: "slider"},
        {title: "Stroke", key: "color", value: "#542437", type: "colorpicker"},
        {title: "Dash style", key: "dashStyle", value: "Dash", type: "dashstyle"}
      ],
      values: [ ]
    },
    category: [
      "Momentum Indicators"
    ],
    description: "The Rate of Change Rate (ROCR) indicator compares the current price with the previous price from a selected number of periods ago. The current price is divided by the previous price. This indicator is also commonly known as a momentum indicator."
  },
  min: {
    id: "min",
    long_display_name: "Minimum",
    short_display_name: "MIN",
    onChartIndicator: true,
    editable: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 200, value: 21, type: "slider"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#53777A", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    category: [
      "Statistical Functions"
    ],
    description: "Minimum price over selected period"
  },
  max: {
    id: "max",
    long_display_name: "Maximum",
    short_display_name: "MAX",
    onChartIndicator: true,
    editable: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 200, value: 21, type: "slider"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#556270", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    category: [
      "Statistical Functions"
    ],
    description: "Maximum price over selected period"
  },
  sum: {
    id: "sum",
    long_display_name: "Summation",
    short_display_name: "SUM",
    editable: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 200, value: 14, type: "slider"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#4ECDC4", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    levels:{
      fields: [
        {title: "Level", key: "value", min: 1, max: 100, value: 50, type: "slider"},
        {title: "Stroke width", key: "width", min: 1, max: 10, value: 1, type: "slider"},
        {title: "Stroke", key: "color", value: "#4ECDC4", type: "colorpicker"},
        {title: "Dash style", key: "dashStyle", value: "Dash", type: "dashstyle"}
      ],
      values: [ ]
    },
    category: [
      "Statistical Functions"
    ],
    description: "The sum of price over selected period"
  },
  wma: {
    id: "wma",
    long_display_name: "Weighted Moving Average",
    short_display_name: "WMA",
    onChartIndicator: true,
    editable: true,
    print: ['period', 'appliedTo'],
    fields: [
      {title: "Period", key: "period", min: 1, max: 200, value: 21, type: "slider"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#C7F464", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    category: [
      "Overlap Studies"
    ],
    description: "WMA stands for weighted moving average. It helps to smooth the price curve for better trend identification. It places even greater importance on recent data than the EMA does."
  },
  tema: {
    id: "tema",
    long_display_name: "Triple Exponential Moving Average",
    short_display_name: "TEMA",
    onChartIndicator: true,
    editable: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 200, value: 21, type: "slider"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#FF6B6B", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    category: [
      "Overlap Studies"
    ],
    description: "The Triple Exponential Moving Average (TEMA) by Patrick Mulloy offers a moving average with less lag then traditional exponential moving average."
  },
  trima: {
    id: "trima",
    long_display_name: "Triangular Moving Average",
    short_display_name: "TRIMA",
    onChartIndicator: true,
    editable: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 200, value: 21, type: "slider"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#C44D58", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    category: [
      "Overlap Studies"
    ],
    description: "The Triangular Moving Average (TRIMA) represents an average of prices, but places weight on the middle prices of the time period. The calculations double-smooth the data using a window width that is one-half the length of the series."
  },
  natr: {
    id: "natr",
    long_display_name: "Normalized Average True Range",
    short_display_name: "NATR",
    editable: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 200, value: 14, type: "slider"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#351330", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    levels:{
      fields: [
        {title: "Level", key: "value", min: 1, max: 100, value: 50, type: "slider"},
        {title: "Stroke width", key: "width", min: 1, max: 10, value: 1, type: "slider"},
        {title: "Stroke", key: "color", value: "#351330", type: "colorpicker"},
        {title: "Dash style", key: "dashStyle", value: "Dash", type: "dashstyle"}
      ],
      values: [
        {color: "#351330", dashStyle: "Dash", label: { text: 30}, value: 30, "width" : 1},
        {color: "#351330", dashStyle: "Dash", label: { text: 70}, value: 70, "width" : 1}
      ]
    },
    category: [
      "Volatility Indicators"
    ],
    description: "Normalized Average True Range (NATR) attempts to normalize the average true range values across instruments by using the formula below."
  },
  bop: {
    id: "bop",
    long_display_name: "Balance of Power",
    short_display_name: "BOP",
    editable: true,
    fields: [
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#424254", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"}
    ],
    levels:{
      fields: [
        {title: "Level", key: "value", min: 1, max: 100, value: 50, type: "slider"},
        {title: "Stroke width", key: "width", min: 1, max: 10, value: 1, type: "slider"},
        {title: "Stroke", key: "color", value: "#424254", type: "colorpicker"},
        {title: "Dash style", key: "dashStyle", value: "Dash", type: "dashstyle"}
      ],
      values: [ ]
    },
    category: [
      "Momentum Indicators"
    ],
    description: "The balance of power (BOP) indicator measures the strength of the bulls vs. bears by assessing the ability of each to push price to an extreme level."
  },
  cdl2crows: {
    id: "cdl2crows",
    long_display_name: "Two Crows",
    short_display_name: "CDL2CROWS",
    fields: [ ],
    cdl_indicator: {
      image: "two_crows"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "Look for a tall white candle in an upward price trend. Following that, a black candle has a body that gaps above the prior candle's body. The last day is another black candle, but this one engulfs the previous bearish candle but closes above first bar's open."
  },
  cdl3blackcrows: {
    id: "cdl3blackcrows",
    long_display_name: "Three Black Crows",
    short_display_name: "CDL3BLACKCROWS",
    fields: [ ],
    cdl_indicator: {
      image: "three_black_crows"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "A bearish candlestick pattern that is used to predict the reversal of the current uptrend. This pattern consists of three consecutive long-bodied candlesticks that have closed lower than the previous day with each session's open occurring within the body of the previous candle."
  },
  cdl3inside: {
    id: "cdl3inside",
    long_display_name: "Three Inside Up/Down",
    short_display_name: "CDL3INSIDE",
    fields: [ ],
    cdl_indicator: {
      image: "three_inside_up_down"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "Price trends downward into the start of the pattern, a tall black candle. Following that, a white candle appears that fits inside the body of the prior candle. This completes the bullish harami candlestick. The final day of the pattern is the confirming candle, a white one that closes above the prior close, which it does. The combination suggests price has reversed trend."
  },
  cdl3linestrike: {
    id: "cdl3linestrike",
    long_display_name: "Three-Line Strike",
    short_display_name: "CDL3LINESTRIKE",
    fields: [ ],
    cdl_indicator: {
      image: "three_line_strike"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "Price forms three black candles, each with lower closes, in a downward price trend. A tall white candle engulfs the price action of the prior three days. The candle acts as a bullish reversal when price breaks out upward, and closes above the top of the candle pattern."
  },
  cdl3outside: {
    id: "cdl3outside",
    long_display_name: "Three Outside Up/Down",
    short_display_name: "CDL3OUTSIDE",
    fields: [ ],
    cdl_indicator: {
      image: "three_outside_up_down"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "In a downward price trend, a black candle appears followed by a white candle that opens below the prior body, but it may be difficult to see that from the chart. The white candle closes above the body, too. The last day of the three line candle is another white candle in this example. It shows a higher close."
  },
  cdl3starssouth: {
    id: "cdl3starssouth",
    long_display_name: "Three Stars In The South",
    short_display_name: "CDL3STARSSOUTH",
    fields: [ ],
    cdl_indicator: {
      image: "three_stars_in_the_south"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "Look for a tall black candle with a long lower shadow to appear in a downward price trend. The second day should be similar to the first day, but smaller and with a higher low. The last day is a black marubozu that squeezes inside the high-low range of the prior day."
  },
  cdl3whitesoldiers: {
    id: "cdl3whitesoldiers",
    long_display_name: "Three Advancing White Soldiers",
    short_display_name: "CDL3WHITESOLDIERS",
    fields: [ ],
    cdl_indicator: {
      image: "three_white_soldiers"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "Three tall white candles, each with higher closes, and bodies that overlap (an opening price within the prior candle's body)"
  },
  cdldoji: {
    id: "cdldoji",
    long_display_name: "Doji",
    short_display_name: "CDLDOJI",
    fields: [ ],
    cdl_indicator: {
      image: "doji"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "Doji form when a security's open and close are virtually equal. The length of the upper and lower shadows can vary and the resulting candlestick looks like a cross, inverted cross or plus sign."
  },
  cdlabandonedbaby: {
    id: "cdlabandonedbaby",
    long_display_name: "Abandoned Baby",
    short_display_name: "CDLABANDONEDBABY",
    fields: [ ],
    cdl_indicator: {
      image: "abandoned_baby"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "A white candle in an upward price trend followed by a doji whose lower shadow remains above the prior candle's high. The third day is a black candle with an upper shadow below the doji's low."
  },
  cdlclosingmarubozu: {
    id: "cdlclosingmarubozu",
    long_display_name: "Closing Marubozu",
    short_display_name: "CDLCLOSINGMARUBOZU",
    fields: [ ],
    cdl_indicator: {
      image: "closing_marubozu"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "The closing black marubozu candlestick is a tall black candle with an upper shadow but no lower one. The closing white marubozu candlestick is a tall white candle with an lower shadow but no upper shadow."
  },
  cdldojistar: {
    id: "cdldojistar",
    long_display_name: "Doji Star",
    short_display_name: "CDLDOJISTAR",
    fields: [ ],
    cdl_indicator: {
      image: "doji_star"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "A bullish or bearish candle followed by a doji with with a downward or uptrend gap."
  },
  cdlthrusting: {
    id: "cdlthrusting",
    long_display_name: "Thrusting Pattern",
    short_display_name: "CDLTHRUSTING",
    fields: [ ],
    cdl_indicator: {
      image: "thrusting_pattern"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "Look for a black candle in a downward price trend followed by a white candle that opens below the prior low but closes near but below the midpoint of the black candle's body."
  },
  bbands: {
    id: "bbands",
    long_display_name: "Bollinger Bands",
    short_display_name: "BBANDS",
    onChartIndicator: true,
    editable: true,
    fields: [
      {title: "Price", key: "appliedTo", value: 3, type: "price"},
      {title: "Time Period", key: "period", min: 1, max: 50, value: 20, type: "slider"},
      {title: "NB Dev Up", key: "devUp", min: 1, max: 20, value: 2, type: "slider"},
      {title: "NB Dev Down", key: "devDn", min: 1, max: 20, value: 2, type: "slider"},
      {title: "MA Type", key: "maType", value: "SMA", type: "matype"},
      {title: "Middle Band Stroke", key: "mdlBndStroke", value: "rgb(205, 10, 10)", type: "colorpicker"},
      {title: "Upper Band Stroke", key: "uprBndStroke", value: "rgb(11, 88, 162)", type: "colorpicker"},
      {title: "Lower Band Stroke", key: "lwrBndStroke", value: "rgb(11, 88, 162)", type: "colorpicker"},
      {title: "Background Color", key: "backgroundColor", value: "rgba(178, 191, 217, 0.3)", type: "colorpicker"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"}
    ],
    category: [
      "Momentum Indicators"
    ],
    description: "Bollinger Bands can be used to measure the highness or lowness of the price relative to previous trades."
  },
  cdlshootingstar: {
    id: "cdlshootingstar",
    long_display_name: "Shooting Star",
    short_display_name: "CDLSHOOTINGSTAR",
    fields: [ ],
    cdl_indicator: {
      image: "shooting_star"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "The Shooting formation is created when the open, low, and close are roughly the same price. There is a long upper shadow, generally defined as at least twice the length of the real body."
  },
  sar: {
    id: "sar",
    long_display_name: "Parabolic SAR",
    short_display_name: "SAR",
    onChartIndicator: true,
    editable: true,
    fields: [
      {title: "Acceleration", key: "acceleration", value: 0.02, type: "numeric"},
      {title: "Maximum", key: "maximum", value: 0.2, type: "numeric"},
      {title: "Stroke", key: "stroke", value: "#413D3D", type: "colorpicker"}
    ],
    category: [
      "Overlap Studies"
    ],
    description: "The parabolic SAR is calculated almost independently for each trend in the price. When the price is in an uptrend, the SAR emerges below the price and converges upwards towards it. Similarly, on a downtrend, the SAR emerges above the price and converges downwards. At each step within a trend, the SAR is calculated one period in advance."
  },
  macd: {
    id: "macd",
    long_display_name: "Moving Average Convergence/Divergence",
    short_display_name: "MACD",
    editable: true,
    fields: [
      {title: "Price", key: "appliedTo", value: 3, type: "price"},
      {title: "Fast Period", key: "fastPeriod", min: 1, max: 50, value: 12, type: "slider"},
      {title: "Slow Period", key: "slowPeriod", min: 1, max: 50, value: 26, type: "slider"},
      {title: "Signal Period", key: "signalPeriod", min: 1, max: 50, value: 9, type: "slider"},
      {title: "Fast MA Type", key: "fastMaType", value: "SMA", type: "matype"},
      {title: "Slow MA Type", key: "slowMaType", value: "SMA", type: "matype"},
      {title: "Signal MA Type", key: "signalMaType", value: "SMA", type: "matype"},
      {title: "MACD Line Stroke", key: "macdStroke", value: "#2a277a", type: "colorpicker"},
      {title: "Signal Line Stroke", key: "signalLineStroke", value: "#ff0000", type: "colorpicker"},
      {title: "Histogram Color", key: "macdHstgrmColor", value: "#7e9fc9", type: "colorpicker"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"}
    ],
    category: [
      "Momentum Indicators"
    ],
    description: "MACD is a trading indicator used in technical analysis of stock prices.It is supposed to reveal changes in the strength, direction, momentum, and duration of a trend in a stock's price."
  },
  cdlengulfing: {
    id: "cdlengulfing",
    long_display_name: "Engulfing Pattern",
    short_display_name: "CDLENGULFING",
    fields: [ ],
    cdl_indicator: {
      image: "engulfing_pattern"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "A chart pattern that consists of a small white candlestick with short shadows or tails followed by a large black candlestick that eclipses or 'engulfs' the small white one."
  },
  wclprice: {
    id: "wclprice",
    long_display_name: "Weighted Close Price",
    short_display_name: "WCLPRICE",
    onChartIndicator: true,
    editable: true,
    fields: [
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#FA023C", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"}
    ],
    category: [
      "Price Transformation"
     ],
     description: "The Weighted Close indicator is simply an average of each day's price. It can be used to smooth out some of the inconstancy of a chart of closing prices, as it comprises information for the whole trading day."
  },
  cci: {
    id: "cci",
    long_display_name: "Commodity Channel Index",
    short_display_name: "CCI",
    editable: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 50, value: 20, type: "slider"},
      {title: "MA Type", key: "maType", value: "SMA", type: "matype"},
      {title: "Stroke", key: "stroke", value: "#AAFF00", type: "colorpicker"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"}
    ],
    category: [
      "Momentum Indicators"
    ],
    description: "The Commodity Channel Index (CCI) is a versatile indicator that can be used to identify a new trend or warn of extreme conditions."
  },
  dema: {
    id: "dema",
    long_display_name: "Double Exponential Moving Average",
    short_display_name: "DEMA",
    onChartIndicator: true,
    editable: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 200, value: 21, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#FFAA00", type: "colorpicker"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    category: [
      "Overlap Studies"
    ],
    description: "The Double Exponential Moving Average (DEMA) by Patrick Mulloy attempts to remove the inherent lag associated to Moving Averages by placing more weight on recent values."
  },
  kama: {
    id: "kama",
    long_display_name: "Kaufman's Adaptive Moving Average",
    short_display_name: "KAMA",
    onChartIndicator: true,
    editable: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 200, value: 10, type: "slider"},
      {title: "Fast Period", key: "fastPeriod", min: 1, max: 200, value: 2, type: "slider"},
      {title: "Slow Period", key: "slowPeriod", min: 1, max: 200, value: 30, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#FF00AA", type: "colorpicker"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    category: [
      "Overlap Studies"
    ],
    description: "The Kaufman's Adaptive Moving Average (KAMA) Developed by Perry Kaufman, is a moving average designed to account for market noise or volatility. This trend-following indicator can be used to identify the overall trend, time turning points and filter price movements."
  },
  t3: {
    id: "t3",
    long_display_name: "Triple Exponential Moving Average (T3)",
    short_display_name: "T3",
    onChartIndicator: true,
    editable: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 200, value: 21, type: "slider"},
      {title: "Volume Factor", key: "vFactor", value: 0.7, min: 0, max: 1, step: 0.01, type: "slider"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#FFAA00", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    category: [
      "Overlap Studies"
    ],
    description: "The Triple Exponential Moving Average (T3) by Tim Tillson attempts to offers a moving average with better smoothing then traditional exponential moving average."
  },
  hma: {
    id: "hma",
    long_display_name: "Hull Moving Average",
    short_display_name: "HMA",
    onChartIndicator: true,
    editable: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 50, value: 20, type: "slider"},
      {title: "MA Type", key: "maType", value: "SMA", type: "matype"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#031634", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    category: [
      "Overlap Studies"
    ],
    description: "The Hull Moving Average solves the age old dilemma of making a moving average more responsive to current price activity whilst maintaining curve smoothness. In fact the HMA almost eliminates lag altogether and manages to improve smoothing at the same time."
  },
  lwma: {
    id: "lwma",
    long_display_name: "Linearly Weighted Moving Average",
    short_display_name: "LWMA",
    onChartIndicator: true,
    editable: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 50, value: 20, type: "slider"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#033649", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    category: [
      "Overlap Studies"
    ],
    description: "Like the EMA, the LWMA assigns more meaning to the recent prices and less to the closing price from the period's beginning. Thus they are faster at detecting a trend reversal, though it they can be more prone to market noise."
  },
  smma: {
    id: "smma",
    long_display_name: "Smoothed Moving Average",
    short_display_name: "SMMA",
    onChartIndicator: true,
    editable: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 50, value: 20, type: "slider"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#036564", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    category: [
      "Overlap Studies"
    ],
    description: "A Smoothed Moving Average is sort of a blend between a Simple Moving Average and an Exponential Moving Average, only with a longer period applied."
  },
  mama: {
    id: "mama",
    long_display_name: "Mesa Adaptive Moving Average",
    short_display_name: "MAMA",
    onChartIndicator: true,
    editable: true,
    fields: [
      {title: "Fast Limit", key: "fastLimit", value: 0.5, min: 0, max: 1, step: 0.01, type: "slider"},
      {title: "Slow Limit", key: "slowLimit", value: 0.05, min: 0, max: 1, step: 0.01, type: "slider"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#CDB380", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    category: [
      "Overlap Studies"
    ],
    description: "The MESA Adaptive Moving Average is developed by John Ehlers of Mesa Software. This trend-following indicator can be used to identify the overall trend, time turning points and filter price movements."
  },
  cdlupsidegap2crows: {
    id: "cdlupsidegap2crows",
    long_display_name: "Upside/Downside Gap Two Crows",
    short_display_name: "CDLUPSIDEGAP2CROWS",
    fields: [ ],
    cdl_indicator: {
      image: "upside_gap_two_crows"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "Look for a tall white candle in an upward price trend. Following that, a black candle has a body that gaps above the prior candle's body. The last day is another black candle, but this one engulfs the previous bearish candle but closes above first bar's open."
  },
  cdlxsidegap3methods: {
    id: "cdlxsidegap3methods",
    long_display_name: "Upside/Downside Gap Three Methods",
    short_display_name: "CDLXSIDEGAP3METHODS",
    fields: [ ],
    cdl_indicator: {
      image: "gap_three_methods"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "It has a long white candle, followed by another that opens above the first (gaps up), followed by a downward black candlestick that opens below the close of the second day (gaps down) and has a low below the close of the first day. The upward trend is expected to continue."
  },
  cdltasukigap: {
    id: "cdltasukigap",
    long_display_name: "Tasuki Gap",
    short_display_name: "CDLTASUKIGAP",
    fields: [ ],
    cdl_indicator: {
      image: "tasuki_gap"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "The Tasuki Gap pattern is made up of three candlesticks, the first bar is a red candlestick within a defined downtrend, the second bar is another red candlestick that has gapped below the close of the previous bar and the last bar is a white candlestick that closes within the gap of the first two bars."
  },
  cdlpiercing: {
    id: "cdlpiercing",
    long_display_name: "Piercing Pattern",
    short_display_name: "CDLPIERCING",
    fields: [ ],
    cdl_indicator: {
      image: "piercing_pattern"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "The piercing pattern is made up of two candlesticks, the first black and the second white.Both candlesticks should have fairly large bodies and the shadows are usually, but not necessarily, small or nonexistent. The white candlestick must open below the previous close and close above the midpoint of the black candlestick's body. A close below the midpoint might qualify as a reversal, but would not be considered as bullish."
  },
  cdlbelthold: {
    id: "cdlbelthold",
    long_display_name: "Belt-hold ",
    short_display_name: "CDLBELTHOLD",
    fields: [ ],
    cdl_indicator: {
      image: "belt_hold"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "In Bullish Belt Hold After a stretch of bearish candlesticks, a bullish or white candlestick forms. The opening price, which becomes the low for the day, is significantly lower then the closing price. This results in a long white candlestick with a short upper shadow and no lower shadow. In Berish Belt Hold, a bearish or black candlestick occurs, the opening price, which becomes the high for the day, is higher than the close of the previous day, resulting in a long black candlestick with a short lower shadow and no upper shadow."
  },
  cdldarkcloudcover: {
    id: "cdldarkcloudcover",
    long_display_name: "Dark Cloud Cover ",
    short_display_name: "CDLDARKCLOUDCOVER",
    fields: [ ],
    cdl_indicator: {
      image: "dark_cloud_cover"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "Dark Cloud Cover is a bearish candlestick reversal pattern that occurs when a red bearish candlestick (close price below open price) on day 2 closes below the middle of day 1 bullish candlestick (close price above open price). We will be using this pattern to sell rallies in a bearish currency market."
  },
  cdlgapsidesidewhite: {
    id: "cdlgapsidesidewhite",
    long_display_name: "Up/Down-Gap Side-By-Side White Lines",
    short_display_name: "CDLGAPSIDESIDEWHITE",
    fields: [ ],
    cdl_indicator: {
      image: "side_by_side_white_line"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "Side by side white lines candlestick pattern is a triple pattern. Bullish pattern: In an upward trend, the first candlestick is followed by another upward that opens above the close of the first (gap up), that is followed by a third upward candlestick that opens below the close of the second (gap down). Bearish pattern: During a downtrend, the first candlestick is downward, followed by an upward candlestick that opens below the close of the first one (gap down), followed by an upward candlestick that opens below the close of the second one. This pattern indicates the continuation of a downtrend."
  },
  cdltakuri: {
    id: "cdltakuri",
    long_display_name: "Takuri (Dragonfly Doji with very long lower shadow)",
    short_display_name: "CDLTAKURI",
    fields: [ ],
    cdl_indicator: {
      image: "takuri_line"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "In a downtrend, one small short body candlestick has a long lower shadow at least three times the real body, and little or no upper shadow. Confirmation from prices closing higher the next day."
  },
  cdlharami: {
    id: "cdlharami",
    long_display_name: "Harami Pattern",
    short_display_name: "CDLHARAMI",
    fields: [ ],
    cdl_indicator: {
      image: "harami_pattern"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "A candlestick chart pattern in which a large candlestick is followed by a smaller candlestick whose body is located within the vertical range of the larger body. In terms of candlestick colors, the bullish harami is a downtrend of negative-colored (black) candlesticks engulfing a small positive (white) candlestick, giving a sign of a reversal of the downward trend."
  },
  cdlhammer: {
    id: "cdlhammer",
    long_display_name: "Hammer",
    short_display_name: "CDLHAMMER",
    fields: [ ],
    cdl_indicator: {
      image: "hammer"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "The Hammer formation is created when the open, high, and close are roughly the same price.Also, there is a long lower shadow, twice the length as the real body."
  },
  cdlhangingman: {
    id: "cdlhangingman",
    long_display_name: "Hanging Man",
    short_display_name: "CDLHANGINGMAN",
    fields: [ ],
    cdl_indicator: {
      image: "hanging_man"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "The Hanging Man formation, just like the Hammer, is created when the open, high, and close are roughly the same price. Also, there is a long lower shadow, which should be at least twice the length of the real body."
  },
  cdlinvertedhammer: {
    id: "cdlinvertedhammer",
    long_display_name: "Inverted Hammer",
    short_display_name: "CDLINVERTEDHAMMER",
    fields: [ ],
    cdl_indicator: {
      image: "inverted_hammer"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "The Inverted Hammer occurs mainly at the bottom of downtrends when the open, low, and close are roughly the same price. Also, there is a long upper shadow, which should be at least twice the length of the real body."
  },
  cdlgravestonedoji: {
    id: "cdlgravestonedoji",
    long_display_name: "Gravestone Doji",
    short_display_name: "CDLGRAVESTONEDOJI",
    fields: [ ],
    cdl_indicator: {
      image: "gravestone_doji"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "The Gravestone Doji is created when the open, low, and close are the same or about the same price (Where the open, low, and close are exactly the same price is quite rare). The most important part of the Graveston Doji is the long upper shadow."
  },
  cdlharamicross: {
    id: "cdlharamicross",
    long_display_name: "Harami Cross Pattern",
    short_display_name: "CDLHARAMICROSS",
    fields: [ ],
    cdl_indicator: {
      image: "harami_cross"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "A trend indicated by a large candlestick followed by a doji that is located within the top and bottom of the candlestick's body. This indicates that the previous trend is about to reverse."
  },
  cdlstalledpattern: {
    id: "cdlstalledpattern",
    long_display_name: "Stalled Pattern",
    short_display_name: "CDLSTALLEDPATTERN",
    fields: [ ],
    cdl_indicator: {
      image: "stalled_pattern"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "Bearish: This is an end-of-trend pattern composed of three candlesticks in an uptrend. The second candlestick must open close to the close of the previous day. The last candlestick should be short and can form an upside gap. There could also be a selling shadow.The pattern represents a weakness in a rise with a risk of consolidation and possible reversal. Bullish: This is an end-of-trend pattern composed of three candlesticks in a downtrend. The second candlestick must open close to the close of the previous day. the last candlestick must be shore. The pattern represents a weakness and consolidation and a possible reversal in trend."
  },
  cdleveningstar: {
    id: "cdleveningstar",
    long_display_name: "Evening Star",
    short_display_name: "CDLEVENINGSTAR",
    fields: [ ],
    cdl_indicator: {
      image: "evening_star"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "A bearish candlestick pattern consisting of three candles that have demonstrated the following characteristics, the first bar is a large white candlestick located within an uptrend, the middle bar is a small-bodied candle (red or white) that closes above the first white bar, the last bar is a large red candle that opens below the middle candle and closes near the center of the first bar's body."
  },
  cdlhighwave: {
    id: "cdlhighwave",
    long_display_name: "High-Wave Candle",
    short_display_name: "CDLHIGHWAVE",
    fields: [ ],
    cdl_indicator: {
      image: "high_wave"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "A candlestick with very long upper and lower shadows and a small real body on a Japanese candlestick chart. It shows that the market is losing its direction bias that it had before this candle appeared."
  },
  cdlhikkake: {
    id: "cdlhikkake",
    long_display_name: "Hikkake Pattern",
    short_display_name: "CDLHIKKAKE",
    fields: [ ],
    cdl_indicator: {
      image: "hikkake"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "In Bullish Hikkake Pattern After the downward move, the bullish candle reaches above the range of the three preceding candles and most likely triggers a number of stop loss orders. This additional buying leads to a more distinct upward movement. In Bearish Hikkake Pattern After an upward move, the bearish candle reaches below the range of the three preceding , which most likely triggers a number of stop loss orders. This additional selling leads to a more distinct downward move."
  },
  cdlhomingpigeon: {
    id: "cdlhomingpigeon",
    long_display_name: "Homing Pigeon",
    short_display_name: "CDLHOMINGPIGEON",
    fields: [ ],
    cdl_indicator: {
      image: "homing_pigeon"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "The homing pigeon is a bullish candlestick reversal pattern comprised of two red candlesticks. The first candle is a tall black one that appears in a downward price trend. The second day is also a black candle, but it is smaller and fits inside the body of the first black candle."
  },
  cdltristar: {
    id: "cdltristar",
    long_display_name: "Tristar Pattern",
    short_display_name: "CDLTRISTAR",
    fields: [ ],
    cdl_indicator: {
      image: "tristar"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "The Bullish Three Star appears after a downtrend and it consists of three consecutive Doji, in which the second Doji gaps below the other two Doji. The Bearish Three Star appears after a uptrend and it consists of three consecutive Doji, in which the second Doji gaps above the other two Doji."
  },
  cdllongline: {
    id: "cdllongline",
    long_display_name: "Long Line Candle",
    short_display_name: "CDLLONGLINE",
    fields: [ ],
    cdl_indicator: {
      image: "long_line_candle"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "A candlestick with a long black body (long line) represents a bearish force in the market. The price of the stock was up and down in a wide range, opening near the high and closing near the low of the day. One with a long white line represents a bullish force in the market. The price of the stock was up and down in a wide range, opening near the low of the day and closing near the high."
  },
  cdlmarubozu: {
    id: "cdlmarubozu",
    long_display_name: "Marubozu",
    short_display_name: "CDLMARUBOZU",
    fields: [ ],
    cdl_indicator: {
      image: "marubozu"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "A medium to long bullish or bearish candlestick with the key defining trait being no head or tail shadows."
  },
  cdlkicking: {
    id: "cdlkicking",
    long_display_name: "Kicking",
    short_display_name: "CDLKICKING",
    fields: [ ],
    cdl_indicator: {
      image: "kicking"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "Kicking patterns on a candlestick chart are formed when there are two marubozu - one white and one black - with a gap between them. Bullish kicking patterns would present as a black or filled candlestick without any wicks (shadows) followed by a gap higher with a white or hollow candlestick that is also without wicks."
  },
  cdlmatchinglow: {
    id: "cdlmatchinglow",
    long_display_name: "Matching Low",
    short_display_name: "CDLMATCHINGLOW",
    fields: [ ],
    cdl_indicator: {
      image: "matching_low"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "This pattern occurs when two black days appear with equal closes in a downtrend. Matching Low indicates a bottom has been made, even though the new low was tested and there was no follow through, which is indicative of a good support price."
  },
  cdlladderbottom: {
    id: "cdlladderbottom",
    long_display_name: "Ladder Bottom",
    short_display_name: "CDLLADDERBOTTOM",
    fields: [ ],
    cdl_indicator: {
      image: "ladder_bottom"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "The first three days of the Bullish Ladder Bottom are strong black candlesticks with consecutive lower opens and lower closes. The fourth day is a short black candlestick, but it opens higher and trades higher, leaving a long upper shadow, then closes making a new low. The fifth day is a strong white candlestick that makes a body gap with the fourth day."
  },
  cdlrisefall3methods: {
    id: "cdlrisefall3methods",
    long_display_name: "Rising/Falling Three Methods",
    short_display_name: "CDLRISEFALL3METHODS",
    fields: [ ],
    cdl_indicator: {
      image: "rising_falling_three_methods"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "The Three Methods pattern is a trend continuation pattern that can appear in an uptrend or a down trend. In an uptrend it is called the rising three methods pattern and in a downtrend it is called the falling three methods pattern. The three methods pattern consists of at least five candlesticks."
  },
  cdlidentical3crows: {
    id: "cdlidentical3crows",
    long_display_name: "Identical Three Crows",
    short_display_name: "CDLIDENTICAL3CROWS",
    fields: [ ],
    cdl_indicator: {
      image: "identical_three_crows"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "In an uptrend three successive days opens at or near the previous day's close and close down on the day. This pattern is more severe than the Three Black Crows pattern and thus has a higher reliability as a reversal pattern."
  },
  cdlmorningstar: {
    id: "cdlmorningstar",
    long_display_name: "Morning Star",
    short_display_name: "CDLMORNINGSTAR",
    fields: [ ],
    cdl_indicator: {
      image: "morning_star"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "A bullish candlestick pattern that consists of three candles, the first bar is a large red candlestick located within a defined downtrend, the second bar is a small-bodied candle (either red or white) that closes below the first red bar and the last bar is a large white candle that opens above the middle candle and closes near the center of the first bar's body."
  },
  cdlspinningtop: {
    id: "cdlspinningtop",
    long_display_name: "Spinning Top",
    short_display_name: "CDLSPINNINGTOP",
    fields: [ ],
    cdl_indicator: {
      image: "spinning_top"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "A Spinning Top Candlestick is a bullish or bearish candlestick with a small body. The length of the head and tail shadows can vary. Like a Doji Candlestick it represents a point of indecision with buyers and seller matched."
  },
  cdldragonflydoji: {
    id: "cdldragonflydoji",
    long_display_name: "Dragonfly Doji",
    short_display_name: "CDLDRAGONFLYDOJI",
    fields: [ ],
    cdl_indicator: {
      image: "dragonfly_doji"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "The Dragonfly Doji is created when the open, high, and close are the same or about the same price (Where the open, high, and close are exactly the same price is quite rare).The most important part of the Dragonfly Doji is the long lower shadow."
  },
  cdllongleggeddoji: {
    id: "cdllongleggeddoji",
    long_display_name: "Long Legged Doji",
    short_display_name: "CDLLONGLEGGEDDOJI",
    fields: [ ],
    cdl_indicator: {
      image: "long_legged_doji"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "Long-legged doji have long upper and lower shadows that are almost equal in length. These doji reflect a great amount of indecision in the market. Long-legged doji indicate that prices traded well above and below the session's opening level, but closed virtually even with the open. After a whole lot of yelling and screaming, the end result showed little change from the initial open."
  },
  cdleveningdojistar: {
    id: "cdleveningdojistar",
    long_display_name: "Evening Doji Star",
    short_display_name: "CDLEVENINGDOJISTAR",
    fields: [ ],
    cdl_indicator: {
      image: "evening_doji_star"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "A Evening Doji Star consists of a long bullish candle, followed by a Doji that has gapped above it, then a third bearish candle that closes well within the body of the first candle and in doing so confirming the reversal. It is considered a strong bearish price reversal candlestick pattern."
  },
  cdlbreakaway: {
    id: "cdlbreakaway",
    long_display_name: "Breakaway",
    short_display_name: "CDLBREAKAWAY",
    fields: [ ],
    cdl_indicator: {
      image: "breakaway_pattern"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "The breakaway pattern begins with a long candle representing the current trend. The following candle is the same color and it gaps away from that first long candle. While the third day’s candle can be either color, it will not show a change in the current trend. The fourth day continues the trend and therefore continues to produce the same color candles. The fifth day however, reverses the trend. Please note that it only opens slightly the opposite of the current trend and it continues in the same direction to where it then closes in the gap area."
  },
  cdladvanceblock: {
    id: "cdladvanceblock",
    long_display_name: "Advance Block",
    short_display_name: "CDLADVANCEBLOCK",
    fields: [ ],
    cdl_indicator: {
      image: "advance_block"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "Three white days occur. Each successive day opens within the body of the previous day and closes above the previous day. The bodies of the candles get progressively smaller with the upper shadows of day 2 and 3 getting progressively longer."
  },
  cdlcounterattack: {
    id: "cdlcounterattack",
    long_display_name: "Counterattack",
    short_display_name: "CDLCOUNTERATTACK",
    fields: [ ],
    cdl_indicator: {
      image: "counterattack"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "A bearish counterattack is a long white candle in an uptrend, followed by a long black candle. Closing prices of both candles are at the same price level. A bullish counterattack is a long black candle in an downtrend, followed by a long white candle. Closing prices of both candles are at the same price level."
  },
  cdlmorningdojistar: {
    id: "cdlmorningdojistar",
    long_display_name: "Morning Doji Star",
    short_display_name: "CDLMORNINGDOJISTAR",
    fields: [ ],
    cdl_indicator: {
      image: "morning_doji_star"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "A bullish candlestick pattern that consists of three candles, the first bar is a large red candlestick located within a defined downtrend, the second bar is a small-bodied candle (either red or white) that closes below the first red bar., he last bar is a large white candle that opens above the middle candle and closes near the center of the first bar's body."
  },
  cdlinneck: {
    id: "cdlinneck",
    long_display_name: "In-Neck Pattern",
    short_display_name: "CDLINNECK",
    fields: [ ],
    cdl_indicator: {
      image: "in_neck"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "The Bearish I-Neck Pattern occurs after a downtrend when first day is a long red candle and the second day is a blue day, opening below the low of the first day and closing barely into the body of the first day."
  },
  cdlonneck: {
    id: "cdlonneck",
    long_display_name: "On-Neck Pattern",
    short_display_name: "CDLONNECK",
    fields: [ ],
    cdl_indicator: {
      image: "on_neck"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "The Bearish On-Neck Pattern occurs after a downtrend when a long black day is followed by a long white day that gaps down at the open and closes below the close of the black day."
  },
  cdlrickshawman: {
    id: "cdlrickshawman",
    long_display_name: "Rickshaw Man",
    short_display_name: "CDLRICKSHAWMAN",
    fields: [ ],
    cdl_indicator: {
      image: "rickshaw_man"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "The Rickshaw Man has unusually tall upper and lower shadows, a body in which the opening and closing prices are about the same, and the body is near the middle of the candlestick."
  },
  cdlunique3river: {
    id: "cdlunique3river",
    long_display_name: "Unique 3 River",
    short_display_name: "CDLUNIQUE3RIVER",
    fields: [ ],
    cdl_indicator: {
      image: "three_river"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "Unique Three River Bottom is a bullish candlestick pattern made up of three candles: The 1st candle has a long and bearish body, the 2nd candle is a hammer, and its body is inside the 1st bar's body, the 3rd candle is small and bullish, its Close price is lower than 2nd bar's."
  },
  cdlseparatinglines: {
    id: "cdlseparatinglines",
    long_display_name: "Separating Lines",
    short_display_name: "CDLSEPARATINGLINES",
    fields: [ ],
    cdl_indicator: {
      image: "separating_lines"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "A bearish separating line is a bearish continuation pattern.  It is the exact opposite of the bullish separating line.  There are two components to the bearish separating line: The first day is a green candlestick and the second day gaps down, opens at the first candlestick's open and closes weakly."
  },
  cdlmathold: {
    id: "cdlmathold",
    long_display_name: "Mat Hold",
    short_display_name: "CDLMATHOLD",
    fields: [ ],
    cdl_indicator: {
      image: "mat_hold"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "A bullish candlestick pattern that consists of five candles, the first day is a long white day, the second day gaps up and is a black day, the second, third, and fourth days have small real bodies and follow a brief downtrend pattern, but stay within the range of the first day and the fifth day is a long white day that closes above the close of the first day."
  },
  cdlsticksandwich: {
    id: "cdlsticksandwich",
    long_display_name: "Stick Sandwich",
    short_display_name: "CDLSTICKSANDWICH",
    fields: [ ],
    cdl_indicator: {
      image: "stick_sandwich"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "A technical trading pattern in which three candlesticks form what appears to be a sandwich on the trader's screen. Stick sandwiches will have the middle candlestick oppositely colored of the candlesticks on either side of it, both of which will have a larger trading range than the middle candlestick. Stick sandwich patterns can occur in both bearish and bullish indications."
  },
  cdlkickingbylength: {
    id: "cdlkickingbylength",
    long_display_name: "Kicking - bull/bear determined by the longer marubozu",
    short_display_name: "CDLKICKINGBYLENGTH",
    fields: [ ],
    cdl_indicator: {
      image: "kicking"
    },
    category: [
      "Pattern Recognition"
    ],
    description: "Kicking patterns on a candlestick chart are formed when there are two long marubozu - one white and one black - with a gap between them. Bullish kicking patterns would present as a black or filled candlestick without any wicks (shadows) followed by a gap higher with a white or hollow candlestick that is also without wicks."
  },
  stddev: {
    id: "stddev",
    long_display_name: "Standard Deviation",
    short_display_name: "STDDEV",
    editable: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 200, value: 20, type: "slider"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#5A0397", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"}
    ],
    levels:{
      fields: [
        {title: "Level", key: "value", min: 1, max: 100, value: 50, type: "slider"},
        {title: "Stroke width", key: "width", min: 1, max: 10, value: 1, type: "slider"},
        {title: "Stroke", key: "color", value: "#5A0397", type: "colorpicker"},
        {title: "Dash style", key: "dashStyle", value: "Dash", type: "dashstyle"}
      ],
      values: [ ]
    },
    category: [
      "Statistical Functions"
    ],
    description: "Standard Deviation is a statistical calculation used to measure the variability. In trading this value is known as volatility. A low standard deviation indicates that the data points tend to be very close to the mean, whereas high standard deviation indicates that the data points are spread out over a large range of values."
  },
  ppo: {
    id: "ppo",
    long_display_name: "Percentage Price Oscillator",
    short_display_name: "PPO",
    editable: true,
    fields: [
      {title: "Price", key: "appliedTo", value: 3, type: "price"},
      {title: "Fast Period", key: "fastPeriod", min: 1, max: 50, value: 12, type: "slider"},
      {title: "Slow Period", key: "slowPeriod", min: 1, max: 50, value: 26, type: "slider"},
      {title: "Signal Period", key: "signalPeriod", min: 1, max: 50, value: 9, type: "slider"},
      {title: "Fast MA Type", key: "fastMaType", value: "SMA", type: "matype"},
      {title: "Slow MA Type", key: "slowMaType", value: "SMA", type: "matype"},
      {title: "Signal MA Type", key: "signalMaType", value: "SMA", type: "matype"},
      {title: "PPO Line Stroke", key: "ppoStroke", value: "#2a277a", type: "colorpicker"},
      {title: "Signal Line Stroke", key: "signalLineStroke", value: "#ff0000", type: "colorpicker"},
      {title: "Histogram Color", key: "ppoHstgrmColor", value: "#7e9fc9", type: "colorpicker"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"}
    ],
    category: [
      "Momentum Indicators"
    ],
    description: "The Percentage Price Oscillator (PPO) is a momentum oscillator that measures the difference between two moving averages as a percentage of the larger moving average."
  },
  trange: {
    id: "trange",
    long_display_name: "True Range",
    short_display_name: "TRANGE",
    editable: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 200, value: 14, type: "slider"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#890357", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    levels:{
      fields: [
        {title: "Level", key: "value", min: 1, max: 100, value: 50, type: "slider"},
        {title: "Stroke width", key: "width", min: 1, max: 10, value: 1, type: "slider"},
        {title: "Stroke", key: "color", value: "#890357", type: "colorpicker"},
        {title: "Dash style", key: "dashStyle", value: "Dash", type: "dashstyle"}
      ],
      values: [
        {color: "#890357", dashStyle: "Dash", label: { text: 30}, value: 30, "width" : 1},
        {color: "#890357", dashStyle: "Dash", label: { text: 70}, value: 70, "width" : 1}
      ]
    },
    category: [
      "Volatility Indicators"
    ],
    description: "The Average True Range (TRANGE) study measures the size of the period’s range, and takes into account any gap from the close of the previous period."
  },
  stochrsi: {
    id: "stochrsi",
    long_display_name: "Stochastic Relative Strength Index",
    short_display_name: "STOCHRSI",
    editable: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 200, value: 14, type: "slider"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#DEA02D", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    levels:{
      fields: [
        {title: "Level", key: "value", min: 0, max: 2, value: 1, step: 0.01, type: "slider"},
        {title: "Stroke width", key: "width", min: 1, max: 10, value: 1, type: "slider"},
        {title: "Stroke", key: "color", value: "#DEA02D", type: "colorpicker"},
        {title: "Dash style", key: "dashStyle", value: "Dash", type: "dashstyle"}
      ],
      values: [
        {color: "#DEA02D", dashStyle: "Dash", label: { text: 0.3}, value: 0.3, "width" : 1},
        {color: "#DEA02D", dashStyle: "Dash", label: { text: 0.7}, value: 0.7, "width" : 1}
      ]
    },
    category: [
      "Momentum Indicators"
    ],
    description: "The Stochastic Relative Strength Index (STOCHRSI) was developed by Tushar Chande and Stanley Kroll, StochRSI is an oscillator that measures the level of RSI relative to its high-low range over a set time period. StochRSI applies the Stochastics formula to RSI values, instead of price values. This makes it an indicator of an indicator. The result is an oscillator that fluctuates between 0 and 1."
  },
  mom: {
    id: "mom",
    long_display_name: "Momentum",
    short_display_name: "MOM",
    editable: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 200, value: 14, type: "slider"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#6299FD", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    levels:{
      fields: [
        {title: "Level", key: "value", min: -40, max: 20, value: 0, type: "slider"},
        {title: "Stroke width", key: "width", min: 1, max: 10, value: 1, type: "slider"},
        {title: "Stroke", key: "color", value: "#6299FD", type: "colorpicker"},
        {title: "Dash style", key: "dashStyle", value: "Dash", type: "dashstyle"}
      ],
      values: [ ]
    },
    category: [
      "Momentum Indicators"
    ],
    description: "The Momentum indicator compares where the current price is in relation to where the price was in the past. How far in the past the comparison is made is up to the technical analysis trader. The calculation of Momentum is quite simple (n is the number of periods the technical trader selects): The current price minus the price n-periods ago"
  },
  alma: {
    id: "alma",
    long_display_name: "Arnaud Legoux Moving Average",
    short_display_name: "ALMA",
    editable: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 200, value: 9, type: "slider"},
      {title: "Offset", key: "offset", min: 0, max: 1, value: 0.85, step: 0.01, type: "slider"},
      {title: "Sigma", key: "sigma", min: 1, max: 200, value: 6, type: "slider"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#1693A5", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    onChartIndicator: true,
    category: [
      "Overlap Studies"
    ],
    description: "This Moving Average uses curve of the Normal (Gauss) distribution which can be placed by Offset parameter from 0 to 1. This parameter allows regulating the smoothness and high sensitivity of the Moving Average. Sigma is another parameter that is responsible for the shape of the curve coefficients."
  },
  aroon: {
    id: "aroon",
    long_display_name: "Aroon",
    short_display_name: "AROON",
    editable: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 200, value: 25, type: "slider"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Aroon Up Stroke", key: "aroonUpStroke", value: "#02AAB0", type: "colorpicker"},
      {title: "Aroon Down Stroke", key: "aroonDownStroke", value: "#00CDAC", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"}
    ],
    levels:{
      fields: [
        {title: "Level", key: "value", min: 1, max: 100, value: 50, type: "slider"},
        {title: "Stroke width", key: "width", min: 1, max: 10, value: 1, type: "slider"},
        {title: "Stroke", key: "color", value: "#DEA02D", type: "colorpicker"},
        {title: "Dash style", key: "dashStyle", value: "Dash", type: "dashstyle"}
      ],
      values: [
        {color: "#02AAB0", dashStyle: "Dash", label: { text: 30}, value: 30, "width" : 1},
        {color: "#00CDAC", dashStyle: "Dash", label: { text: 70}, value: 70, "width" : 1}
      ]
    },
    category: [
      "Momentum Indicators"
    ],
    description: "Developed by Tushar Chande in 1995, Aroon is an indicator system that determines whether a stock is trending or not and how strong the trend is. There are two separate indicators: Aroon-Up and Aroon-Down. A 25-day Aroon-Up measures the number of days since a 25-day high. A 25-day Aroon-Down measures the number of days since a 25-day low."
  },
  aroonosc: {
    id: "aroonosc",
    long_display_name: "Aroon Oscillator",
    short_display_name: "AROONOSC",
    editable: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 200, value: 25, type: "slider"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#7FFF24", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"}
    ],
    levels:{
      fields: [
        {title: "Level", key: "value", min: 1, max: 100, value: 50, type: "slider"},
        {title: "Stroke width", key: "width", min: 1, max: 10, value: 1, type: "slider"},
        {title: "Stroke", key: "color", value: "#7FFF24", type: "colorpicker"},
        {title: "Dash style", key: "dashStyle", value: "Dash", type: "dashstyle"}
      ],
      values: [
        {color: "#7FFF24", dashStyle: "Dash", label: { text: 30}, value: 30, "width" : 1},
        {color: "#7FFF24", dashStyle: "Dash", label: { text: 70}, value: 70, "width" : 1}
      ]
    },
    category: [
      "Momentum Indicators"
    ],
    description: "The Aroon Oscillator is the difference between Aroon-Up and Aroon-Down. These two indicators are usually plotted together for easy comparison, but chartists can also view the difference of these two indicators with the Aroon Oscillator. This indicator fluctuates between -100 and +100 with zero as the middle line."
  },
  ao: {
    id: "ao",
    long_display_name: "Awesome Oscillator",
    short_display_name: "AO",
    editable: true,
    fields: [
      {title: "Short Term Period", key: "shortPeriod", min: 5, max: 35, value: 5, type: "slider"},
      {title: "Long Term Period", key: "longPeriod", min: 5, max: 35, value: 35, type: "slider"},
      {title: "Short MA Type", key: "shortMaType", value: "SMA", type: "matype"},
      {title: "Long MA Type", key: "longMaType", value: "SMA", type: "matype"},
      {title: "Histogram Color For Higher Values", key: "aoHighStroke", value: "#00C176", type: "colorpicker"},
      {title: "Histogram Color For Lower Values", key: "aoLowStroke", value: "#FF003C", type: "colorpicker"}
    ],
    levels:{
      fields: [
        {title: "Level", key: "value", min: 1, max: 100, value: 50, type: "slider"},
        {title: "Stroke width", key: "width", min: 1, max: 10, value: 1, type: "slider"},
        {title: "Stroke", key: "color", value: "#FF003C", type: "colorpicker"},
        {title: "Dash style", key: "dashStyle", value: "Dash", type: "dashstyle"}
      ],
      values: [
        {color: "#FF003C", dashStyle: "Dash", label: { text: 30}, value: 30, "width" : 1},
        {color: "#00C176", dashStyle: "Dash", label: { text: 70}, value: 70, "width" : 1}
      ]
    },
    category: [
      "Bill Williams"
    ],
    description: "The Awesome Oscillator is an indicator used to measure market momentum. AO calculates the difference of a 34 Period and 5 Period Simple Moving Averages. The Simple Moving Averages that are used are not calculated using closing price but rather each bar's midpoints. AO is generally used to affirm trends or to anticipate possible reversals."
  },
  var: {
    id: "var",
    long_display_name: "Variance",
    short_display_name: "VAR",
    editable: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 200, value: 20, type: "slider"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#058789", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"}
    ],
    levels:{
      fields: [
        {title: "Level", key: "value", min: 0, max: 0.005, value: 0.001, step: 0.0001, type: "slider"},
        {title: "Stroke width", key: "width", min: 1, max: 10, value: 1, type: "slider"},
        {title: "Stroke", key: "color", value: "#058789", type: "colorpicker"},
        {title: "Dash style", key: "dashStyle", value: "Dash", type: "dashstyle"}
      ],
      values: [ ]
    },
    category: [
      "Statistical Functions"
    ],
    description: "The variance and the closely-related standard deviation are measures of how spread out a distribution is. In other words, they are measures of variability. The variance is computed as the average squared deviation of each number from its mean."
  },
  cks: {
    id: "cks",
    long_display_name: "Chande Kroll Stop",
    short_display_name: "CKS",
    onChartIndicator: true,
    editable: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 200, value: 10, type: "slider"},
      {title: "Max/Min Period", key: "maxMinPeriod", min: 1, max: 200, value: 20, type: "slider"},
      {title: "Multiplier", key: "multiplier", min: 1, max: 50, value: 3, type: "slider"},
      {title: "Long Stop Line Stroke", key: "longStopStroke", value: "#00C176", type: "colorpicker"},
      {title: "Short Stop Line Stroke", key: "shortStopStroke", value: "#FF003C", type: "colorpicker"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"}
    ],
    category: [
      "Volatility Indicators"
    ],
    description: "The Double Exponential Moving Average (CKS) by Patrick Mulloy attempts to remove the inherent lag associated to Moving Averages by placing more weight on recent values."
  },
  cc: {
    id: "cc",
    long_display_name: "Coppock Curve",
    short_display_name: "CC",
    editable: true,
    fields: [
      {title: "Short ROC Period", key: "shortRocPeriod", min: 1, max: 200, value: 11, type: "slider"},
      {title: "Long ROC Period", key: "longRocPeriod", min: 1, max: 200, value: 14, type: "slider"},
      {title: "WMA Period", key: "wmaPeriod", min: 1, max: 200, value: 10, type: "slider"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#503D2E", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    levels:{
      fields: [
        {title: "Level", key: "value", min: -0.5, max: 0.5, value: 0, step: 0.01, type: "slider"},
        {title: "Stroke width", key: "width", min: 1, max: 10, value: 1, type: "slider"},
        {title: "Stroke", key: "color", value: "#503D2E", type: "colorpicker"},
        {title: "Dash style", key: "dashStyle", value: "Dash", type: "dashstyle"}
      ],
      values: [ ]
    },
    category: [
      "Momentum Indicators"
    ],
    description: "The indicator is designed for use on a monthly time scale. It is the sum of a 14-month rate of change and 11-month rate of change, smoothed by a 10-period weighted moving average."
  },
  chop: {
    id: "chop",
    long_display_name: "Choppiness Index",
    short_display_name: "CHOP",
    editable: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 200, value: 25, type: "slider"},
      {title: "ATR Period", key: "atrPeriod", min: 1, max: 200, value: 25, type: "slider"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#D54B1A", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"},
      {title: "Plot Color", key: "plotBands", value: "rgba(178, 191, 217, 0.2)", type: "plotcolor"}
    ],
    levels:{
      fields: [
        {title: "Level", key: "value", min: 1, max: 100, value: 50, type: "slider"},
        {title: "Stroke width", key: "width", min: 1, max: 10, value: 1, type: "slider"},
        {title: "Stroke", key: "color", value: "#D54B1A", type: "colorpicker"},
        {title: "Dash style", key: "dashStyle", value: "Dash", type: "dashstyle"}
      ],
      values: [
        {color: "#D54B1A", dashStyle: "Dash", label: { text: 30}, value: 30, "width" : 1},
        {color: "#D54B1A", dashStyle: "Dash", label: { text: 70}, value: 70, "width" : 1}
      ]
    },
    category: [
      "Momentum Indicators"
    ],
    description: "The Choppiness Index (CHOP) is an indicator designed to determine if the market is choppy (trading sideways) or not choppy (trading within a trend in either direction). CHOP is not meant to predict future market direction, it is a metric to be used to for defining the market's trendiness only."
  },
  adx: {
    id: "adx",
    long_display_name: "Average Directional Movement Index",
    short_display_name: "ADX",
    editable: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 200, value: 14, type: "slider"},
      {title: "ADX MA Type", key: "maType", value: "SMA", type: "matype"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#E21B5A", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    levels:{
      fields: [
        {title: "Level", key: "value", min: 0, max: 1, value: 0.5, step: 0.01, type: "slider"},
        {title: "Stroke width", key: "width", min: 1, max: 10, value: 1, type: "slider"},
        {title: "Stroke", key: "color", value: "#E21B5A", type: "colorpicker"},
        {title: "Dash style", key: "dashStyle", value: "Dash", type: "dashstyle"}
      ],
      values: [
        {color: "#E21B5A", dashStyle: "Dash", label: { text: 0.3}, value: 0.3, "width" : 1},
        {color: "#E21B5A", dashStyle: "Dash", label: { text: 0.7}, value: 0.7, "width" : 1}
      ]
    },
    category: [
      "Momentum Indicators"
    ],
    description: "The Average Directional Movement Index index (ADX) was developed in 1978 by J. Welles Wilder as an indicator of trend strength in a series of prices of a financial instrument ADX will range between 0 and 100. Generally, ADX readings below 20 indicate trend weakness, and readings above 40 indicate trend strength."
  },
  dx: {
    id: "dx",
    long_display_name: "Directional Movement Index",
    short_display_name: "DX",
    editable: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 200, value: 14, type: "slider"},
      {title: "DX MA Type", key: "maType", value: "SMA", type: "matype"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "dxStroke", value: "#7B6ED6", type: "colorpicker"},
      {title: "+DI Stroke", key: "plusDIStroke", value: "#13CD4A", type: "colorpicker"},
      {title: "-DI Stroke", key: "minusDIStroke", value: "#EC4401", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    levels:{
      fields: [
        {title: "Level", key: "value", min: 0, max: 1, value: 0.5, step: 0.01, type: "slider"},
        {title: "Stroke width", key: "width", min: 1, max: 10, value: 1, type: "slider"},
        {title: "Stroke", key: "color", value: "#13CD4A", type: "colorpicker"},
        {title: "Dash style", key: "dashStyle", value: "Dash", type: "dashstyle"}
      ],
      values: [
        {color: "#7B6ED6", dashStyle: "Dash", label: { text: 0.3}, value: 0.3, "width" : 1},
        {color: "#EC4401", dashStyle: "Dash", label: { text: 0.7}, value: 0.7, "width" : 1}
      ]
    },
    category: [
      "Momentum Indicators"
    ],
    description: "Directional Movement (DMI) is actually a collection of three separate indicators combined into one. Directional Movement consists of the Average Directional Index (ADX), Plus Directional Indicator (+DI) and Minus Directional Indicator (-DI)."
  },
  adxr: {
    id: "adxr",
    long_display_name: "Average Directional Movement Index Rating",
    short_display_name: "ADXR",
    editable: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 200, value: 14, type: "slider"},
      {title: "MA Type", key: "maType", value: "SMA", type: "matype"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#9B0D94", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    levels:{
      fields: [
        {title: "Level", key: "value", min: 0, max: 1, value: 0.5, step: 0.01, type: "slider"},
        {title: "Stroke width", key: "width", min: 1, max: 10, value: 1, type: "slider"},
        {title: "Stroke", key: "color", value: "#9B0D94", type: "colorpicker"},
        {title: "Dash style", key: "dashStyle", value: "Dash", type: "dashstyle"}
      ],
      values: [
        {color: "#9B0D94", dashStyle: "Dash", label: { text: 0.3}, value: 0.3, "width" : 1},
        {color: "#9B0D94", dashStyle: "Dash", label: { text: 0.7}, value: 0.7, "width" : 1}
      ]
    },
    category: [
      "Momentum Indicators"
    ],
    description: "Average Directional Movement Rating quantifies momentum change in the ADX. It is calculated by adding two values of ADX (the current value and a value n periods back), then dividing by two."
  },
  apo: {
    id: "apo",
    long_display_name: "Absolute Price Oscillator",
    short_display_name: "APO",
    editable: true,
    fields: [
      {title: "Fast Period", key: "fastPeriod", min: 1, max: 50, value: 12, type: "slider"},
      {title: "Slow Period", key: "slowPeriod", min: 1, max: 50, value: 26, type: "slider"},
      {title: "Fast MA Type", key: "fastMaType", value: "SMA", type: "matype"},
      {title: "Slow MA Type", key: "slowMaType", value: "SMA", type: "matype"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#229BC6", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    levels:{
      fields: [
        {title: "Level", key: "value", min: -0.1, max: 0.2, value: 0, step: 0.01, type: "slider"},
        {title: "Stroke width", key: "width", min: 1, max: 10, value: 1, type: "slider"},
        {title: "Stroke", key: "color", value: "#229BC6", type: "colorpicker"},
        {title: "Dash style", key: "dashStyle", value: "Dash", type: "dashstyle"}
      ],
      values: [ ]
    },
    category: [
      "Momentum Indicators"
    ],
    description: "The Absolute Price Oscillator (APO) is based on the absolute differences between two moving averages of different lengths, a ‘Fast’ and a ‘Slow’ moving average."
  },
  stoch: {
    id: "stoch",
    long_display_name: "Stochastic",
    short_display_name: "STOCH  ",
    editable: true,
    fields: [
      {title: "%K Period", key: "fastKPeriod", min: 1, max: 50, value: 14, type: "slider"},
      {title: "%D Period", key: "fastDPeriod", min: 1, max: 50, value: 3, type: "slider"},
      {title: "%D MA Type", key: "fastDMaType", value: "SMA", type: "matype"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "%K Stroke", key: "stroke", value: "#060100", type: "colorpicker"},
      {title: "%D Stroke", key: "dStroke", value: "#DD061C", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    levels:{
      fields: [
        {title: "Level", key: "value", min: 0, max: 100, value: 50, type: "slider"},
        {title: "Stroke width", key: "width", min: 1, max: 10, value: 1, type: "slider"},
        {title: "Stroke", key: "color", value: "#DD061C", type: "colorpicker"},
        {title: "Dash style", key: "dashStyle", value: "Dash", type: "dashstyle"}
      ],
      values: [
        {color: "#060100", dashStyle: "Dash", label: { text: 30}, value: 30, "width" : 1},
        {color: "#DD061C", dashStyle: "Dash", label: { text: 70}, value: 70, "width" : 1}
      ]
    },
    category: [
      "Momentum Indicators"
    ],
    description: "A technical momentum indicator that compares a security's closing price to its price range over a given time period. The oscillator's sensitivity to market movements can be reduced by adjusting the time period or by taking a moving average of the result."
  },
  stochf: {
    id: "stochf",
    long_display_name: "Stochastic Fast",
    short_display_name: "STOCHF",
    editable: true,
    fields: [
      {title: "%K Period", key: "fastKPeriod", min: 1, max: 50, value: 14, type: "slider"},
      {title: "%D Period", key: "fastDPeriod", min: 1, max: 50, value: 3, type: "slider"},
      {title: "%K MA Type", key: "fastKMaType", value: "SMA", type: "matype"},
      {title: "%D MA Type", key: "fastDMaType", value: "SMA", type: "matype"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "%K Stroke", key: "stroke", value: "#060100", type: "colorpicker"},
      {title: "%D Stroke", key: "dStroke", value: "#F2501A", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    levels:{
      fields: [
        {title: "Level", key: "value", min: 0, max: 100, value: 50, type: "slider"},
        {title: "Stroke width", key: "width", min: 1, max: 10, value: 1, type: "slider"},
        {title: "Stroke", key: "color", value: "#F2501A", type: "colorpicker"},
        {title: "Dash style", key: "dashStyle", value: "Dash", type: "dashstyle"}
      ],
      values: [
        {color: "#060100", dashStyle: "Dash", label: { text: 30}, value: 30, "width" : 1},
        {color: "#F2501A", dashStyle: "Dash", label: { text: 70}, value: 70, "width" : 1}
      ]
    },
    category: [
      "Momentum Indicators"
    ],
    description: "The Fast Stochastic Oscillator is based on George Lane's original formulas for %K and %D. %K in the fast version that appears rather choppy. %D is the 3-day SMA of %K."
  },
  stochs: {
    id: "stochs",
    long_display_name: "Stochastic Slow",
    short_display_name: "STOCHS",
    editable: true,
    fields: [
      {title: "Fast %K Period", key: "fastKPeriod", min: 1, max: 50, value: 14, type: "slider"},
      {title: "Slow %K Period", key: "slowKPeriod", min: 1, max: 50, value: 14, type: "slider"},
      {title: "Slow %D Period", key: "slowDPeriod", min: 1, max: 50, value: 3, type: "slider"},
      {title: "Fast %K MA Type", key: "fastKMaType", value: "SMA", type: "matype"},
      {title: "Slow %K MA Type", key: "slowKMaType", value: "SMA", type: "matype"},
      {title: "Slow %D MA Type", key: "slowDMaType", value: "SMA", type: "matype"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "%K Stroke", key: "stroke", value: "#060100", type: "colorpicker"},
      {title: "%D Stroke", key: "dStroke", value: "#C10329", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    levels:{
      fields: [
        {title: "Level", key: "value", min: 0, max: 100, value: 50, type: "slider"},
        {title: "Stroke width", key: "width", min: 1, max: 10, value: 1, type: "slider"},
        {title: "Stroke", key: "color", value: "#C10329", type: "colorpicker"},
        {title: "Dash style", key: "dashStyle", value: "Dash", type: "dashstyle"}
      ],
      values: [
        {color: "#060100", dashStyle: "Dash", label: { text: 30}, value: 30, "width" : 1},
        {color: "#C10329", dashStyle: "Dash", label: { text: 70}, value: 70, "width" : 1}
      ]
    },
    category: [
      "Momentum Indicators"
    ],
    description: "The Fast Stochastic Oscillator is based on George Lane's original formulas for %K and %D. %K in the fast version that appears rather choppy. %D is the 3-day SMA of %K."
  },
  dc: {
    id: "dc",
    long_display_name: "Donchian Channel",
    short_display_name: "DC",
    editable: true,
    onChartIndicator: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 100, value: 21, type: "slider"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "High Stroke", key: "highStroke", value: "#782BD6", type: "colorpicker"},
      {title: "Low Stroke", key: "lowStroke", value: "#F03B12", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    category: [
      "Overlap Studies"
    ],
    description: "The Donchian Channel is an indicator used in market trading developed by Richard Donchian. It is formed by taking the highest high and the lowest low of the last n periods. The area between the high and the low is the channel for the period chosen."
  },
  ultosc: {
    id: "ultosc",
    long_display_name: "Ultimate Oscillator",
    short_display_name: "ULTOSC",
    editable: true,
    fields: [
      {title: "Period 1", key: "firstPeriod", min: 1, max: 50, value: 7, type: "slider"},
      {title: "Period 2", key: "secondPeriod", min: 1, max: 50, value: 14, type: "slider"},
      {title: "Period 3", key: "thirdPeriod", min: 1, max: 50, value: 28, type: "slider"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#DCE53F", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    levels:{
      fields: [
        {title: "Level", key: "value", min: 1, max: 100, value: 50, type: "slider"},
        {title: "Stroke width", key: "width", min: 1, max: 10, value: 1, type: "slider"},
        {title: "Stroke", key: "color", value: "#DCE53F", type: "colorpicker"},
        {title: "Dash style", key: "dashStyle", value: "Dash", type: "dashstyle"}
      ],
      values: [
        {color: "#DCE53F", dashStyle: "Dash", label: { text: 30}, value: 30, "width" : 1},
        {color: "#DCE53F", dashStyle: "Dash", label: { text: 70}, value: 70, "width" : 1}
      ]
    },
    category: [
      "Momentum Indicators"
    ],
    description: "A technical indicator invented by Larry Williams that uses the weighted average of three different time periods to reduce the volatility and false transaction signals that are associated with many other indicators that mainly rely on a single time period."
  },
  lsma: {
    id: "lsma",
    long_display_name: "Least Squares Moving Average",
    short_display_name: "LSMA",
    editable: true,
    onChartIndicator: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 200, value: 21, type: "slider"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#3FDDE5", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    category: [
      "Momentum Indicators"
    ],
    description: "The Least Squares Moving Average first calculates a least squares regression line over the preceding time periods, then projects it forward to the current period. In essence, it calculates what the value would be if the regression line continued."
  },
  mass: {
    id: "mass",
    long_display_name: "Mass Index",
    short_display_name: "MASS",
    editable: true,
    fields: [
      {title: "Mass Period", key: "period", min: 1, max: 50, value: 25, type: "slider"},
      {title: "Single MA Period", key: "singlePeriod", min: 1, max: 50, value: 9, type: "slider"},
      {title: "Double MA Period", key: "doublePeriod", min: 1, max: 50, value: 9, type: "slider"},
      {title: "Single MA Type", key: "singleMaType", value: "SMA", type: "matype"},
      {title: "Double MA Type", key: "doubleMaType", value: "SMA", type: "matype"},
      {title: "Stroke", key: "stroke", value: "#E03FE5", type: "colorpicker"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    levels:{
      fields: [
        {title: "Level", key: "value", min: 0, max: 100, value: 25, type: "slider"},
        {title: "Stroke width", key: "width", min: 1, max: 10, value: 1, type: "slider"},
        {title: "Stroke", key: "color", value: "#E03FE5", type: "colorpicker"},
        {title: "Dash style", key: "dashStyle", value: "Dash", type: "dashstyle"}
      ],
      values: [
        {color: "#E03FE5", dashStyle: "Dash", label: { text: 23}, value: 23, "width" : 1},
        {color: "#E03FE5", dashStyle: "Dash", label: { text: 27}, value: 27, "width" : 1}
      ]
    },
    category: [
      "Volatility Indicators"
    ],
    description: "Developed by Donald Dorsey, the Mass Index uses the high-low range to identify trend reversals based on range expansions. In this sense, the Mass Index is a volatility indicator that does not have a directional bias. Instead, the Mass Index identifies range bulges that can foreshadow a reversal of the current trend."
  },
  cmo: {
    id: "cmo",
    long_display_name: "Chande Momentum Oscillator",
    short_display_name: "CMO",
    editable: true,
    fields: [
      {title: "Period", key: "period", min: 1, max: 50, value: 20, type: "slider"},
      {title: "Stroke width", key: "strokeWidth", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Stroke", key: "stroke", value: "#76E53F", type: "colorpicker"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    levels:{
      fields: [
        {title: "Level", key: "value", min: -100, max: 100, value: 50, type: "slider"},
        {title: "Stroke width", key: "width", min: 1, max: 10, value: 1, type: "slider"},
        {title: "Stroke", key: "color", value: "#76E53F", type: "colorpicker"},
        {title: "Dash style", key: "dashStyle", value: "Dash", type: "dashstyle"}
      ],
      values: [
        {color: "#76E53F", dashStyle: "Dash", label: { text: 30}, value: 30, "width" : 1},
        {color: "#76E53F", dashStyle: "Dash", label: { text: 70}, value: 70, "width" : 1}
      ]
    },
    category: [
      "Momentum Indicators"
    ],
    description: "The CMO indicator is created by calculating the difference between the sum of all recent higher closes and the sum of all recent lower closes and then dividing the result by the sum of all price movement over a given time period. The result is multiplied by 100 to give the -100 to +100 range."
  },
  fractal: {
    id: "fractal",
    long_display_name: "Fractal",
    short_display_name: "FRACTAL",
    onChartIndicator: true,
    editable: true,
    fields: [
      {title: "Number of bars on sides", key: "numberOfBars", min: 3, max: 9, value: 5, type: "slider"}
    ],
    category: [
      "Bill Williams"
    ],
    description: "Fractals are indicators on candlestick charts that identify reversal points in the market. Traders often use fractals to get an idea about the direction in which the price will develop. A fractal will form when a particular price pattern happens on a chart."
  },
  alligator: {
    id: "alligator",
    long_display_name: "Alligator",
    short_display_name: "ALLIGATOR",
    onChartIndicator: true,
    editable: true,
    fields: [
      {title: "Jaw Line Stroke", key: "jawStroke", value: "#0070ff", type: "colorpicker"},
      {title: "Teeth Line Stroke", key: "teethStroke", value: "#ff003c", type: "colorpicker"},
      {title: "Lips Line Stroke", key: "lipsStroke", value: "#00c176", type: "colorpicker"},
      {title: "Stroke width", key: "width", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Dash style", key: "dashStyle", value: "Dash", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    category: [
      "Bill Williams"
    ],
    description: "Bill Williams introduced the Alligator indicator in 1995.  The Alligator is as much a metaphor as it is an indicator.  It consists of three lines, overlaid on a pricing chart, that represent the jaw, the teeth and the lips of the beast, and was created to help the trader confirm the presence of a trend and its direction.  The Alligator indicator can also help traders designate impulse and corrective wave formations, but the tool works best when combined with a momentum indicator."
  },
  ichimoku: {
    id: "ichimoku",
    long_display_name: "Ichimoku",
    short_display_name: "ICHIMOKU",
    onChartIndicator: true,
    editable: true,
    fields: [
      {title: "Tenkan Sen Stroke", key: "tenkanSenStroke", value: "#ff003c", type: "colorpicker"},
      {title: "Tenkan Sen Period", key: "tenkanSenPeriod", min: 1, max: 100, value: 7, type: "slider"},
      {title: "Kijun Sen Stroke", key: "kijunSenStroke", value: "#640e22", type: "colorpicker"},
      {title: "Kijun Sen Period", key: "kijunSenPeriod", min: 1, max: 100, value: 22, type: "slider"},
      {title: "Chikou Span Stroke", key: "chikouSpanStroke", value: "#ffabbf", type: "colorpicker"},
      {title: "Chikou Span Period", key: "chikouSpanPeriod", min: 1, max: 100, value: 22, type: "slider"},
      {title: "Senkou Span-A Stroke", key: "senkouSpanAStroke", value: "#73d351", type: "colorpicker"},
      {title: "Senkou Span-A Period", key: "senkouSpanAPeriod", min: 1, max: 100, value: 26, type: "slider"},
      {title: "Senkou Span-B Stroke", key: "senkouSpanBStroke", value: "#003fa1", type: "colorpicker"},
      {title: "Senkou Span-B Period", key: "senkouSpanBPeriod", min: 1, max: 100, value: 44, type: "slider"},
      {title: "Stroke width", key: "width", min: 1, max: 10, value: 1, type: "slider"},
      {title: "Dash style", key: "dashStyle", value: "Solid", type: "dashstyle"},
      {title: "Applied to", key: "appliedTo", value: 3, type: "appliedto"}
    ],
    category: [
      "Momentum Indicators"
    ],
    description: "The Ichimoku Cloud, also known as Ichimoku Kinko Hyo, is a versatile indicator that defines support and resistance, identifies trend direction, gauges momentum and provides trading signals. Ichimoku Kinko Hyo translates into “one look equilibrium chart”."
  }
};
export default config;
