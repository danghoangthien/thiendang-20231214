import { RematchDispatch, RematchRootState, init } from '@rematch/core';
import loading, { ExtraModelsFromLoading } from '@rematch/loading';
import selectPlugin from '@rematch/select';
import updated, { ExtraModelsFromUpdated } from '@rematch/updated';
import { RootModel, models } from './../models/rootModel';

type FullModel = ExtraModelsFromLoading<RootModel> & ExtraModelsFromUpdated<RootModel>;

export const store = init<RootModel, FullModel>({
  models,
  plugins: [updated(), loading(), selectPlugin()]
});

export const initializeStore = (initialState?: RootModel) => {
  if (initialState) {
    return init({
      models,
      redux: {
        initialState
      }
    });
  } else {
    return init({
      models
    });
  }
};

export type Store = typeof store;
export type Dispatch = RematchDispatch<RootModel>;
export type RootState = RematchRootState<RootModel, FullModel>;
