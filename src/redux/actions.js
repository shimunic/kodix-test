import { ADD_CAR, FETCH_CARS, REMOVE_CAR_ROW } from "./types";

export function addCar(car) {
  return {
    type: ADD_CAR,
    payload: car
  }
}

export function fetchCars() {
  return async dispatch => {
    const response = await fetch('https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json')
    const json = await response.json()
    dispatch({type: FETCH_CARS, payload: json})
  }
}

export function removeCarRow(carId, allCars) { 
    const indexOfCarToRemove = allCars.findIndex(car => car.id === carId)
    allCars.splice(indexOfCarToRemove, 1);
    const newAllCars = allCars.slice()
    return { type: REMOVE_CAR_ROW, payload: newAllCars}

}