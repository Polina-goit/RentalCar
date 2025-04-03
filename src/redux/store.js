import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./cars/carSlice.js";

const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});
export default store;