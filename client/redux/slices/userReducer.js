import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";
import axios from "axios";

api_url = "http://192.168.1.2:9000/api";

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
