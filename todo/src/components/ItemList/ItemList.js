import React from 'react';
import propTypes from 'prop-types';

import Item from '../Item/Item';

import styles from './itemList.module.css';

const ItemList = ({ itemList, filter, setTaskIsDone, removeTask }) => (
  <div className={styles.listWrap}>
    {itemList.map(item => (
      <Item
        task={item}
        key={item.id}
        setTaskIsDone={setTaskIsDone}
        removeTask={removeTask}
      />
    ))}
  </div>
);

ItemList.defaultProps = {
  itemList: [
    {
      value: 'Добавь тасочку',
      isDone: false,
      id: 0
    }
  ]
};

ItemList.propTypes = {
  itemList: propTypes.array,
  setTaskIsDone: propTypes.func,
  removeTask: propTypes.func
};

export default ItemList;
