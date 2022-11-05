import React, { useState } from 'react';
import styles from "./ExpenseTracker.module.css";

// UI Components
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';

// Custom UI Components
import FormGroupWrapper from "../../Commons/FormGroupWrapper";
import FormSelectWrapper from '../../Commons/FormSelectWrapper';
import expenseEnum from "./expenseTypes";
import { transactionPersons } from '../TrackingConstants';

/**
 * This component helps the user to add an Expense.
 * @returns JSX
 */
const ExpenseTracker = ({
    transactionCategory,
    handleSubmit
}) => {

    // State to store the currently added values
    const [state, setState] = useState({
        expenseName: "",
        expenseAmount: 0,
        expenseType: null,
        expensePerson: "",
        expenseDesc: "",
        expenseDate: ""
    });

    // Form validation variables
    const [showFeedback, setShowFeedback] = useState(false);

    /**
     * Helper method to clear the input fields when the user clicks on Submit button.
     */
     const _clearPage = () => {
        setState({
            expenseName: "",
            expenseAmount: 0,
            expenseType: null,
            expensePerson: "",
            expenseDesc: "",
            expenseDate: ""
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
    };

    return (
        <div>
            <h4>Add Your expense</h4>
            <p>The expense provided here will be added to your overall expense for this month.</p>
            <div className={styles.expenseForm}>
                <Form noValidate validated={showFeedback} onSubmit={(event)=> {_handleSubmit(event, transactionCategory)}}>
                    <Col md={6} lg={5}>
                        <FormGroupWrapper
                        name="expenseName"
                        label="Expense name"
                        value={state.expenseName}
                        placeholder="Enter the name for your expense"
                        type="text"
                        controlId="expenseName"
                        feedback="Looks good"
                        onChange={_handleChange}
                        />
                    </Col>
                    <Col md={6} lg={5}>
                        <FormGroupWrapper
                        name="expenseAmount"
                        label="Expense amount"
                        value={state.expenseAmount}
                        placeholder="Enter the amount for your expense"
                        type="number"
                        controlId="expenseAmount"
                        feedback="Looks good"
                        onChange={_handleChange}
                        />
                    </Col>
                    <Col md={6} lg={5}>
                        <FormSelectWrapper
                        name="expenseType"
                        label="Expense type"
                        options={Object.keys(expenseEnum)}
                        onChange={_handleChange}
                        />
                    </Col>
                    <Col md={6} lg={5}>
                        <FormSelectWrapper
                        name="expensePerson"
                        label="Expense by"
                        options={Object.keys(transactionPersons)}
                        onChange={_handleChange}
                        />
                    </Col>
                    <Col md={6} lg={5}>
                        <FormGroupWrapper
                        name="expenseDesc"
                        label="Expense description"
                        value={state.expenseDesc}
                        placeholder="Enter the description for your expense"
                        type="text"
                        controlId="expenseDesc"
                        feedback="Looks good"
                        onChange={_handleChange}
                        />
                    </Col>
                    <Col md={6} lg={5}>
                        <FormGroupWrapper
                        name="expenseDate"
                        label="Expense date"
                        value={state.expenseDate}
                        placeholder="Enter the date for your expense"
                        type="date"
                        controlId="expenseDate"
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

export default ExpenseTracker;
