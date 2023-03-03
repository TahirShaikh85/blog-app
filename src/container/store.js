import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter/counterSlice';
import postReducer from './Posts/postslice';

export default configureStore({
    reducer:{
        counter:counterReducer,
        posts:postReducer
    }
})