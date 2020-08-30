import React, {Component} from 'react'

export default class From extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return(
      <>
        <div className='App-form'>
          <input
            className='name'
            type='text'
            placeholder='Название'
          />
          <input
            className='year'
            type='text'
            placeholder='Год'
          />
          <input
            className='price'
            type='text'
            placeholder='Цена'
          />
          <input
            className='description'
            type='text'
            placeholder='Описание'
          />
          <div className='colour'>
            <label>
              Цвет
            </label>
            <div className='radio'>
              <input className='white' type='radio' name='group1' />
              <input className='black' type='radio' name='group1' />
              <input className='gray' type='radio' name='group1' />
              <input className='red' type='radio' name='group1' />
              <input className='green' type='radio' name='group1' />
            </div>
          </div>
          <div className='status'>
            <select>
              <option value='' disabled selected>Статус</option>
              <option value='available'>В наличии</option>
              <option value='pending'>Ожидается</option>
              <option value='unavailable'>Нет в наличии</option>
            </select>
          </div>
          <div className='send'>
            <button>
              ОТПРАВИТЬ >
            </button>
          </div>
        </div>
      </>
    )
  }
}
