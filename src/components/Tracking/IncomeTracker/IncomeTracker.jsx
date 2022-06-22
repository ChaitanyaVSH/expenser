import React, { useState } from 'react';
import styles from "./IncomeTracker.module.css";

// UI Components
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';

// Custom UI Components
import FormGroupWrapper from "../../Commons/FormGroupWrapper";
import FormSelectWrapper from '../../Commons/FormSelectWrapper';
import incomeEnum from './incomeTypes';

/**
 * This component helps the user to add an Income.
 * @returns JSX
 */
const IncomeTracker = ({
    transactionCategory,
    handleSubmit
}) => {

    // State to store the currently added values
    const [state, setState] = useState({
        incomeName: "",
        incomeAmount: 0,
        incomeType: null,
        incomeDesc: "",
        incomeDate: ""
    });

    // Form validation variables
    const [showFeedback, setShowFeedback] = useState(false);

    /**
     * Helper method to clear the input fields when the user clicks on Submit button.
     */
     const _clearPage = () => {
        setState({
            incomeName: "",
            incomeAmount: 0,
            incomeType: null,
            incomeDesc: "",
            incomeDate: ""
        });
    }

    /**
     * This handler is needed for the FormWrapper to update the state in the current component.
     * @param {0} event, target on which the FormControlWrapper is embedded
     */
    const _handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }

    const _handleSubmit = (event, transactionCategory) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setShowFeedback(true);
            toast.error("Fix the validations!");
            return
        }
        handleSubmit(event, transactionCategory, state);
        _clearPage();
    }

    return (
        <div>
            <h4>Add Your income</h4>
            <p>The income provided here will be added to your overall income for this month.</p>
            <div className={styles.incomeForm}>
                <Form noValidate validated={showFeedback} onSubmit={(event)=> {_handleSubmit(event, transactionCategory)}}>
                    <Col md={6} lg={5}>
                        <FormGroupWrapper
                        name="incomeName"
                        label="Income name"
                        value={state.incomeName}
                        placeholder="Enter the name for your income"
                        type="text"
                        controlId="incomeName"
                        feedback="Looks good"
                        onChange={_handleChange}
                        />
                    </Col>
                    <Col md={6} lg={5}>
                        <FormGroupWrapper
                        name="incomeAmount"
                        label="Income amount"
                        value={state.incomeAmount}
                        placeholder="Enter the amount for your income"
                        type="number"
                        controlId="incomeAmount"
                        feedback="Looks good"
                        onChange={_handleChange}
                        />
                    </Col>
                    <Col md={6} lg={5}>
                        <FormSelectWrapper
                        name="incomeType"
                        label="Income type"
                        options={Object.keys(incomeEnum)}
                        onChange={_handleChange}
                        />
                    </Col>
                    <Col md={6} lg={5}>
                        <FormGroupWrapper
                        name="incomeDesc"
                        label="Income description"
                        value={state.incomeDesc}
                        placeholder="Enter the description for your income"
                        type="text"
                        controlId="incomeDesc"
                        feedback="Looks good"
                        onChange={_handleChange}
                        />
                    </Col>
                    <Col md={6} lg={5}>
                        <FormGroupWrapper
                        name="incomeDate"
                        label="Income date"
                        value={state.incomeDate}
                        placeholder="Enter the date for your income"
                        type="date"
                        controlId="incomeDate"
                        feedback="Looks good"
                        onChange={_handleChange}
                        />
                    </Col>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </div>
        </div>
    )
}

export default IncomeTracker;
