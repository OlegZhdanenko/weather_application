import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllCities = createAsyncThunk(
  "weather/cities",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:3000/api/favorites");
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteCity = createAsyncThunk(
  "weather/deleteCity",
  async (cityId, thunkAPI) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/favorites/city:${cityId}`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const addCity = createAsyncThunk(
  "weather/addCity",
  async (city, thunkAPI) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/favorites/${city}`
      );

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
