import { configureStore } from "@reduxjs/toolkit";
import { storeReducer } from "./reducers";

export const AppStore = configureStore({   
    reducer: {
         rootReducer: storeReducer
    }

})

export const useAppDispatch= ()=> AppStore.dispatch