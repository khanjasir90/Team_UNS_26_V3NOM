import { createSlice } from "@reduxjs/toolkit";

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
})
export const signup = () => {
    return async (data) => {
        let response = await fetch("http://localhost:5000/signup");
    }
}
export const authActions = authSlice.actions;
export default authSlice;