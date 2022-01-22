import { createSlice } from "@reduxjs/toolkit";
import { notiAction } from "./notificationSlice";

const farmerSlice = createSlice({
    name: "farmer",
    initialState: {
        crop_details: []
    },
    reducers: {
        getcostings(state, action) {
            state.crop_details = action.payload.data;
        }
    }
})

export const farmerActions = farmerSlice.actions;

export const GetCosts = () => {
    return async (dispatch) => {
        let response = await fetch("http://localhost:8000/api/farmer/Farmers", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });
        const json = await response.json();
        if (!response.ok) {
            dispatch(notiAction.enableNotification({
                message: "Details Fetching Failed !!",
                heading: "Failed"
            }))
            setTimeout(() => {
                dispatch(notiAction.disableNotification());
            }, 2000);
        }
        else {
            dispatch(farmerActions.getcostings({ data: json }));
        }
    }
}

export default farmerSlice;