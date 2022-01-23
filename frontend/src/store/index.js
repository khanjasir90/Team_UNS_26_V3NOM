import { configureStore } from "@reduxjs/toolkit";
import soilSlice from "./analyzeSoil";
import authSlice from "./authSlice";
import notificationSlice from './notificationSlice';
import cropSlice from './cropSlice';
import farmerSlice from "./farmerSlice";
import langSlice from "./languageSlice";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        noti: notificationSlice.reducer,
        soil: soilSlice.reducer,
        crops: cropSlice.reducer,
        farmer: farmerSlice.reducer,
        lang : langSlice.reducer
    }
});
export default store;