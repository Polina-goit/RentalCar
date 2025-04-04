import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./cars/carSlice.js";
import { filterReducer } from "./filters/filtersSlice.js";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    filter: filterReducer,
  },
});
export default store;