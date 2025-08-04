import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import BACKEND_URI from "../../../public/backend/uri.js"


const initialState = {
  loading: true,
  data : {},
  isLiked : false,
  error : false
};

const singlePostSlice = createSlice({
  name: "singlePost",
  initialState,
  reducers: { like: (state) => {
    state.isLiked = !state.isLiked; 
},},
  extraReducers: (builder) => {
    builder.addCase(singlePostAction.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(singlePostAction.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data.data
      state.error = false
      state.isLiked = action.payload.data.data.likes.includes(action.payload.userId);
    });
    builder.addCase(singlePostAction.rejected, (state, action) => {
      state.loading = false;
      state.data = {}
      state.error = true
      
    });
  },
});

export const singlePostAction = createAsyncThunk(
  "singlePost/singlePostApi",
  async ({ id ,userId,navigate}, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.get(
        `${BACKEND_URI}/api/v1/post/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return {data :response.data, userId};
    } catch (err) {
      navigate("/404page")
      return rejectWithValue(err.message);
    }
  }
);
const { actions } = singlePostSlice;
export const { like } = actions;
export default singlePostSlice.reducer;
