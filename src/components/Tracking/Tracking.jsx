import React, { useState } from 'react';
import styles from "./Tracking.module.css";

// UI Components
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';

// Custom UI Components
import FormGroupWrapper from "../Commons/FormGroupWrapper";

/**
 * This component helps the user to add an income or expense.
 * @returns JSX
 */
const Tracking = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        toast.success("Wow so easy!");
    };

    return (
        <div className={styles.container}>
            <div className={styles.trackIncome}>
                <h4>Add Your income</h4>
                <p>The income provided here will be added to your overall income for this month.</p>
                <div className={styles.incomeForm}>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Col md={6} lg={5}>
                        <FormGroupWrapper
                        label="Income name"
                        placeholder="Enter the name for your income"
                        type="text"
                        controlId="incomeName"
                        feedback="Looks good"
                        />
                    </Col>
                    <Col md={6} lg={5}>
                        <FormGroupWrapper
                        label="Income amount"
                        placeholder="Enter the amount for your income"
                        type="number"
                        controlId="incomeAmount"
                        feedback="Looks good"
                        />
                    </Col>
                    <Button size="lg" variant="primary" type="submit">Submit</Button>
                </Form>
                </div>
            </div>
            <div className={styles.trackExpense}>
                <h4>Add Your Expense</h4>
                <p>The expense provided here will be added to your overall expense for this month.</p>
            </div>
        </div>
    )
}

export default Tracking;
