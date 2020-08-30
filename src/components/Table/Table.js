import React from 'react';
import './Table.css';

export default ({cars}) => {
  return (
    <>
      <table className='App-table'>
        <thead>
          <tr>
            <th>Название</th>
            <th>Год</th>
            <th>Цвет</th>
            <th>Статус</th>
            <th>Цена</th>
            <th colSpan='1'></th>
          </tr>
        </thead>
        <tbody>
          {
            cars.length !== 0 && cars.map(item => 
            <tr>
              {item}
            </tr>
            )
          }
        </tbody>

      </table>
    </>
  )
}