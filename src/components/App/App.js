import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import Todo from '../Todo/Todo';
import About from '../About/About';

import styles from './App.module.css';
import logo from '../../images/WebHeroSchool.png';

const App = () => {
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
            <img src={logo} alt='WebHeroSchool' />
          </a>
        </div>
        <Switch>
          <Route exact path='/' component={About} />
          <Route path='/todo' component={Todo} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
