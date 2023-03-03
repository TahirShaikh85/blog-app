import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:'0', name:'Dale Carnegie'},
    {id:'1', name:'Tahir Shaikh'},
    {id:'2', name:'Robert Kiyosaki'}
]

const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{

    }
})

export const selectAllUsers = (state)=>state.users;

export default usersSlice.reducer;