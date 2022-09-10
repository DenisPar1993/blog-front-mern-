import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../service/axios'


const initialState= {
    posts:[],
    popularPost:[],
    isLoading:false,
    status:null,
}

export const addPost= createAsyncThunk(
    'post/addPost',
    async (params)=>{
        console.log(params,'  params');

        const {data} = await axios.post('/posts',params) 
         return data
    }
)

export const getAllPosts=createAsyncThunk(
    'post/getAllPosts',
    async ()=>{
        const {data} = await axios.get('/posts/all') 
        return data
    }
)

export const PostSlice=createSlice({
    name:'post',
    initialState,
    reducers:{
    },
    extraReducers:(builder)=>{
        builder
             .addCase(addPost.pending,state=>{
                state.isLoading=true
             })
             .addCase(addPost.fulfilled,(state,action)=>{
                state.isLoading=false
                state.status= action.payload.message
             })
             .addCase(addPost.rejected,(state,action)=>{
                state.isLoading=false
                state.status= action.payload.message
             })
             .addCase(getAllPosts.pending,state=>{
                state.isLoading=true
             })
             .addCase(getAllPosts.fulfilled,(state,action)=>{
                state.isLoading=false
                state.posts =action.payload.posts
                state.popularPost= action.payload.popularPosts
             })
             .addCase(getAllPosts.rejected,(state,action)=>{
                state.isLoading=false
               
             })
    
    }
})



// export const {logout}=Slice.actions
export default PostSlice.reducer