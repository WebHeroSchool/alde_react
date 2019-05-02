import React from 'react'
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Item from "../Item/Item";
import Footer from '../Footer/Footer';

const App = () => (
    <div>
        <h1>Список задач</h1>
        <InputItem />
        <ItemList>
            <Item task={'Поесть'}/>
            <Item task={'Покодить'}/>
            <Item task={'Поспать'}/>
        </ItemList>
        <Footer count={3}/>
    </div>
);

export default App;