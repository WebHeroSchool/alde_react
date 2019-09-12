import React from "react";
import propTypes from 'prop-types';
import classnames from "classnames";

import Clear from "@material-ui/icons/HighlightOff";

import styles from "./Item.module.css";

const Item = ({ task, setTaskIsDone, removeTask }) => (
  <div className={styles.itemWrap}>
    <input
      type="checkbox"
      checked={task.isDone}
      onChange={() => setTaskIsDone(task)}
    />
    <div
      className={classnames({
        [styles.task]: task,
        [styles.done]: task.isDone
      })}
    >
      <p className={styles.itemText}>{task.value}</p>
    </div>
    <Clear className={styles.btn} onClick={() => removeTask(task.id)} />
  </div>
);

Item.propTypes = {
  task: propTypes.object,
  setTaskIsDone: propTypes.func,
  removeTask: propTypes.func
}


export default Item;
