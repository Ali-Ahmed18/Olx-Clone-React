import { createAsyncThunk, createSlice, isAction } from "@reduxjs/toolkit";
import axios from "axios"
import  { myAdsAction } from "./myAdsSlice";
import BACKEND_URI from "../../../public/backend/uri.js"

const initialState = {
    isUpdate :true
}

const isActiveSlice = createSlice({
    name:"isActive",
    initialState,
    reducers:{},
    extraReducers : (builder) =>{
        builder.addCase(isActiveAction.pending,(state,action)=>{
            state.isUpdate = false
        })
        builder.addCase(isActiveAction.fulfilled,(state,action)=>{
            state.isUpdate = true
        })
        builder.addCase(isActiveAction.rejected,(state,action)=>{
                state.isUpdate = true
        })
    }
})

export const isActiveAction = createAsyncThunk("isActive/updateIsActive", async ({_id,isActive},{rejectWithValue,dispatch}) => {
    try{
        const token = localStorage.getItem("authToken")
        const response = await axios.put(`${BACKEND_URI}/api/v1/post`,{id :_id,status : isActive},{ headers: { Authorization: `Bearer ${token}` } })
        dispatch(myAdsAction(response.data.data.user_id));
        return response.data
    }catch(err){
        return rejectWithValue(err.message)
    }
    
  });
  
export default isActiveSlice.reducer