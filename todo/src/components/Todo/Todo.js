import React, {Component} from 'react';

import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

import styles from './Todo.module.css';

class App extends Component {
  state = {
    itemList: [],
    count: 0
  };

  setTaskIsDone = task => {
    const newItemList = this.state.itemList.map(item => {
      if (item.id === task.id) {
        item.isDone = !item.isDone;
      }
      return item;
    });
    this.setState({itemList: newItemList});
  };

  removeTask = id => {
    const newTaskList = this.state.itemList.filter(item => item.id !== id);
    this.setState({itemList: newTaskList, count: this.state.count - 1});
  };

  addTask = value => {
    const newTask = {
      value: value,
      isDone: false,
      id: this.state.count + 1
    };

    this.setState({
      itemList: [...this.state.itemList, newTask],
      count: this.state.count + 1
    });
  };

  render() {
    return (
        <div className={styles.wrap}>
          <h1 className={styles.title}>Список задач</h1>
          <InputItem addTask={this.addTask}/>
          <ItemList
              itemList={this.state.itemList}
              setTaskIsDone={this.setTaskIsDone}
              removeTask={this.removeTask}
          />
          <Footer count={this.state.count}/>
        </div>
    );
  }
}

export default App;