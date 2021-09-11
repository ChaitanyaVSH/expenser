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
        return options.map((option, idx) => {
            return <option key={idx} value={option.value}>{option.label}</option>
        })
    }

    // Helper method to validate the rendering logic for Form.Select
    const validateFormSelect = () => {
        if (options.length === 0) return

        return (
            <div>
                <Form.Label>{props.label}</Form.Label>
                <Form.Select className="mb-3">
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
