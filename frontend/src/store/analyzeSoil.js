import { createSlice } from "@reduxjs/toolkit";
import { notiAction } from "./notificationSlice";

const soilSlice = createSlice({
    name : "soil",
    initialState : {
        cropName : undefined,
        confidenceRate : undefined,
        diseaseName : undefined,
        solution : undefined
    },
    reducers : {
        updateSoilData(state,action){
            state.cropName = action.payload.cropName;
            state.confidenceRate = action.payload.confidenceRate;
        },
        updateDiseaseData(state,action){
            state.diseaseName = action.payload.diseaseName;
            state.solution = action.payload.solution;
        }
    }
});
export const soilActions = soilSlice.actions;
export const analyseSoilHandler = (data) => {
    return async (dispatch) => {
        dispatch(notiAction.enableNotification({
            message: "soil analysing in progress!",
            heading: "Analysing Soil"
        }))
        let response = await fetch("http://localhost:5000/recommendCrop",{
            method : "POST",
            headers : {
                "Content-Type":"application/json"
            },
            body : JSON.stringify({
                ...data
            })
        });
        let jsonData = await response.json();
        if(!response.ok){
            dispatch(notiAction.enableNotification({
                message: "soil analysing failed!",
                heading: "Analysing Soil Failed"
            }))
        }
        else{
            dispatch(notiAction.enableNotification({
                message: "soil analysing done!",
                heading: "Analysing Soil Success"
            }))
            dispatch(soilActions.updateSoilData({
                cropName : jsonData.cropName,
            }));
        }
    }
}
export const predictDisease = (imageData) => {
    return async (dispatch) => {
        dispatch(notiAction.enableNotification({
            message: "predicting disease in progress!",
            heading: "disease predicting"
        }))
        let response = await fetch("http://localhost:5000/diseasePredict",{
            method : "POST",
            body : imageData
        });
        let jsonData = await response.json();
        if(!response.ok){
            dispatch(notiAction.enableNotification({
                message: "predict Disease failed!",
                heading: "Predict Disease Failed"
            }))
        }
        else{
            dispatch(notiAction.enableNotification({
                message: "Predicting disease done!",
                heading: "Predict disease Success"
            }))
            dispatch(soilActions.updateDiseaseData({
                confidenceRate : jsonData.confidence,
                diseaseName : jsonData.disease.split(":")[0],
                solution : jsonData.disease.split(":")[1]
            }));
        }
    }
}
export default soilSlice;