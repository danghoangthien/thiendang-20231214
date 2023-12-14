import { CoinServiceInterface, CoinGeckoCoinService } from "./index";

export const createCoinService = (type: string): CoinServiceInterface => {
  switch (type.toLowerCase()) {
    case "coingecko":
      return new CoinGeckoCoinService();
    default:
      throw new Error("Invalid CoinServiceType");
  }
};
