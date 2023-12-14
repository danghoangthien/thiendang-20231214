import type { RootModel } from "./rootModel";

import { createModel } from "@rematch/core";

const initialState: number = 0;

const activeChartType = createModel<RootModel>()({
  state: initialState,
  reducers: {
    set(_: any, type: number) {
      return type;
    },
  },
});

export default activeChartType;
