import { configureStore } from "@reduxjs/toolkit";
import soilSlice from "./analyzeSoil";
import authSlice from "./authSlice";
import notificationSlice from './notificationSlice';
const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        noti: notificationSlice.reducer,
        soil : soilSlice.reducer
    }
});
export default store;