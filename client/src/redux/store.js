import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// import weatherSlice from "./weather/Slice.js";
import favoriteSlice from "./city/Slice.js";
import authSlise from "./auth/slice";

const authPersistConfig = {
  key: "root",
  storage,
  whitelist: ["token"],
};

const authPersistedReducer = persistReducer(authPersistConfig, authSlise);
export const store = configureStore({
  reducer: {
    cities: favoriteSlice,
    // weather: weatherSlice,
    auth: authPersistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
