import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slices/AuthSlice";
import PostSlice from "./slices/PostSlice";


export const store= configureStore({
    reducer:{
        auth:AuthSlice,
        posts:PostSlice,
    }
})