import React, { Component } from 'react';
import classnames from 'classnames';


import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

import styles from './Todo.module.css';

class Todo extends Component {
  state = {
    itemList: [],
    count: 0,
    error: false,
    filter: 'all'
  };

  setTaskIsDone = task => {
    const newItemList = this.state.itemList.map(item => {
      if (item.id === task.id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    this.setState({ itemList: newItemList });
  };

  removeTask = id => {
    const newTaskList = this.state.itemList.filter(item => item.id !== id);
    this.setState({ itemList: newTaskList, count: this.state.count - 1 });
  };

  removeError = () => {
    this.setState({ error: false });
  };

  setFilter = (val) => {
    this.setState({ filter: val });
  };

  filterList = () => {
    if (this.state.filter === 'noComplete') return this.state.itemList.filter(item => !item.isDone);
    if (this.state.filter === 'complete') return this.state.itemList.filter(item => item.isDone);
    if (this.state.filter === 'all') return this.state.itemList;
  };

  addTask = value => {
    let err = false;
    this.state.itemList.forEach(item => {
      if (item.value === value) {
        err = true;
        this.setState({ error: err });
      }
    });

    const newTask = {
      value: value,
      isDone: false,
      id: this.state.count + 1
    };

    if (!err) {
      this.setState({
        itemList: [...this.state.itemList, newTask],
        count: this.state.count + 1
      });
    }
  };

  render() {
    const {
      itemList,
      error
    } = this.state;
    const complete = itemList.reduce((count, item) => item.isDone ? count + 1 : count, 0);

    return (
      <div className={styles.wrap}>
        <h1 className={styles.title}>Список задач</h1>
        {error &&
          <div className={styles.errors}>Такая задача уже добавлена!</div>
        }
        <InputItem addTask={this.addTask} removeError={this.removeError} />
        {itemList.length > 0 &&
          <div className={styles.filter}>
            <button
              className={classnames({
                [styles.filter__item]: true,
                [styles.filter__active]:
                  this.state.filter === 'all',
              })}
              onClick={() => this.setFilter('all')}
            >
              Все
        </button>
            <button
              className={classnames({
                [styles.filter__item]: true,
                [styles.filter__active]:
                  this.state.filter === 'noComplete',
              })}
              onClick={() => this.setFilter('noComplete')}
            >
              Невыполнено
        </button>
            <button
              className={classnames({
                [styles.filter__item]: true,
                [styles.filter__active]:
                  this.state.filter === 'complete',
              })}
              onClick={() => this.setFilter('complete')}
            >
              Выполнено
        </button>
          </div>
        }
        <ItemList
          itemList={this.filterList(itemList)}
          setTaskIsDone={this.setTaskIsDone}
          removeTask={this.removeTask}
        />
        {itemList.length > 0 &&
          <Footer count={itemList.length - complete} complete={complete} />
        }
      </div>
    );
  }
}

export default Todo;
