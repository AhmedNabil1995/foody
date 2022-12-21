import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/dist";
import axios from 'axios'

let url = process.env.REACT_APP_SERVER_URL;


export const getUserOrders = createAsyncThunk('/userorders', async ({ user }) => {
    let res = await axios.get(`${url}orders/userOrders/`, {
        headers: { token: user.token }
    });
    return res.data
})

const orderSlice = createSlice({
    name: 'orders',
    initialState: { orders: [], isFetching: false, error: false },
    reducers: {},
    extraReducers: {
        [getUserOrders.fulfilled]: (state, action) => {
            state.orders = action.payload;
        },
    }
})

export default orderSlice.reducer;