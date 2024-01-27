import { createSlice } from "@reduxjs/toolkit";

const GPTslice = createSlice({
    name : "GPT",
    initialState : {
        showGPTsearch: false
    },
    reducers : {
        toggleGPTsearchView : (state) => {
           state.showGPTsearch = !state.showGPTsearch;
        }
    }
})

export const { toggleGPTsearchView } = GPTslice.actions;
export default GPTslice.reducer;