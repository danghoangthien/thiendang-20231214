import type { RootModel } from "./rootModel";

import { createModel } from "@rematch/core";

const initialState = {
  isOpen: false,
  title: "",
  contentComponent: null, // Initially, there's no content
};

const appModal = createModel<RootModel>()({
  state: initialState,
  reducers: {
    open(state) {
      return {
        ...state,
        isOpen: true,
      };
    },
    close(state) {
      return {
        ...state,
        title: "",
        contentComponent: null,
        isOpen: false,
      };
    },
    setTitle(state, title) {
      return {
        ...state,
        title,
      };
    },
    setContentComponent(state, contentComponent) {
      return {
        ...state,
        contentComponent,
      };
    },
    clearContentComponent(state) {
      return {
        ...state,
        contentComponent: null,
      };
    },
  },
});

export default appModal;
