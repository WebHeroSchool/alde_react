import React, { Component } from 'react';
import classnames from 'classnames';

import TextField from '@material-ui/core/TextField';

import styles from './Input.module.css';

class InputItem extends Component {
  state = {
    value: null
  };

  buttonHandler = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.value);
    this.setState({ value: null });
  };

  render() {
    return (
      <form className={styles.inputWrap}>
        <TextField
          id='standard-dense'
          label='Добавить задачу'
          margin='dense'
          autoComplete='off'
          className={styles.searchInput}
          value={this.state.value || ''}
          onChange={e => this.setState({ value: e.target.value.toUpperCase() })}
          onFocus={this.props.removeError}
        />
        <button
          type='submit'
          className={classnames({
            [styles.addButton]:
              this.state.value !== null && this.state.value !== '',
            [styles.disabledButton]:
              this.state.value === null || this.state.value === ''
          })}
          onClick={this.buttonHandler}
          disabled={this.state.value === null || this.state.value === ''}
        >
          Добавить
        </button>
      </form>
    );
  }
}

export default InputItem;
