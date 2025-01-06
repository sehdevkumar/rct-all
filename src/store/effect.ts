import { createAsyncThunk } from "@reduxjs/toolkit";

export const asyncThunkReducer = createAsyncThunk('ASYNC-REDUCER', async (d, c) => {
    // Perform some asynchronous operation with 'd' and 'c'
    // For example, you can fetch data or perform some async task
    const result = await someAsyncOperation(d, c);

    // Return the result
    return result;
});

// Example async operation function
async function someAsyncOperation(d: any, c: any) {
    // Simulate an async operation
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ type: 'ASYNC-REDUCER-SUCCESS', payload: { data: 'some data' } });
        }, 1000);
    });
}


