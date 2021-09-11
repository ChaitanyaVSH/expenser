import React, { useState } from 'react';
import styles from "./IncomeTracker.module.css";

// UI Components
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';

// Custom UI Components
import FormGroupWrapper from "../../Commons/FormGroupWrapper";

/**
 * This component helps the user to add an Income.
 * @returns JSX
 */
const IncomeTracker = () => {

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
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </div>
        </div>
    )
}

export default IncomeTracker;
