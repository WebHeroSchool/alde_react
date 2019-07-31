import React from 'react'
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const itemList = [
  {
    value: 'Поесть',
    isDone: true,
  },
  {
    value: 'Покодить',
    isDone: true,
  },
  {
    value: 'Поспать',
    isDone: false,
  }
];

const App = () => (
    <div className={styles.wrap}>
        <h1 className={styles.title}>Список задач</h1>
        <InputItem />
        <ItemList itemList={itemList}/>
        <Footer count={3}/>
    </div>
);

export default App;