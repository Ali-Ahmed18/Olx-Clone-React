import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import { loginAction } from "./loginSilce";
import BACKEND_URI from "../../../public/backend/uri.js"

const initialState = {
    isLike :false
}

const likePostSlice = createSlice({
    name:"likePost",
    initialState,
    reducers:{},
    extraReducers : (builder) =>{
        builder.addCase(likePostAction.pending,(state,action)=>{
            state.isLike = false
        })
        builder.addCase(likePostAction.fulfilled,(state,action)=>{
            state.isLike = true
        })
        builder.addCase(likePostAction.rejected,(state,action)=>{
                state.isLike = false
        })
    }
})

export const likePostAction = createAsyncThunk("likePost/likePostApi", async ({id,userId},{rejectWithValue,dispatch}) => {
    try{
        const token = localStorage.getItem("authToken")
        const response = await axios.put(`${BACKEND_URI}/api/v1/${id}/like`,{id, userId},{ headers: { Authorization: `Bearer ${token}` } })
        return response.data
    }catch(err){
        return rejectWithValue(err.message)
    }
    
  });
  
export default likePostSlice.reducer