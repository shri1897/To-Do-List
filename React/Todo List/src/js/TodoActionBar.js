import React from 'react'
import PropTypes from 'prop-types';
import styles from '../css/TodoActionBar.module.css'

const propTypes = {
    textValue: PropTypes.string.isRequired,
    handleInputTextChange: PropTypes.func.isRequired,
    addItem: PropTypes.func.isRequired,
    deleteSelected: PropTypes.func.isRequired,
    deleteCompleted: PropTypes.func.isRequired,
    selectDeselectAll: PropTypes.func.isRequired
}

function TodoActionBar(props) {
    function addItemOnEnterKeyPress(event) {
        if (event.which === 13) {
            props.addItem();
        }
    }

    return (
        <div className={styles["action-bar"]}>
            <input
                type="text"
                className={styles["text-box"]}
                placeholder="Write something to add"
                value={props.textValue}
                onChange={props.handleInputTextChange}
                onKeyPress={addItemOnEnterKeyPress}
            />
            <button
                className={styles["btn-add"]}
                onClick={props.addItem}>
                Add
            </button>
            <button
                className={styles["btn-select-deselect-all"]}
                onClick={props.selectDeselectAll}>
                Select/Deselect All
            </button>
            <button
                className={styles["btn-delete-selected"]}
                onClick={props.deleteSelected}>
                Delete Selected
            </button>
            <button
                className={styles["btn-delete-completed"]}
                onClick={props.deleteCompleted}>
                Delete Completed
            </button>
        </div>
    );
}

TodoActionBar.propTypes = propTypes;

export default React.memo(TodoActionBar);