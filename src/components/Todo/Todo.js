import React, { Component } from 'react';
import classnames from 'classnames';


import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

import styles from './Todo.module.css';

const filterVal = {
  all: 'all',
  complete: 'complete',
  noComplete: 'noComplete'
}

class Todo extends Component {
  state = {
    filter: 'all'
  };

  setFilter = (val) => {
    this.setState({ filter: val });
  };

  filterList = () => {
    switch (filterVal[this.state.filter]) {
      case filterVal.complete:
        return this.props.itemList.filter(item => item.isDone)
      case filterVal.noComplete:
        return this.props.itemList.filter(item => !item.isDone)
      default:
        return this.props.itemList;
    }
  };

  render() {
    const {
      itemList,
      addTask,
      removeError,
      setTaskIsDone,
      removeTask,
      error
    } = this.props;

    const complete = itemList.reduce((count, item) => item.isDone ? count + 1 : count, 0);

    return (
      <div className={styles.wrap}>
        <h1 className={styles.title}>Список задач</h1>
        <div className={styles.errors}>
          {error &&
            <span>Такая задача уже добавлена!</span>
          }
        </div>
        <InputItem addTask={addTask} removeError={removeError} />
        {itemList.length > 0 &&
          <div className={styles.filter}>
            <button
              className={classnames({
                [styles.filter__item]: true,
                [styles.filter__active]:
                  this.state.filter === filterVal.all,
              })}
              onClick={() => this.setFilter('all')}
            >
              Все
        </button>
            <button
              className={classnames({
                [styles.filter__item]: true,
                [styles.filter__active]:
                  this.state.filter === filterVal.noComplete,
              })}
              onClick={() => this.setFilter(filterVal.noComplete)}
            >
              Невыполнено
        </button>
            <button
              className={classnames({
                [styles.filter__item]: true,
                [styles.filter__active]:
                  this.state.filter === filterVal.complete,
              })}
              onClick={() => this.setFilter(filterVal.complete)}
            >
              Выполнено
        </button>
          </div>
        }
        <ItemList
          itemList={this.filterList(itemList)}
          setTaskIsDone={setTaskIsDone}
          removeTask={removeTask}
        />
        {itemList.length > 0 &&
          <Footer count={itemList.length - complete} complete={complete} />
        }
      </div>
    );
  }
}

export default Todo;
