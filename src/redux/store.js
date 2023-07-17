import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterReduce"
export default configureStore({
    reducer:{
        counter:counterReducer,
    },
})