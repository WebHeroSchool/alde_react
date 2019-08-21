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
      },
      {
        value: 'Покодить',
        isDone: true,
      },
      {
        value: 'Поспать',
        isDone: false,
      }
    ],
  };

  setTaskIsDone = (task) => {
    console.log(task.isDone);
  };

  render () {
    return (
      <div className={styles.wrap}>
          <h1 className={styles.title}>Список задач</h1>
          <InputItem />
          <ItemList
              itemList={this.state.itemList}
              setTaskIsDone={this.setTaskIsDone}
          />
          <Footer count={3}/>
      </div>
    )
  }
}

export default App;