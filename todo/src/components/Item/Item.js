import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';

const Item = ({ task }) => (
  <li className={
    classnames({
      [styles.done]: task.isDone,
    })
  }>{task.value}</li>
);

export default Item;