import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllCities = createAsyncThunk(
  "weather/cities",
  async (_, thunkAPI) => {
    try {
      console.log(thunkAPI.getState().auth.token);
      const token = thunkAPI.getState().auth.token;
      const response = await axios.get("http://localhost:3000/api/favorites", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
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
        `http://localhost:3000/api/favorites/${cityId}`,
        {
          headers: {
            Authorization: `Bearer ${thunkAPI.getState().auth.token}`,
          },
        }
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
      console.log({ city });

      const response = await axios.post(
        `http://localhost:3000/api/favorites/${city}`,
        { city },
        {
          headers: {
            Authorization: `Bearer ${thunkAPI.getState().auth.token}`,
          },
        }
      );

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
