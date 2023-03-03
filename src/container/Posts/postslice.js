import {createSlice, nanoid} from '@reduxjs/toolkit';
const initialState = [
    {id:'1',title:'Learning redux toolkit',content:'Haml (HTML Abstraction Markup Language) is a markup language that is used to describe the structure of HTML documents. '},
    {id:'2',title:'Slices..',content:'Haml (HTML Abstraction Markup Language) is a markup language that is used to describe the structure of HTML documents. '}
]

const postSlice = createSlice({
    name:'posts',
    initialState,
    reducers:{
        // postAdded(state,action){
        //     state.push(action.payload)
        // }
        postAdded:{
            reducer(state,action){
                state.push(action.payload)
            },
            prepare(title,content){
                return{
                    payload:{
                        id:nanoid(),
                        title,
                        content
                    }
                }
            }
        }
    }
})
export const selectAllPosts = (state)=>state.posts;
export const {postAdded} = postSlice.actions;

export default postSlice.reducer;
