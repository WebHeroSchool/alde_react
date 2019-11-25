import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import Todo from '../Todo/Todo';
import About from '../About/About';

import styles from './App.module.css';
import logo from '../../images/webHero.svg';

class App extends Component {
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

    return (
      <Router>
        <div className={styles.wrap}>
          <div className={styles.menu}>
            <NavLink
              exact
              to='/'
              className={styles.link}
              activeClassName={styles.active__link}
            >
              About
          </NavLink>
            <NavLink
              to='/todo'
              className={styles.link}
              activeClassName={styles.active__link}
            >
              ToDo
          </NavLink>
            <a href='https://webheroschool.ru/' target='_blank' rel='noopener noreferrer'>
              <img src={logo} alt='WebHeroSchool' className={styles.logo} />
            </a>
          </div>
          <Switch>
            <Route exact path='/' component={About} />
            <Route path='/todo' render={() =>
              <Todo
                itemList={itemList}
                addTask={this.addTask}
                removeError={this.removeError}
                setTaskIsDone={this.setTaskIsDone}
                removeTask={this.removeTask}
                error={error}
              />} />
          </Switch>
        </div>
      </Router>
    );
  }
};

export default App;
