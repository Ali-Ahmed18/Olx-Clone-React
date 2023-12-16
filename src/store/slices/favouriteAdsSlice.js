import { createAsyncThunk, createSlice, isAction } from "@reduxjs/toolkit";
import axios from "axios"


const initialState = {
    data : [],
    loading : false,
    error : null
}

const favouriteAdsSlice = createSlice({
    name:"favouriteAds",
    initialState,
    reducers:{},
    extraReducers : (builder) =>{
        builder.addCase(favouriteAdsAction.pending,(state,action)=>{
            state.loading = true
        })
        builder.addCase(favouriteAdsAction.fulfilled,(state,action)=>{
            state.loading = false
            state.data = action.payload.data
        })
        builder.addCase(favouriteAdsAction.rejected,(state,action)=>{
            state.loading = false
            state.data = []
            state.error = action.payload
        })
    }
})

export const favouriteAdsAction = createAsyncThunk("favouriteAds/getFavouriteAds", async (id,{rejectWithValue}) => {
    try{
        const token = localStorage.getItem("authToken")
        const response = await axios.get(`http://localhost:5000/api/v1/likeposts/${id}`,{ headers: { Authorization: `Bearer ${token}` } })
        return response.data
    }catch(err){
        return rejectWithValue(err.message)
    }
    
  });
  
export default favouriteAdsSlice.reducer

