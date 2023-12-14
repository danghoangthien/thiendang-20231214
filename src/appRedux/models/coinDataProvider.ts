import type { RootModel } from "./rootModel";

import { createModel } from "@rematch/core";
import { CoinServiceInterface } from "src/services/coin/index";

const initialState: CoinServiceInterface | null = null;

const coinDataProvider = createModel<RootModel>()({
  state: initialState,
  reducers: {
    set(_: any, provider: CoinServiceInterface) {
      return provider;
    },
  },
});

export default coinDataProvider;
