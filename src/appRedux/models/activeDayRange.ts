import type { RootModel } from './rootModel';

import { createModel } from '@rematch/core';

const initialState: string = '1';

const activeDayRange = createModel<RootModel>()({
  state: initialState,
  reducers: {
    set(_: any, numberOfDays: string) {
      return numberOfDays;
    }
  }
});

export default activeDayRange;
