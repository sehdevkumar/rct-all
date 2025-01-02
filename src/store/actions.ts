import { createAction } from "@reduxjs/toolkit";


export const SetMessageAction = createAction<string>('SETMESSAGE');
export const SetLoaderAction = createAction<boolean>("SETLOADER");
