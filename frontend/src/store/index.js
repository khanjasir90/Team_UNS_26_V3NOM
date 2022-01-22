import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import notificationSlice from './notificationSlice';
const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        noti: notificationSlice.reducer
    }
});
export default store;