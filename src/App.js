import React from 'react';
import Form from './components/Form/Form'
import Table from './components/Table/Table'
import logo from './DUCK 1.png';
import './fonts/Roboto-Regular.ttf'
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
      </header>
      <div className='App-content'>
        <h1 className='App-heading'>¡Ay caramba!</h1>
        <Form />
        <p className='table-name'>АВТОМОБИЛИ В НАЛИЧИИ</p>
        <Table />
      </div>
      <footer className='App-footer'>
        <p>
          © 2020 CAPTAIN QUACK
          <br/>
          Десница тысячелетия и моллюск!
        </p>
      </footer>
    </div>
  );
}

export default App;