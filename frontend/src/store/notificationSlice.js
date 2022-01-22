import { createSlice } from "@reduxjs/toolkit";
const notificationSlice = createSlice({
    name : "noti",
    initialState : {
        showNoti : false,
        heading : "",
        message : ""
    },
    reducers : {
        enableNotification(state,actions){
            state.showNoti = true;
            state.heading = actions.payload.heading;
            state.message = actions.payload.message;
        },
        disableNotification(state,actions){
            state.showNoti = false;
            state.heading = "";
            state.message = "";
        }
    }
})
export const notiAction = notificationSlice.actions;
export default notificationSlice;