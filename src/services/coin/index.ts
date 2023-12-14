import axios from 'axios';

/**
 * Represents the structure of a coin data object.
 * @typedef {Object} CoinData
 * @property {string} id - The unique identifier of the coin.
 * @property {string} name - The name of the coin.
 */
 export interface CoinData {
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  circulating_supply: number;
  current_price: number;
  fully_diluted_valuation: number;
  high_24h: number;
  id: string;
  image: string;
  last_updated: string;
  low_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  max_supply: number;
  name: string;
  price_change_24h: number;
  price_change_percentage_24h: number;
  roi: null | unknown;
  symbol: string;
  total_supply: number;
  total_volume: number;
}

/**
 * Represents the interface for a coin service.
 * Implementing classes should provide methods for fetching coin suggestions.
 * @interface
 */
export interface CoinServiceInterface {

  list(): Promise<CoinData[]>;

  fetchHistoricalData(coinSymbol: string, vsCurrency: string, day: string): Promise<any[]>

  fetchTrendingCoins(): Promise<CoinData[]>;

  fetchOHLC(coinSymbol: string, activeDayRange: number): Promise<any>;  

}

/**
 * Represents a service for fetching coin suggestions from the CoinGecko API.
 * @implements {CoinServiceInterface}
 */
export class CoinGeckoCoinService implements CoinServiceInterface {
  /**
   * The endpoint URL for the CoinGecko API.
   * @type {string}
   * @private
   */
  private endpointUrl: string;

  constructor() {
    this.endpointUrl = 'https://api.coingecko.com/api/v3';
  }

  async list() : Promise<CoinData[]> {
    try {
      const response = await axios.get(`${this.endpointUrl}/coins/list?include_platform=false`);
      const coinList = response.data
      return coinList;
    } catch (error) {
      console.error(`Error fetching coin list from ${this.endpointUrl}:`, error);
      throw error;
    }
  }

  async fetchHistoricalData(coinSymbol: string, vsCurrency: string, days: string) : Promise<any[]> {
    try {
      const response = await axios.get(`${this.endpointUrl}/coins/${coinSymbol}/market_chart`, {
        params: {
          vs_currency: vsCurrency,
          days: days,
        },
      });
      return response.data.prices;
    } catch (error) {
      console.error(`Error fetching coin historical data from ${this.endpointUrl}:`, error);
      throw error;
    }
  }

  async fetchTrendingCoins(): Promise<CoinData[]> {
    try {
      const response = await axios.get(
        `${this.endpointUrl}/coins/markets`,
        {
          params: {
            vs_currency: 'usd',
            order: 'gecko_desc',
            per_page: 10,
            page: 1,
            sparkline: false,
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching trending coins:', error);
      throw error;
    }
  };

  async fetchOHLC(coinSymbol: string, activeDayRange: number): Promise<any> {
    try {
      const response = await axios.get(
        `${this.endpointUrl}/coins/${coinSymbol}/ohlc`,
        {
          params: {
            vs_currency: 'usd',
            days: activeDayRange,
            precision: 'full',
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching OHLC:', error);
      throw error;
    }
  }
}

export class CoinGeckoCoinCacheService {
  private cacheKey: string;

  constructor(cacheKey: string = 'coin-data-collection') {
    this.cacheKey = cacheKey;
  }

  list() {
    try {
      const storedData = localStorage.getItem(this.cacheKey) ?? '';

      const parsedData = JSON.parse(storedData);

      if (!Array.isArray(parsedData)) {
        throw new Error('Stored data is not an array.');
      }

      const coinList = parsedData;
      console.log('coinList', coinList);
      return coinList;
    } catch (error) {
      console.error('Error fetching coin list from cache:', error);
      throw error;
    }
  }

  storeCoinList(coinData: CoinData[]): void {
    localStorage.setItem(this.cacheKey, JSON.stringify(coinData));
  }
}
