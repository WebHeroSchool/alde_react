import React, { Component } from 'react';
import classnames from 'classnames';

import TextField from '@material-ui/core/TextField';

import styles from './Input.module.css';

class InputItem extends Component {
  state = {
    value: null
  };

  buttonHandler = () => {
    this.props.addTask(this.state.value);
    this.setState({ value: null });
  };

  render() {
    return (
      <div className={styles.inputWrap}>
        <TextField
          id='standard-dense'
          label='Добавить задачу'
          margin='dense'
          className={styles.searchInput}
          value={this.state.value || ''}
          onChange={e => this.setState({ value: e.target.value.toUpperCase() })}
        />
        <button
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
      </div>
    );
  }
}

export default InputItem;