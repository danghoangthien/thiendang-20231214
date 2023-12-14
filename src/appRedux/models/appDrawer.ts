import type { RootModel } from './rootModel';

import { createModel } from '@rematch/core';

const initialState = {
  isOpen: false,
  contentComponent: null // Initially, there's no content
};

const appDrawer = createModel<RootModel>()({
  state: initialState,
  reducers: {
    open(state) {
      return {
        ...state,
        isOpen: true
      };
    },
    close(state) {
      return {
        ...state,
        isOpen: false
      };
    },
    setContentComponent(state, contentComponent) {
      return {
        ...state,
        contentComponent
      };
    },
    clearContentComponent(state) {
      return {
        ...state,
        contentComponent: null
      };
    }
  }
});

export default appDrawer;
