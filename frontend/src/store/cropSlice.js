import { notiAction } from "./notificationSlice";
import { createSlice } from "@reduxjs/toolkit";

const cropSlice = createSlice({
    name: "crop",
    initialState: {
        all_crops: [],
        farmer_crops: [],
        crop_data: [],
    },
    reducers: {
        addcrop(state, action) {
            const array = state.farmer_crops;
            array.push(action.payload.data);
            state.farmer_crops = array;
        },
        allcrops(state, action) {
            state.all_crops = action.payload.data;
        },
        cropById(state, action) {
            state.crop_data = action.payload.data;
        },
        updateCrop(state, action) {
            const obj_id = action.payload.id;
            const array = state.farmer_crops;
            let objIndex = array.findIndex((obj => obj.id === obj_id));
            array[objIndex] = action.payload.data;
        }
    }
})

export const cropActions = cropSlice.actions;

export const AddCrop = (data) => {
    return async (dispatch) => {
        dispatch(notiAction.enableNotification({
            message: "Your crop is being added",
            heading: "Crop Adding"
        }))
        let response = await fetch("http://localhost:8000/api/crop", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const json = await response.json();
        if (!response.ok) {
            dispatch(notiAction.enableNotification({
                message: "Crop Addition failed. Please try again!",
                heading: "Failed"
            }))
            setTimeout(() => {
                dispatch(notiAction.disableNotification());
            }, 2000);
        }
        else {
            dispatch(cropActions.addcrop({ data: json }));
            dispatch(notiAction.enableNotification({
                message: "Crop Added successfully !",
                heading: "Success"
            }));
            setTimeout(() => {
                dispatch(notiAction.disableNotification());
            }, 2000);
        }
    }
}

export const GetAllCrops = () => {
    return async (dispatch) => {
        let response = await fetch("http://localhost:8000/api/crop/crops", {
            method: 'GET',
            headers: { "Content-Type": "application/json" }
        })
        const json = await response.json();
        if (!response.ok) {
            dispatch(notiAction.enableNotification({
                message: "Error while getting crops!",
                heading: "Failed"
            }))
            setTimeout(() => {
                dispatch(notiAction.disableNotification());
            }, 2000);
        }
        else {
            dispatch(notiAction.enableNotification({
                message: "Crops Fetched !",
                heading: "Success"
            }));
            setTimeout(() => {
                dispatch(notiAction.disableNotification());
            }, 2000);
            dispatch(cropActions.allcrops({ data: json.data.crop }))
        }
    }
}

export const CropData = (id) => {
    return async (dispatch) => {
        let response = await fetch(`http://localhost:8000/api/crop/${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        const json = await response.json();
        if (!response.ok) {
            dispatch(notiAction.enableNotification({
                message: "Something went wrong, Reload !",
                heading: "Failed"
            }))
            setTimeout(() => {
                dispatch(notiAction.disableNotification());
            }, 2000);
        }
        else {
            dispatch(cropActions.cropById({ data: json }));
        }
    }
}

export const updateCrop = (id, data) => {
    return async (dispatch) => {
        dispatch(notiAction.enableNotification({
            message: "Updating Crop failed. Try Again!",
            heading: "Failed"
        }))
        let response = await fetch(`http://localhost:8000/api/crop/${id}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const json = await response.json();
        if (!response.ok) {
            dispatch(notiAction.enableNotification({
                message: "Something went wrong. Try again !",
                heading: "Failed"
            }))
            setTimeout(() => {
                dispatch(notiAction.disableNotification());
            }, 2000);
        }
        else {
            dispatch(notiAction.enableNotification({
                message: "Crop Updated successfully !",
                heading: "Success"
            }));
            dispatch(cropActions.updateCrop({ data: json.data.updatedCrop, id: id }));
        }
    }
}

export default cropSlice;
