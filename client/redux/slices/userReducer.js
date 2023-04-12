import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const api_url = "http://192.168.1.2:9000/api";

export const signinAction = createAsyncThunk(
  "user/signin",
  async (email, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`${api_url}/user/signin`, {
        email: email,
      });

      return data;
    } catch (error) {
      console.log(error);
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

      await AsyncStorage.setItem("Token", JSON.stringify(data));
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

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const token = state.user.token;

      const { data } = await axios.get(`${api_url}/user/info`, {
        headers: {
          authorization: token,
        },
      });

      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);

export const createUserAction = createAsyncThunk(
  "user/create",
  async (userData, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const token = state.user.token;

      const { data } = await axios.post(`${api_url}/user/create`, userData, {
        headers: {
          authorization: token,
        },
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

export const logoutAction = createAsyncThunk(
  "logout",
  async (_, { rejectWithValue }) => {
    try {
      await AsyncStorage.removeItem("Token");
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    error: null,
    token: null,
    signinData: null,
    userInfo: null,
    createUserData: null,
  },
  extraReducers: (builder) => {
    //get current user reducer
    builder.addCase(signinAction.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signinAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.signinData = action.payload;
    });
    builder.addCase(signinAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(checkEnterCodeAction.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(checkEnterCodeAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.token = action.payload.token;
    });
    builder.addCase(checkEnterCodeAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.userInfo = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(createUserAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createUserAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.createUserData = action.payload;
    });
    builder.addCase(createUserAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(logoutAction.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(logoutAction.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.token = null;
    });
    builder.addCase(logoutAction.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;
