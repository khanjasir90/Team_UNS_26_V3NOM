import { createSlice } from "@reduxjs/toolkit";
import { notiAction } from "./notificationSlice";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loggedIn: false,
        userData: {},
    },
    reducers: {
        login(state, action) {
            state.loggedIn = true;
            state.userData = action.payload.userData;
            // store token in localstorage
            localStorage.setItem("userData", (action.payload.userData));
        },
        logout(state, action) {
            state.loggedIn = false;
            // remove from localstorage
            localStorage.removeItem("userData");
        }
    }
});
export const authActions = authSlice.actions;

export const signup = (data) => {
    return async (dispatch) => {
        dispatch(notiAction.enableNotification({
            message: "Registering User !",
            heading: "Pending"
        }))
        let response = await fetch("http://localhost:8000/api/user/register", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log(response);
        if (!response.ok) {
            dispatch(notiAction.enableNotification({
                message: "User notification registeration failed !",
                heading: "Failed"
            }))
            setTimeout(() => {
                dispatch(notiAction.disableNotification());
            }, 2000);
        }
        else {
            dispatch(notiAction.enableNotification({
                message: "User registered successfully !",
                heading: "Success"
            }));
            setTimeout(() => {
                dispatch(notiAction.disableNotification());
            }, 2000);
        }
    }
}

export const signin = (data,navigate) => {
    return async (dispatch) => {
        dispatch(notiAction.enableNotification({
            message: "Loggin In",
            heading: "Success"
        }))
        let response = await fetch("http://localhost:8000/api/user/login", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        let json = await response.json();
        console.log(json);
        if (!response.ok) {
            dispatch(notiAction.enableNotification({
                message: "User Login failed !",
                heading: "Failed"
            }))
            setTimeout(() => {
                dispatch(notiAction.disableNotification());
            }, 2000);
        } else {
            dispatch(notiAction.enableNotification({
                message: "User login Successful !",
                heading: "Success"
            }))
            dispatch(authActions.login({ userData: json.data.user.email }))
            setTimeout(() => {
                dispatch(notiAction.disableNotification());
            }, 2000);
        }
    }
}

export default authSlice;