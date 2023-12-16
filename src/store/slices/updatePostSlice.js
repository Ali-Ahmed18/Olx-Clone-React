import { createAsyncThunk, createSlice,  } from "@reduxjs/toolkit";
import axios from "axios"


const initialState = {
    data : [],
    loading : false,
    error : null
}

const updatePostSlice = createSlice({
    name:"updatePost",
    initialState,
    reducers:{},
    extraReducers : (builder) =>{
        builder.addCase(updatePostAction.pending,(state,action)=>{
            state.loading = true
        })
        builder.addCase(updatePostAction.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload.data
        })
        builder.addCase(updatePostAction.rejected,(state,action)=>{
            state.loading = false
            state.data = []
            state.error = action.payload
        })
    }
})

export const updatePostAction = createAsyncThunk("updatePost/updateMyPost", async (id,{rejectWithValue}) => {
    try{
        const token = localStorage.getItem("authToken")
        const response = await axios.put(`http://localhost:5000/api/v1/post/${id}`,{ headers: { Authorization: `Bearer ${token}` } })
        return response.data
    }catch(err){
        return rejectWithValue(err.message)
    }
    
  });
  
export default updatePostSlice.reducer

