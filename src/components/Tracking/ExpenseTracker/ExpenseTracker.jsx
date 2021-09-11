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

    const [validated, setValidated] = useState(false);

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
    };

    return (
        <div>
            <h4>Add Your expense</h4>
            <p>The expense provided here will be added to your overall expense for this month.</p>
            <div className={styles.expenseForm}>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Col md={6} lg={5}>
                        <FormGroupWrapper
                        label="Expense name"
                        placeholder="Enter the name for your expense"
                        type="text"
                        controlId="expenseName"
                        feedback="Looks good"
                        />
                    </Col>
                    <Col md={6} lg={5}>
                        <FormGroupWrapper
                        label="Expense amount"
                        placeholder="Enter the amount for your expense"
                        type="number"
                        controlId="expenseAmount"
                        feedback="Looks good"
                        />
                    </Col>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </div>
        </div>
    )
}

export default ExpenseTracker;
