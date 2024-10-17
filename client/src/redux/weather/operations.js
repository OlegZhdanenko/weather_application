// import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchWeatherTemp = createAsyncThunk(
//   "weather/fetchWeatherTemp",
//   async (city, thunkAPI) => {
//     try {
//       const response = await axios.get(
//         ` http://api.openweathermap.org/data/2.5/weather?q=${city.value},{country code}&units=metric&limit=5&exclude={current}&appid=dfdbb0310705e4c59c7b2309c897b974`
//       );
//       console.log("here", response.data);

//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const fetchWeatherCurrent = createAsyncThunk(
//   "weather/fetchWeatherCurrent",
//   async (location, thunkAPI) => {
//     try {
//       const response = await axios.get(
//         `https://api.openweathermap.org/data/2.5/forecast`,
//         {
//           params: {
//             lat: location.latitude,
//             lon: location.longitude,
//             appid: "dfdbb0310705e4c59c7b2309c897b974",
//             units: "metric",
//           },
//         }
//       );

//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   "contacts/deleteContact",
//   async (contactsId, thunkAPI) => {
//     try {
//       const response = await axios.delete(
//         `https://connections-api.herokuapp.com/contacts/${contactsId}`
//       );

//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
