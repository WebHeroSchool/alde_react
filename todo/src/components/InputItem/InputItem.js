import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from './Input.module.css';

const InputItem = () => (
    <div className={styles.inputWrap}>
        <TextField
            id="standard-dense"
            label="Добавить задачу"
            margin="dense"
            className={styles.searchInput}
        />
    </div>
);

export default InputItem;