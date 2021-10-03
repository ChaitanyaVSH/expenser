import React, { useState } from 'react';
import styles from "./DatePickerWrapper.module.css";

// UI Components
import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

/**
 * This is a wrapper component which renders an instance of DatePicker.
 * @param {0} props, all the props which are passed to the component.
 * @returns DatePicker.
 */
const DatePickerWrapper = (props) => {

    // Sets the date to Today.
    const [date, setDate] = useState(new Date());

    // Change handler for the date.
    const handleChange = (selectedDate) => {
        console.log(selectedDate);
        setDate(selectedDate)
    }

  return (
    <Form.Group className="mb-3" controlId={props.controlId}>
        <Form.Label>{props.label}</Form.Label>
        <DatePicker
            name={props.name}
            selected={date}
            onChange={(date) => handleChange(date)}
            className={styles.reactDatePicker}
            placeholderText={props.placeholder}
            isClearable
            closeOnScroll={true}
        />
    </Form.Group>
  );
}

export default DatePickerWrapper;
