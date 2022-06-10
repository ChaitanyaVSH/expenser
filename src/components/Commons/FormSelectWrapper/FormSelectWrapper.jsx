import React from 'react';

// UI Components
import Form from 'react-bootstrap/Form';

/**
 * This is a wrapper component which renders an instance of From Select.
 * @param {0} props, all the props which are passed to the component.
 * @returns Form.Select
 */
const FormSelectWrapper = (props) => {

    const { options } = props;

    // Helper method to create option tag for each Form.Select option
    const getOptions = () => {
        let _options = [
            <option key={0}>Choose</option>
        ]
        options.forEach((option, idx) => {
            _options.push(<option key={idx+1} value={option}>{option}</option>)
        });

        return _options;
    }

    // Bubbles up the onChange event to the handler passed in the props
    const changeHandler = (event) => {
        props.onChange(event)
    }

    // Helper method to validate the rendering logic for Form.Select
    const validateFormSelect = () => {
        if (options.length === 0) return

        return (
            <div>
                <Form.Label>{props.label}</Form.Label>
                <Form.Select
                    name={props.name}
                    className="mb-3"
                    onChange={changeHandler}
                >
                    {getOptions()}
                </Form.Select>
            </div>
        )
    }

    return (
        <div>
            {validateFormSelect()}
        </div>
    )
}

export default FormSelectWrapper;
