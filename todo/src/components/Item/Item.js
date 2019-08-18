import React from 'react';
import classnames from 'classnames';
import Clear from '@material-ui/icons/HighlightOff';
import styles from './Item.module.css';

const Item = ({task}) => (
    <div className={styles.itemWrap}>
      <input type='checkbox'/>
      <div className={
        classnames({
          [styles.task]: task,
          [styles.done]: task.isDone,
        })
      }>
        <p className={styles.itemText}>{task.value}</p>
      </div>
      <Clear className={styles.btn} />
    </div>
);

export default Item;