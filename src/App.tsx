import { useEffect } from "react";
import "./App.css";
import Token from "./modules/Token/index";
import { COIN_DATA_PROVIDER } from "./configs";
import { useDispatch, useSelector } from "react-redux";
import { CoinServiceInterface } from "./services/coin/index";
import { createCoinService } from "./services/coin/factory";

function App() {
  const dispatch = useDispatch();
  const coinDataProvider = useSelector(
    (state) => (state as any).coinDataProvider
  );
  useEffect(() => {
    const coinService: CoinServiceInterface =
      createCoinService(COIN_DATA_PROVIDER);
    dispatch.coinDataProvider.set(coinService);
  }, []);
  return coinDataProvider ? <Token /> : <>---</>;
}

export default App;
