import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "./state";
import { SetLoaderAction, SetMessageAction } from "./actions";
import { asyncThunkReducer } from "./effect";

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

   d.addCase(asyncThunkReducer.fulfilled,(state,action)=> {
          return {
            ...state,
            loading: false,
          };
   })
   d.addCase(asyncThunkReducer.pending, (state, action) => {
    
      return {
        ...state,
        loading: true
      }
   });

   d.addCase(asyncThunkReducer.rejected, (state, action) => {
          return {
            ...state,
            loading: false,
          };     
   });
})

