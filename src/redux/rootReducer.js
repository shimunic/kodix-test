import {combineReducers} from 'redux'
import {carsReducer} from './carsReducer'

export const rootReducer = combineReducers({
  cars: carsReducer
})