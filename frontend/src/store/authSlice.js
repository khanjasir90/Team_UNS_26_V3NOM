import { createSlice } from "@reduxjs/toolkit";
import Alert from "../Components/Alert/Alert";
import { notiAction } from "./notificationSlice";

const authSlice = createSlice({
    name : "auth",
    initialState : {
        loggedIn : false,
        userData : {},
        token : ""
    },
    reducers : {
        login(state,action) {
            state.loggedIn = true;
            state.token = action.payload.token;
            state.userData = action.payload.userData;
            // store token in localstorage
            localStorage.setItem(
                "token",action.payload.token
            );
            localStorage.setItem("userData" , JSON.stringify(action.payload.userData));
        },
        logout(state,action){
            state.loggedIn = false;
            state.token = "";
            // remove from localstorage
            localStorage.removeItem("token");
            localStorage.removeItem("userData");
        }
    }
});
export const authActions = authSlice.actions;
export const signup = (data) => {
    return async (dispatch) => {
        dispatch(notiAction.enableNotification({
            message : "Registering User !",
            heading : "Pending"
        }))
        let response = await fetch("http://localhost:5000/register",{
            method : "POST",
            body : JSON.stringify(data),
            headers : {
                "Content-Type": "application/json"
            }
        });
        if(!response.ok){
            dispatch(notiAction.enableNotification({
                message : "User notification registeration failed !",
                heading : "Failed"
            }))
        }
        else{
            dispatch(notiAction.enableNotification({
                message : "User registered successfully !",
                heading : "Success"
            }));
        }
    }
}
export default authSlice;