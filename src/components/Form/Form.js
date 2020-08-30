import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addCar} from '../../redux/actions'

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }
  }

  addCar = event => {
    event.preventDefault()

    const {name} = this.state 
    if (!name.trim()) {
      return
    }
    const newCar = {
      name,
      id: Date.now().toString()
    }
    this.props.addCar(newCar)
    this.setState({name: ''})
  }

  inputChangeHandler = event => {
    event.persist()
    this.setState(prev => ({ ...prev, ...{
      [event.target.name]: event.target.value
    }}))
  }

  render() {
    return(
      <>
        <form 
          className='App-form'
          onSubmit={this.addCar}
          >
          <input
            className='name'
            value={this.state.name}
            onChange={this.inputChangeHandler}
            name='name'
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
              <option defaultValue='Статус' disabled>Статус</option>
              <option value='available'>В наличии</option>
              <option value='pending'>Ожидается</option>
              <option value='unavailable'>Нет в наличии</option>
            </select>
          </div>
          <button 
            className='send'
            type='submit'
          >
            ОТПРАВИТЬ >
          </button>
        </form>
      </>
    )
  }
}

const mapDispatchToProps = {
  addCar
}

export default connect(null, mapDispatchToProps)(Form) 