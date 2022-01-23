import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice(
    {
        name : "lang",
        initialState : {
            lang : "EN",
        },
        reducers : {
            changeLang (state,actions){
                state.lang = actions.payload;
            }
        }
    }
)
export const langActions = langSlice.actions;
export default langSlice;