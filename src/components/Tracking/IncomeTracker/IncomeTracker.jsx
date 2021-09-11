import React, { useState } from 'react';
import styles from "./IncomeTracker.module.css";

// Redux
import { useDispatch } from "react-redux";
import { makeIncome } from '../../../redux/actions/income/actions';

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

    // Hooks
    const dispatch = useDispatch();

    // State to store the currently added values
    const [state, setState] = useState({
        incomeName: "",
        incomeAmount: 0
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

        dispatch(makeIncome({
            title: state.incomeName,
            amount: parseInt(state.incomeAmount)
        }));
        toast.success("Hurray! Added the income");
    };

    return (
        <div>
            <h4>Add Your income</h4>
            <p>The income provided here will be added to your overall income for this month.</p>
            <div className={styles.incomeForm}>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Col md={6} lg={5}>
                        <FormGroupWrapper
                        name="incomeName"
                        label="Income name"
                        placeholder="Enter the name for your income"
                        type="text"
                        controlId="incomeName"
                        feedback="Looks good"
                        onChange={handleChange}
                        />
                    </Col>
                    <Col md={6} lg={5}>
                        <FormGroupWrapper
                        name="incomeAmount"
                        label="Income amount"
                        placeholder="Enter the amount for your income"
                        type="number"
                        controlId="incomeAmount"
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

export default IncomeTracker;
