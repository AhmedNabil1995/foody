import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/cart/cartSlice'
import mealReducer from "../features/meal/mealSlice";
import authReducer from "../features/authenticate/authSlice";
// import updateReducer from "../features/update/updateSlice";
import orderReducer from "../features/orders/orderSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    meal: mealReducer,
    auth: authReducer,
    // users: updateReducer,
    orders: orderReducer
  },
});
