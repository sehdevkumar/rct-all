import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "./state";
import { SetLoaderAction, SetMessageAction } from "./actions";

export const storeReducer = createReducer(initialState,(d)=> {
    d.addCase(SetMessageAction,(state,action)=> {
        
        return  {
            ...state,
            message: action.payload
        }

    })
    d.addCase(SetLoaderAction, (state, action) => {
      return {
        ...state,
        loading: action.payload,
      };
    });
})

