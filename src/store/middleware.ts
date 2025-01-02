
import { Middleware } from 'redux';

export const appMiddleware: Middleware = (store) => (next) => (action: any) => {    
    if (action.type === "SETMESSAGE" && !action.meta?.dispatched) {
      setTimeout(() => {
        store.dispatch({
          type: "SETMESSAGE",
          payload: action.payload,
          meta: { dispatched: true }
        });
      }, 1000);
    }

    return next(action);
};