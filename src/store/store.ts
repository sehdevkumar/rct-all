import { configureStore } from "@reduxjs/toolkit";
import { storeReducer } from "./reducers";
import { appMiddleware } from "./middleware";

export const AppStore = configureStore({
  reducer: {
    rootReducer: storeReducer,
  },
  middleware: (d) => d().concat(appMiddleware),
});

export const useAppDispatch= ()=> AppStore.dispatch