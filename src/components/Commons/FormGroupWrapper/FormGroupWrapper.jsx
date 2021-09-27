import React from 'react';

// UI Components
import Form from 'react-bootstrap/Form';

/**
 * This is a wrapper component which renders an instance of From Group.
 * @param {0} props, all the props which are passed to the component.
 * @returns Form.Group
 */
const FormGroupWrapper = (props) => {

    // Bubbles up the onChange event to the handler passed in the props
    const changeHandler = (event) => {
        props.onChange(event)
    }

    return (
        <Form.Group className="mb-3" controlId={props.controlId}>
            <Form.Label>{props.label}</Form.Label>
            {
            props.type ?
                <Form.Control
                    required
                    name={props.name}
                    type={props.type}
                    placeholder={props.placeholder}
                    onChange={changeHandler}
                    value={props.value}
                />
            :null
            }
            <Form.Control.Feedback>{props.feedback}</Form.Control.Feedback>
        </Form.Group>
    )
}

export default FormGroupWrapper;
