import { createSlice } from "@reduxjs/toolkit";
import { addCity, deleteCity, getAllCities } from "./operations";

const favoriteSlice = createSlice({
  name: "cityFavorite",
  initialState: {
    cities: [],
    isLoggedFav: false,
    loadingFavorite: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCities.pending, (state) => {
        state.loadingFavorite = true;
      })
      .addCase(getAllCities.fulfilled, (state, action) => {
        state.cities = action.payload;
        state.isLoggedFav = true;
        state.loadingFavorite = false;
      })
      .addCase(getAllCities.rejected, (state, action) => {
        state.loadingFavorite = false;
        state.error = action.payload;
      })
      .addCase(deleteCity.pending, (state) => {
        state.loadingFavorite = true;
      })
      .addCase(deleteCity.fulfilled, (state, action) => {
        state.isLoggedFav = true;
        state.loadingFavorite = false;
        const index = state.cities.findIndex(
          (task) => task.id === action.payload.id
        );
        state.cities.splice(index, 1);
      })
      .addCase(deleteCity.rejected, (state, action) => {
        state.isLoggedFav = false;
        state.error = action.payload;
      })
      .addCase(addCity.pending, (state) => {
        state.loadingFavorite = true;
      })
      .addCase(addCity.fulfilled, (state, action) => {
        state.isLoggedFav = true;
        state.loadingFavorite = false;

        state.cities.push(action.payload);
      })
      .addCase(addCity.rejected, (state, action) => {
        state.isLoggedFav = false;
        state.error = action.payload;
      });
  },
});
export default favoriteSlice.reducer;
