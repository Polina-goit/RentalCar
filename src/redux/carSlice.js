import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://car-rental-api.goit.global";

// Запит на отримання автомобілів
export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async () => {
    const response = await axios.get(`${BASE_URL}/cars`);
      return response.data;
    });
    
    const carSlice = createSlice({
      name: 'cars',
      initialState: {
        cars: [], // Початкове значення масиву авто
        status: 'idle',
        error: null,
      },
      extraReducers: (builder) => {
        builder
          .addCase(fetchCars.pending, (state) => {
            state.status = 'loading'; // статус при завантаженні
          })
          .addCase(fetchCars.fulfilled, (state, action) => {
            state.status = 'succeeded'; // статус при успішному завантаженні
            state.cars = action.payload; // збереження даних
          })
          .addCase(fetchCars.rejected, (state, action) => {
            state.status = 'failed'; // статус при помилці
            state.error = action.error.message;
          });
      },
    });
    
    export default carSlice.reducer;