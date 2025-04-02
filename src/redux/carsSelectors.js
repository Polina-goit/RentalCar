

export const selectCarsState = state => state.cars;

export const selectCars = state => selectCarsState(state).items;