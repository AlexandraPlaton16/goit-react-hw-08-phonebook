import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';
import contactsReducer from './contacts/contactsSlice';
import { filterReducer } from './contacts/filterSlice';
import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// Define the auth persist configuration
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// Configure the store
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

// Create the persistor
export const persistor = persistStore(store);
