import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import axios from "axios";

const api_url = "http://192.168.1.2:9000/api";

export const signinAction = createAsyncThunk(
  "user/signin",
  async (email, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`${api_url}/user/signin`, {
        email: email,
      });
      console.log(data);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    //get current user reducer
    builder.addCase(signinAction.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signinAction.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(signinAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action?.error;
    });
  },
});

export default userSlice.reducer;
