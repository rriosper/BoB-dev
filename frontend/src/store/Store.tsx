/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { Provider } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

import { createStore } from 'redux';
import reducers from './reducers';

type StoreProps = {
  children: React.ReactNode;
};

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const createPersistedStore = () => {
  const newStore = createStore(persistedReducer, composeWithDevTools());
  const persistor = persistStore(newStore);
  return { store: newStore, persistor };
};

export const { store, persistor } = createPersistedStore();

const Store: React.FC<StoreProps> = ({ children }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>{children}</PersistGate>
  </Provider>
);

export default Store;
