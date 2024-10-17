// import { createSlice } from "@reduxjs/toolkit";

// import { fetchWeatherTemp, fetchWeatherCurrent } from "./operations";

// const slice = createSlice({
//   name: "weather",
//   initialState: {
//     current: [],
//     temp: [],
//     loading: false,
//     error: null,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchWeatherTemp.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchWeatherTemp.fulfilled, (state, action) => {
//         state.loading = false;
//         state.error = null;
//         state.temp = action.payload;
//       })
//       .addCase(fetchWeatherTemp.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//     builder
//       .addCase(fetchWeatherCurrent.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchWeatherCurrent.fulfilled, (state, action) => {
//         state.loading = false;
//         state.error = null;
//         state.current = action.payload;
//       })
//       .addCase(fetchWeatherCurrent.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//     //       .addCase(deleteContact.pending, (state) => {
//     //         state.loading = true;
//     //       })
//     //       .addCase(deleteContact.fulfilled, (state, action) => {
//     //         state.loading = false;
//     //         state.error = null;
//     //         const index = state.items.findIndex(
//     //           (task) => task.id === action.payload.id
//     //         );
//     //         state.items.splice(index, 1);
//     //       })
//     //       .addCase(deleteContact.rejected, (state, action) => {
//     //         state.loading = false;
//     //         state.error = action.payload;
//     //       })
//     //       .addCase(addContact.pending, (state) => {
//     //         state.loading = true;
//     //       })
//     //       .addCase(addContact.fulfilled, (state, action) => {
//     //         state.loading = false;
//     //         state.error = null;
//     //         state.items.push(action.payload);
//     //       })
//     //       .addCase(addContact.rejected, (state, action) => {
//     //         state.loading = false;
//     //         state.error = action.payload;
//     //       });
//   },
// });

// export default slice.reducer;
