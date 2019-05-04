import React from 'react';
import Item from '../Item/Item'

const ItemList = ({itemList}) => (
  <ul>
      {itemList.map(item => (
        <Item task={item.value} key={item.value}/>
      ))}
  </ul>
);

export default ItemList;