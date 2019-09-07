import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import styles from "./Input.module.css";
import classnames from "classnames";

class InputItem extends Component {
  state = {
    value: ""
  };

  buttonHandler = () => {
    this.props.addTask(this.state.value);
    this.setState({ value: "" });
  };

  render() {
    return (
      <div className={styles.inputWrap}>
        <TextField
          id="standard-dense"
          label="Добавить задачу"
          margin="dense"
          className={styles.searchInput}
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value.toUpperCase() })}
        />
        <button
          className={classnames({
            [styles.addButton]: this.state.value !== "",
            [styles.disabledButton]: this.state.value === ""
          })}
          onClick={this.buttonHandler}
          disabled={this.state.value === ""}
        >
          Добавить
        </button>
      </div>
    );
  }
}

export default InputItem;
