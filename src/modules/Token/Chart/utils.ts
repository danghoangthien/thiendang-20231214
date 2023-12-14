import moment from 'moment';

const borderColor = 'blue';
type HistoricalDataEntry = [number, number];

export const formatChartData = (historicalData: HistoricalDataEntry[], label: string) => {
  return {
    labels: historicalData.map((entry) =>  moment(entry[0]).format("lll")),
    datasets: [      
      {
        label: `${label} Chart`,
        borderColor: borderColor,
        fill: false,
        data: historicalData.map((entry) => ({ x: entry[0], y: entry[1] })),
      },
    ],
  };
};

type OHLCDataEntry = [number, number, number, number, number];

export const formatChartOHLCData = (ohlcData: OHLCDataEntry[]) => {
  return {
    labels: ohlcData.map((entry) =>  moment(entry[0]).format("lll")),
    datasets: [
      {
        label: 'Open',
        borderColor: 'blue',
        data: ohlcData.map((entry) => ({ x: entry[0], y: entry[1] })),
      },
      {
        label: 'High',
        borderColor: 'green',
        data: ohlcData.map((entry) => ({ x: entry[0], y: entry[2] })),
      },
      {
        label: 'Low',
        borderColor: 'red',
        data: ohlcData.map((entry) => ({ x: entry[0], y: entry[3] })),
      },
      {
        label: 'Close',
        borderColor: 'purple',
        data: ohlcData.map((entry) => ({ x: entry[0], y: entry[4] })),
      },
    ],
  };
};

export const formatChartOHLCDataV2 = (ohlcData: OHLCDataEntry[]) => {
  return ohlcData.map(entry => (
    { date: moment(entry[0]).format("lll"), open: entry[1], high: entry[2], low: entry[3], close: entry[4] }
  ));
};