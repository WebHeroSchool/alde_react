import React from "react";
import Item from "../Item/Item";
import styles from "./itemList.module.css";

const ItemList = ({ itemList, setTaskIsDone, removeTask }) => (
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

export default ItemList;
