import React from 'react'
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.css';

const itemList = [
  {
    value: 'Поесть'
  },
  {
    value: 'Покодить'
  },
  {
    value: 'Поспать'
  }
];

const App = () => (
    <div className='wrap'>
        <h1 className='title'>Список задач</h1>
        <InputItem />
        <ItemList itemList={itemList}/>
        <Footer count={3}/>
      {console.log(styles)}
    </div>
);

export default App;