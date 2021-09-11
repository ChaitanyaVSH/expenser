import React, { useState } from 'react';
import styles from "./ExpenseTracker.module.css";

// UI Components
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';

// Custom UI Components
import FormGroupWrapper from "../../Commons/FormGroupWrapper";

/**
 * This component helps the user to add an Expense.
 * @returns JSX
 */
const ExpenseTracker = () => {

    // State to store the currently added values
    const [state, setState] = useState({
        expenseName: "",
        expenseAmount: 0
    });

    // Form validation variables
    const [validated, setValidated] = useState(false);

    /**
     * This handler is needed for the FormWrapper to update the state in the current component.
     * @param {0} event, target on which the FormControlWrapper is embedded
     */
     const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            setValidated(true);
            toast.error("Fix the validations!");
            return
        }
        setValidated(true);
        console.log("State: ", state);
    };

    return (
        <div>
            <h4>Add Your expense</h4>
            <p>The expense provided here will be added to your overall expense for this month.</p>
            <div className={styles.expenseForm}>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Col md={6} lg={5}>
                        <FormGroupWrapper
                        name="expenseName"
                        label="Expense name"
                        placeholder="Enter the name for your expense"
                        type="text"
                        controlId="expenseName"
                        feedback="Looks good"
                        onChange={handleChange}
                        />
                    </Col>
                    <Col md={6} lg={5}>
                        <FormGroupWrapper
                        name="expenseAmount"
                        label="Expense amount"
                        placeholder="Enter the amount for your expense"
                        type="number"
                        controlId="expenseAmount"
                        feedback="Looks good"
                        onChange={handleChange}
                        />
                    </Col>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </div>
        </div>
    )
}

export default ExpenseTracker;
