import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Price from './Price';
import OHLCChart from './OHLC2';

import { formatChartData, formatChartOHLCDataV2 } from './utils'

const ActiveChart = () => {
  const activeCoin = useSelector((state: any) => state.activeCoin);
  const activeDayRange = useSelector((state: any) => state.activeDayRange);
  const coinDataProvider = useSelector((state: any) => state.coinDataProvider);
  const activeChartType: number = useSelector((state: any) => state.activeChartType);
  const [priceChartData, setPriceChartData] = useState<any| null>(null);
  const [ohlcChartData, setOhlcChartData] = useState<any| null>(null);
  useEffect(() => {
    if (activeCoin) {
      if (activeChartType === 0) {
        coinDataProvider.fetchHistoricalData(activeCoin, 'usd', activeDayRange).then(
          (historicalData: any) => {
            const _chartData = formatChartData(historicalData, `${activeCoin} Chart`)
            setPriceChartData(_chartData);
          }
        );
      }
      if (activeChartType === 1) {
        coinDataProvider.fetchOHLC(activeCoin, activeDayRange).then(
          (data: any) => {
            const _chartData = formatChartOHLCDataV2(data)
            setOhlcChartData(_chartData)
          }
        );
      }
    }
  }, [activeCoin, activeDayRange, activeChartType]);

  return <>
    {activeChartType === 0 && priceChartData && <Price key={activeDayRange} chartData={priceChartData} />}
    {activeChartType === 1 && ohlcChartData && <OHLCChart key={activeDayRange} chartData={ohlcChartData} />}
  </>;
}

export default ActiveChart;
