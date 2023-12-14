import type { RootModel } from './rootModel';

import { createModel } from '@rematch/core';

const initialState: string|null = null;

const activeCoin = createModel<RootModel>()({
  state: initialState,
  reducers: {
    set(_: any, coin: string) {
      return coin;
    }
  }
});

export default activeCoin;
