import { useSelector } from "react-redux";
import { AppStore } from "./store";
import { StoreState } from "./state";

export type storeStateType = ReturnType<typeof AppStore.getState>;
export const useAppSelectors =  ()=>   useSelector<storeStateType>(state=> state.rootReducer) as StoreState