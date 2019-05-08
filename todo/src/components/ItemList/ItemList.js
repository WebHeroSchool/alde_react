import React from 'react';
import Item from '../Item/Item'

const ItemList = ({itemList}) => (
  <ul>
      {itemList.map(item => (
        <Item task={item} key={item.value}/>
      ))}
  </ul>
);

export default ItemList;