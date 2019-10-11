import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';

import styles from './App.module.css';

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
          <NavLink
            to='/contacts'
            className={styles.link}
            activeClassName={styles.active__link}
          >
            Contacts
          </NavLink>
        </div>
        <Switch>
          <Route exact path='/' component={About} />
          <Route path='/todo' component={Todo} />
          <Route path='/contacts' component={Contacts} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
