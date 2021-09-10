import React from 'react';
import styles from "./Tracking.module.css";

// UI Components
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';

// Custom UI Components
import FormGroupWrapper from "../Commons/FormGroupWrapper";

/**
 * This component helps the user to add an income or expense.
 * @returns JSX
 */
const Tracking = () => {
    return (
        <div className={styles.container}>
            <div className={styles.trackIncome}>
                <h4>Add Your income</h4>
                <p>The income provided here will be added to your overall income for this month.</p>
                <div className={styles.incomeForm}>
                <Form>
                    <Col md={6} lg={5}>
                        <FormGroupWrapper
                        label="Income name"
                        placeholder="Enter the name for your income"
                        type="text"
                        controlId="incomeName"
                        />
                    </Col>
                    <Col md={6} lg={5}>
                        <FormGroupWrapper
                        label="Income amount"
                        placeholder="Enter the amount for your income"
                        type="number"
                        controlId="incomeAmount"
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
