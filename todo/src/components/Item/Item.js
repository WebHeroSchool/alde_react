import React, { Component } from 'react';
import propTypes from 'prop-types';
import classname from 'classnames';

import Clear from '@material-ui/icons/HighlightOff';

import styles from './Item.module.css';

class Item extends Component {
  componentDidMount() {
    this.memoryLost = setInterval(() => console.log('memory lost'), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.memoryLost);
  }

  render() {
    const { task, setTaskIsDone, removeTask } = this.props;
    return (
      <div className={styles.itemWrap}>
        <input
          type='checkbox'
          checked={task.isDone}
          onChange={() => setTaskIsDone(task)}
        />
        <div
          className={classname({
            [styles.task]: task,
            [styles.done]: task.isDone
          })}
        >
          <p className={styles.itemText}>{task.value}</p>
        </div>
        <Clear className={styles.btn} onClick={() => removeTask(task.id)} />
      </div>
    );
  }
}

Item.propTypes = {
  task: propTypes.object,
  setTaskIsDone: propTypes.func,
  removeTask: propTypes.func
};

export default Item;