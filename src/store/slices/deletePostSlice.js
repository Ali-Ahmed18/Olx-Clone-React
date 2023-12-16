import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { myAdsAction } from "./myAdsSlice";

const initialState = {
  isDelete: false,
};

export const isDeletedAction = createAsyncThunk("isDelete/deletepost", async ({_id,user_id}, { rejectWithValue,dispatch }) => {
    try {
    
      const token = localStorage.getItem("authToken");
      const response = await axios.delete(
        `http://localhost:5000/api/v1/post/${_id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
        dispatch(myAdsAction(user_id))
      return response.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  } 
);

const isDeleteSlice = createSlice({
  name: "isDelete",
  initialState,
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      .addCase(isDeletedAction.pending, (state, action) => {
      state.isDelete = true
      })
      .addCase(isDeletedAction.fulfilled, (state, action) => {
        state.isDelete = false
  
      })
      .addCase(isDeletedAction.rejected, (state, action) => {
        state.isDelete = false
      });
  }
});
export default isDeleteSlice.reducer;
