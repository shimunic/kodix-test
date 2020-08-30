import { ADD_CAR, FETCH_CARS } from "./types"

const initialState = {
  cars: [],
  fetchedCars: []
}

export const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CAR:
      return {...state, cars: state.cars.concat(action.payload)}
    case FETCH_CARS:
      return {...state, fetchedCars: action.payload}
      // return {...state, cars: [...state.cars, action.payload]}
    default: return state
  }
}