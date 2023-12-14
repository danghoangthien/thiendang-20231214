import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CoinData } from './../../../services/coin/index'
import CoinTag from './CoinTag';

const Trending = () => {
  const coinDataProvider = useSelector((state: any) => state.coinDataProvider);
  const [trendingCoins, setTrendingCoins] = useState<CoinData[]| null>(null);
  useEffect(() => {
    coinDataProvider.fetchTrendingCoins().then(
      (trendingCoinsData: CoinData[]) => {
        setTrendingCoins(trendingCoinsData)
      }
    );
  }, []);

  return <>
    {trendingCoins ? (
      trendingCoins.map((coin: CoinData) => (
        <CoinTag coin={coin} />
      ))
    ) : (
        <p>Loading trending coins...</p>
      )}
  </>
}

export default Trending;