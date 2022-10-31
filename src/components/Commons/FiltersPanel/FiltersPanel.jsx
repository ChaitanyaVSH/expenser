import React from 'react';
import styles from "./FiltersPanel.module.css";

// Redux
// import { useDispatch } from "react-redux";
import FormGroupWrapper from '../FormGroupWrapper';
import FormSelectWrapper from '../FormSelectWrapper';

const FiltersPanel = (props) => {

    // Hooks
    // const dispatch = useDispatch();
    console.log("props", props)

    const handleClick = (fT) => {
    }

    const renderJsx= () => {
        return props.filters.map((filter, idx) => {
            if (filter.filterType === "date") {
                return <FormGroupWrapper
                name={filter.filterName}
                type={filter.filterType}
                controlId="incomeName"
                feedback="Looks good"
                onChange={() => handleClick(filter.filterType)}
                />
            }

            else if (filter.filterType === "select") {
                return  <FormSelectWrapper
                options={["Salary", "Capital Gains"]}
                onChange={handleClick}
                />
            }
            return null;
        })
    }

    return (
        <div className={styles.container} onClick={handleClick}>
            <p>Filters: </p>
            {renderJsx()}
        </div>
    )
};

export default FiltersPanel;
