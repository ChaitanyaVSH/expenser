import React from 'react';
import styles from "./FiltersPanel.module.css";

// Redux
import { useDispatch } from "react-redux";

const FiltersPanel = () => {

    // Hooks
    const dispatch = useDispatch();
    console.log(dispatch);

    const handleClick = () => {
    }

    return (
        <div className={styles.container} onClick={handleClick}>
            <p>Filters: </p>
        </div>
    )
};

export default FiltersPanel;
