import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import axios from "axios";

const api_url = "http://192.168.100.102:9000/api";

export const signinAction = createAsyncThunk(
  "user/signin",
  async (email, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${api_url}/user/signin`, {
        email: email,
      });

      return data;
    } catch (error) {
      return rejectWithValue({
        message: error.response.data.message,
        success: error.response.data.success,
        status: error.response.status,
      });
    }
  }
);

export const checkEnterCodeAction = createAsyncThunk(
  "user/checkEnterCode",
  async (singinData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${api_url}/user/checkEnterCode`,
        singinData
      );
      return data;
    } catch (error) {
      return rejectWithValue({
        message: error.response.data.message,
        success: error.response.data.success,
        status: error.response.status,
      });
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
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;
