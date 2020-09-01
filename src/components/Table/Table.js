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
          {allCars.length !== 0 ?
            allCars.map(car => 
              <tr key={car.id}>
                <td style={{
                    textAlign: "left",
                    width: '50%'
                  }}>
                  {car.title}
                  <br/>
                  <span className='description'>
                    {car.description}
                  </span>
                </td>
                <td>
                  {car.year}
                </td>
                <td>
                  <button 
                    className='colour-circle'
                    style={{ 
                      backgroundColor: car.colour || car.color
                    }}
                  >
                  </button>
                </td>
                <td>
                  {
                    (car.status === 'pending' || car.status === 'pednding') && 'Ожидается'
                  }
                  {
                    (car.status === 'unavailable' || car.status === 'out_of_stock') && 'Нет в наличии'
                  }
                  {
                    (car.status === 'available' || car.status === 'in_stock') && 'В наличии'
                  }
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
            :
            <tr>
              <td colSpan='6'>
                <p>
                  Машин пока нет
                </p>
              </td>
            </tr>
          }
        </tbody>
      </table>
    
  )
}

function mapStateToProps(state) {
    return {
      cars: state.cars.cars
    }
}

const mapDispatchToProps = {
  removeCarRow
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)