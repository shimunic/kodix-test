import React, {useEffect} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux'
import CarRow from '../CarRow/CarRow'
import './Table.css';
import { fetchCars } from '../../redux/actions';

const Table = ({cars}) => {
  const dispatch = useDispatch()
  const fetchedCars = useSelector(state => state.cars.fetchedCars)
  useEffect(() => {
    dispatch(fetchCars())
  })
  console.log('FETCHED_CARS', fetchedCars)
  
  return (
      <table className='App-table'>
        <thead>
          <tr>
            <th>Название</th>
            <th>Год</th>
            <th>Цвет</th>
            <th>Статус</th>
            <th>Цена</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            fetchedCars.map(car => 
              <tr key={car.id}>
                <td>
                  {car.title}
                </td>
                <td>
                  {car.year}
                </td>
                <td>
                  {car.color}
                </td>
                <td>
                  {car.status}
                </td>
                <td>
                  {car.price}
                </td>
                <td>
                  <button className='remove'>Удалить</button>
                </td>
              </tr>
            )
          }
          {
            cars.map(car => <CarRow car={car} key={car.id}/>)
          }
        </tbody>
      </table>
    
  )
}

const mapStateToProps = state => {
  console.log('STATE', state)
  return {
    cars: state.cars.cars
  }
}

export default connect(mapStateToProps, null)(Table)