import { createSlice } from "@reduxjs/toolkit";

const GPTslice = createSlice({
    name : "GPT",
    initialState : {
        showGPTsearch: false,
        movieResults: null,
        movieNames: null
    },
    reducers : {
        toggleGPTsearchView : (state) => {
           state.showGPTsearch = !state.showGPTsearch;
        },
        addGPTmovieResult: (state,action) =>{
           const { movieNames,movieResults } = action.payload;
           state.movieNames=movieNames;
           state.movieResults=movieResults;
        }
    }
})

export const { toggleGPTsearchView,addGPTmovieResult } = GPTslice.actions;
export default GPTslice.reducer;