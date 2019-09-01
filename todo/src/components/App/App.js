import React, {Component} from 'react'
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';


class App extends Component {
  state = {
    itemList: [
      {
        value: 'Поесть',
        isDone: true,
        id: 1,
      },
      {
        value: 'Покодить',
        isDone: true,
        id: 2,
      },
      {
        value: 'Поспать',
        isDone: false,
        id: 3,
      }
    ],
  };

  setTaskIsDone = task => {
    const newItemList = this.state.itemList.map(item => {
      if(item.id === task.id){
          item.isDone = !item.isDone
      }
      return item;
    })

    this.setState({itemList: newItemList})
  };

  removeTask = id => {
    const newTaskList = this.state.itemList.filter(item => item.id !== id);

    this.setState({itemList: newTaskList})
  };

  render () {
    return (
      <div className={styles.wrap}>
          <h1 className={styles.title}>Список задач</h1>
          <InputItem />
          <ItemList
              itemList={this.state.itemList}
              setTaskIsDone={this.setTaskIsDone}
              removeTask={this.removeTask}
          />
          <Footer count={3}/>
      </div>
    )
  }
}

export default App;