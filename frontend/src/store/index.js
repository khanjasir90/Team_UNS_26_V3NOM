import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import notificationSlice from './notificationSlice';
import cropSlice from './cropSlice';
import farmerSlice from "./farmerSlice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        noti: notificationSlice.reducer,
        crops: cropSlice.reducer,
        farmer: farmerSlice.reducer
    }
});
export default store;