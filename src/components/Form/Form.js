import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addCar} from '../../redux/actions'

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      year: '',
      price: '',
      description: '',
      colour: '',
      status: ''

    }
  }

  addCar = event => {
    event.preventDefault()

    const { title, year, price, description, colour, status} = this.state 
    if (
      !title.trim() || 
      !year.trim()  || 
      !price.trim() //|| 
      // !colour.trim() || 
      // !status.trim()
    ) {
      return
    }
    const newCar = {
      id: Date.now().toString(),
      title,
      year,
      price,
      description,
      colour,
      status
    }
    this.props.addCar(newCar)
    this.setState({
      title: '',
      year: '',
      price: '',
      description: '',
      colour: '',
      status: ''
    })
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
            className='title'
            value={this.state.title}
            onChange={this.inputChangeHandler}
            name='title'
            type='text'
            placeholder='Название'
          />
          <input
            className='year'
            value={this.state.year}
            onChange={this.inputChangeHandler}
            name='year'
            type='text'
            placeholder='Год'
          />
          <input
            className='price'
            value={this.state.price}
            onChange={this.inputChangeHandler}
            name='price'
            type='text'
            placeholder='Цена'
          />
          <input
            className='description'
            value={this.state.description}
            onChange={this.inputChangeHandler}
            name='description'
            type='text'
            placeholder='Описание'
          />
          <div className='colour'>
            <label>
              Цвет
            </label>
            <div 
              className='radio'
              value={this.state.colour}
              onChange={this.inputChangeHandler}
            >
              <input value='white' className='white' defaultChecked type='radio' name='group1' />
              <input value='black' className='black' type='radio' name='group1' />
              <input value='gray' className='gray' type='radio' name='group1' />
              <input value='red' className='red' type='radio' name='group1' />
              <input value='green' className='green' type='radio' name='group1' />
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