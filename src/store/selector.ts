import { useSelector } from "react-redux";
import { AppStore } from "./store";
import { StoreState } from "./state";

export type StoreStateType = ReturnType<typeof AppStore.getState>;
export const useAppSelectors = () =>
  useSelector<StoreStateType>((state) => state.rootReducer) as StoreState;