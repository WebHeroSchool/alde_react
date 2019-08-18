import React from 'react';
import Item from '../Item/Item'
import styles from './itemList.module.css'

const ItemList = ({itemList}) => (
  <div className={styles.listWrap}>
      {itemList.map(item => (
        <Item task={item} key={item.value}/>
      ))}
  </div>
);

export default ItemList;