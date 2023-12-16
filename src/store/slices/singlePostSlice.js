import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  loading: true,
  data : {},
  isLiked : false,
  error : ""
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
      state.error = ""
      state.isLiked = action.payload.data.data.likes.includes(action.payload.userId);
    });
    builder.addCase(singlePostAction.rejected, (state, action) => {
      state.loading = false;
      state.data = {}
      state.error = action.payload
      
    });
  },
});

export const singlePostAction = createAsyncThunk(
  "singlePost/singlePostApi",
  async ({ id ,userId}, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.get(
        `http://localhost:5000/api/v1/post/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return {data :response.data, userId};
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
const { actions } = singlePostSlice;
export const { like } = actions;
export default singlePostSlice.reducer;
