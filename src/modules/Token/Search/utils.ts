import { CoinServiceInterface, CoinData, CoinGeckoCoinCacheService } from './../../../services/coin/index';

export const fetchCoins = async (endpointProvider: CoinServiceInterface, inputValue: string): Promise<CoinData[]> => {
  const cacheProvider = new CoinGeckoCoinCacheService();
  let coinDataCollection: CoinData[];
  // Try get from cache first, then get from API
  try {
    coinDataCollection = cacheProvider.list();
  } catch (error) {
    coinDataCollection = await endpointProvider.list();
    cacheProvider.storeCoinList(coinDataCollection);
  }
  coinDataCollection.filter((coin: CoinData) => coin.name.toLowerCase().includes(inputValue.toLowerCase()))
  return coinDataCollection;
};
