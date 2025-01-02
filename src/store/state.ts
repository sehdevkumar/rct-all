export type StoreState = {
     message:string | null;
     loading:boolean | null;
}



export const initialState:StoreState = {
     message: null,
     loading: false
}