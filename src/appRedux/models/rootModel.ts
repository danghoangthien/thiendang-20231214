// @filename: models.ts
import appDrawer from "./appDrawer";
import appModal from "./appModal";
import coinDataProvider from "./coinDataProvider";
import activeCoin from "./activeCoin";
import activeDayRange from "./activeDayRange";
import activeChartType from "./activeChartType";

import { Models } from "@rematch/core";

export interface RootModel extends Models<RootModel> {
  appDrawer: typeof appDrawer;
  appModal: typeof appModal;
  coinDataProvider: typeof coinDataProvider;
  activeCoin: typeof activeCoin;
  activeDayRange: typeof activeDayRange;
  activeChartType: typeof activeChartType;
}

export const models: RootModel = {
  appDrawer,
  appModal,
  coinDataProvider,
  activeCoin,
  activeDayRange,
  activeChartType,
};
