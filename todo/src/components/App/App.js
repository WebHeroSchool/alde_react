import React from 'react'
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

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
    <div>
        <h1>Список задач</h1>
        <InputItem />
        <ItemList itemList={itemList}/>
        <Footer count={3}/>
    </div>
);

export default App;