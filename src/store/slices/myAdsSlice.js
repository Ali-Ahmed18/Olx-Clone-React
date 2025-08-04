import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import BACKEND_URI from "../../../public/backend/uri.js"

const initialState = {
    loading: true,
    error: null,
    data: [],
}

const myAdsSlice = createSlice({
    name:"myAds",
    initialState,
    reducers:{},
    extraReducers : (builder) =>{
        builder.addCase(myAdsAction.pending,(state,action)=>{
                state.loading = true
        })
        builder.addCase(myAdsAction.fulfilled,(state,action)=>{
                state.loading = false
                state.error = null
                state.data = action.payload.data
        })
        builder.addCase(myAdsAction.rejected,(state,action)=>{
                state.loading = false
                state.error = action.payload
                state.data = []
        })
    }
})

export const myAdsAction = createAsyncThunk("myAds/getMyAds", async (userId,{rejectWithValue}) => {
    try{
        const response = await axios.get(`${BACKEND_URI}/api/v1/myads?user_id=${userId}`)
        return response.data
    }catch(err){
        return rejectWithValue(err.message)
    }
    
  });
  
export default myAdsSlice.reducer