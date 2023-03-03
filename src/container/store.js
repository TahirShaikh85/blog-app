import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter/counterSlice';
import postReducer from './Posts/postslice';
import usersReducer from './users/usersslice';

export default configureStore({
    reducer:{
        counter:counterReducer,
        posts:postReducer,
        users:usersReducer
    }
})