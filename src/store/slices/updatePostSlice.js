import { createAsyncThunk, createSlice,  } from "@reduxjs/toolkit";
import axios from "axios"
import BACKEND_URI from "../../../public/backend/uri.js"


const initialState = {
    updateData : [],
    updateLoading : false,
    updateError : null
}

const updatePostSlice = createSlice({
    name:"updatePost",
    initialState,
    reducers:{},
    extraReducers : (builder) =>{
        builder.addCase(updatePostAction.pending,(state,action)=>{
            state.updateLoading = true
        })
        builder.addCase(updatePostAction.fulfilled,(state,action)=>{
            state.updateLoading = false
            state.updateData = action.payload.updateData
        })
        builder.addCase(updatePostAction.rejected,(state,action)=>{
            state.updateLoading = false
            state.updateData = []
            state.updateError = action.payload
        })
    }
})

export const updatePostAction = createAsyncThunk("updatePost/updateMyPost", async ({id,formData},{rejectWithValue}) => {
    try{
        const token = localStorage.getItem("authToken")
        const response = await axios.put(
            `${BACKEND_URI}/api/v1/post/${id}`,
            formData,
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          );
        return response.updateData
    }catch(err){
        return rejectWithValue(err.message)
    }
    
  });
  
export default updatePostSlice.reducer

