import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../service/axios'

export const reqRegistration=createAsyncThunk(
    'auth/reqRegistration',
    async ({username,password})=>{
        console.log('ответ сервера', {username,password});
        try{
            const {data} = await axios.post('/auth/register',{username,password})
            
            window.localStorage.setItem('token',data.token)
            console.log('ответ сервера',data);
            return data
        }catch(err){
            console.log(err);
        }
          
    }
)
export const getUser=createAsyncThunk(
    'auth/getUser',
    async ()=>{
        try{
            const {data} = await axios.get('/auth/get')
            console.log(data);
            return data
        }catch(err){
            console.log(err);
        }
          
    }
)
export const reqLogin=createAsyncThunk(
    'auth/reqLogin',
    async ({username,password})=>{
        console.log('ответ сервера', {username,password});
        try{
            const {data} = await axios.post('/auth/login',{username,password})
            console.log('ответ сервера',data.token);
            window.localStorage.setItem('token',data.token)
            console.log('ответ сервера',data);
            return data
        }catch(err){
            console.log(err);
        }
          
    }
)
const initialState= {
    user:null,
    token:null,
    isLoading:false,
    status:null,
}


export const AuthSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        logout:(state)=>{
           state.user=null
           state.token=null
           state.isLoading=false
           state.status=null
        },
    },
    extraReducers:(builder)=>{
        builder
        .addCase(reqRegistration.pending,state=>{
            state.isLoading=true
            state.status=null
        })
        .addCase(reqRegistration.fulfilled,(state,action)=>{
            state.token=action.payload.token
            state.user=action.payload.user
            state.isLoading=false
            state.status = action.payload.message

        })
        .addCase(reqRegistration.rejected,(state,action)=>{
            state.status=action.payload.message
            state.isLoading=false
        })
        .addCase(reqLogin.pending,state=>{
            state.isLoading=true
            state.status=null
        })
        .addCase(reqLogin.fulfilled,(state,action)=>{
            state.token=action.payload.token
            state.user=action.payload.user
            state.isLoading=false
            state.status = action.payload.message

        })
        .addCase(reqLogin.rejected,(state,action)=>{
            state.status=action.payload.message
            state.isLoading=false
        })
        .addCase(getUser.pending,state=>{
            state.isLoading=true
            state.status=null
        })
        .addCase(getUser.fulfilled,(state,action)=>{
            state.token=action.payload.token
            state.user=action.payload.user
            state.isLoading=false
            state.status = null

        })
        .addCase(getUser.rejected,(state,action)=>{
            state.status=action.payload.message
            state.isLoading=false
        })
        
      
    }
})

export const checkToken=state=>Boolean(state.auth.token)

export const {logout}=AuthSlice.actions
export default AuthSlice.reducer