import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addCar} from '../../redux/actions'
import './Form.css'

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
      !price.trim() || 
      !colour.trim() || 
      !status.trim()
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
    console.log('VALUE', event.target)
    this.setState(prev => ({ ...prev, ...{
      [event.target.name]: event.target.value
    }}))
  }

  // selectChangeHandler = event => {
  //   this.setState({ value: event.target.value })
  // }

  render() {
    return(
      <>
        {console.log('INITIALSTATE', this.state)}
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
              <label className="radio-container white">
                <input value='white' type='radio' name='colour'/>
                <span className="new-radio"></span>
              </label>
              <label className="radio-container black">
                <input value='black' type='radio' name='colour'/>
                <span className="new-radio"></span>
              </label>
              <label className="radio-container gray">
                <input value='gray' type='radio' name='colour'/>
                <span className="new-radio"></span>
              </label>
              <label className="radio-container red">
                <input value='red' type='radio' name='colour'/>
                <span className="new-radio"></span>
              </label>
              <label className="radio-container green">
                <input value='green' type='radio' name='colour'/>
                <span className="new-radio"></span>
              </label>
            </div>
          </div>
          <div className='status'>
            <select value={this.state.status} name='status' onChange={this.inputChangeHandler}>
              <option value="" disabled hidden>Статус</option>
              <option value='available'>В наличии</option>
              <option value='pending'>Ожидается</option>
              <option value='unavailable'>Нет в наличии</option>
            </select>
          </div>
          <button 
            className='send'
            type='submit'
          >
            <span>отправить ></span> 
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