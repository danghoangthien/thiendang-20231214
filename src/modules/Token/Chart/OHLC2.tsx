// CandlestickChart.js
import AmCharts from '@amcharts/amcharts3-react';
import 'amstock3/amcharts/amstock';

const CandlestickChart = ({ chartData }) => {
  return (
    <AmCharts.React
      style={{
        width: "100%",
        height: "500px"
      }}
      options ={{
        type: "stock",
        theme: "light",
        dataSets: [{
          title: "Candlestick Chart",
          fieldMappings: [{
            fromField: "open",
            toField: "open",
          }, {
            fromField: "close",
            toField: "close",
          }, {
            fromField: "high",
            toField: "high",
          }, {
            fromField: "low",
            toField: "low",
          }],
          dataProvider: chartData,
          categoryField: "date",
        }],
        panels: [{
          title: "Value",
          percentHeight: 70,
          stockGraphs: [{
            id: "g1",
            valueField: "open",
            closeField: "close",
            highField: "high",
            lowField: "low",
            type: "candlestick",
            openField: "open",
            fillAlphas: 1,
            lineColor: "#7f8da9",
            lineAlpha: 1,
            fillColors: "#7f8da9",
            negativeLineColor: "#db4c3c",
            negativeFillColors: "#db4c3c",
            useDataSetColors: false,
            showBalloon: true,
            balloonFunction: function (graphDataItem, graph) {
              const data = graphDataItem.dataContext.rawData[0];
              return `<b>Date:</b> ${data.date}
                      <br/><b>Open:</b> ${data.open}
                      <br/><b>High:</b> ${data.high}
                      <br/><b>Low:</b> ${data.low}
                      <br/><b>Close:</b> ${data.close}`;
            },
          }],
        }],
        categoryAxesSettings: {
          minPeriod: "mm",
        },
      }}
    />
  );
};

export default CandlestickChart;
