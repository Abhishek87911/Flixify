import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import moviesReducer from "./moviesSlice"
import GPTreducer from "./GPTslice"
import configReducer from "./configSlice"
const appStore = configureStore(
    {
        reducer : {
          user: userReducer,
          movies: moviesReducer,
          GPT : GPTreducer,
          config: configReducer,
        },
    }
)
export default appStore;