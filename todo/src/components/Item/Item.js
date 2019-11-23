import React from 'react';
import styles from './Item.module.css';
import propTypes from 'prop-types';
import classname from 'classnames';

import del from '../../images/delete.svg'


const Item = ({ task, setTaskIsDone, removeTask }) => {
  return (
    <div className={styles.itemWrap}>
      <label className={classname({
        [styles.label]: task,
        [styles.label__comp]: task.isDone,
      })}>
        <input
          type='checkbox'
          checked={task.isDone}
          className={styles.checkbox}
          onChange={() => setTaskIsDone(task)}
        />
      </label>
      <div
        className={classname({
          [styles.task]: task,
          [styles.done]: task.isDone
        })}
      >
        <p className={styles.itemText}>{task.value}</p>
      </div>
      <img src={del} alt='удалить' className={styles.btn} onClick={() => removeTask(task.id)} />
    </div >
  );

}

Item.propTypes = {
  task: propTypes.object,
  setTaskIsDone: propTypes.func,
  removeTask: propTypes.func
};

export default Item;