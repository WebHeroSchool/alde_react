import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { count, lenght } from './number';

const val = 'я переменная';
const logic = true;
const tern = false;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <h3>Общая длина: {count * lenght}</h3>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{color: 'red'}}>Добавление тега style</p>
        <p>Вывод значение переменной: {val}</p>
        <p>Вывод числа: {34}</p>
        <p>Вывод арифметической операции: {3 + 4}</p>
        <p>Вывод результата логической операции: {logic && <span>Условие истинно))</span>}</p>
        <p>Использование тернарного оператора: {tern ? <span>Условие истинно))</span> : <span>Все плохо(((</span>}</p>
        <p>Вывод undefined: {undefined}, null:{null}, false:{false}, true:{true}</p>
      </div>
    );
  }
}

export default App;
