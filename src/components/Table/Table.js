import React, {useEffect} from 'react';
import {connect, useDispatch, useSelector} from 'react-redux'
import './Table.css';
import { fetchCars, removeCarRow } from '../../redux/actions';

const Table = ({cars}) => {
  const dispatch = useDispatch()
  // const fetchedCars = useSelector(state => state.cars.fetchedCars)
  // const allCars = [...fetchedCars]  
  const allCars = useSelector(state => state.cars.allCars)

  useEffect(() => {
    dispatch(fetchCars())
  }, [])  

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
            allCars.map(car => 
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
                  <button
                    className='remove'
                    onClick={() => dispatch(removeCarRow(car.id, allCars))}
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    
  )
}

const mapDispatchToProps = {
  removeCarRow
}

export default connect(null, mapDispatchToProps)(Table)