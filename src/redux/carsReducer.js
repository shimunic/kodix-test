import { ADD_CAR, FETCH_CARS, REMOVE_CAR_ROW } from "./types"

const initialState = {
  cars: [],
  fetchedCars: [],
  allCars: []
}

export const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CAR:
      return {
        ...state, 
        cars: state.cars.concat(action.payload), 
        allCars: state.allCars.concat(action.payload)
      }
    case FETCH_CARS:
      return { ...state, fetchedCars: action.payload, allCars: action.payload}
    case REMOVE_CAR_ROW:
      return { ...state, allCars: action.payload}    
    default: return state
  }
}