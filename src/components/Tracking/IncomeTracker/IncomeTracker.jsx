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
import FormSelectWrapper from '../../Commons/FormSelectWrapper';
import incomeEnum from './incomeTypes';

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
        incomeAmount: "",
        incomeType: "",
        incomeDate: ""
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

    /**
     * Helper method to clear the input fields when the user clicks on Submit button.
     */
    const clearPage = () => {
        setState({
            incomeName: "",
            incomeAmount: "",
            incomeType: "",
            incomeDate: ""
        });
        setValidated(false);
    }

    /**
     * Submit handler to update the state and the validations
     * @param {0} event, input field on which the event has occurred.
     * @returns none
     */
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
        clearPage();
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
                        value={state.incomeName}
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
                        value={state.incomeAmount}
                        placeholder="Enter the amount for your income"
                        type="number"
                        controlId="incomeAmount"
                        feedback="Looks good"
                        onChange={handleChange}
                        />
                    </Col>
                    <Col md={6} lg={5}>
                        <FormSelectWrapper
                        name="incomeType"
                        label="Income type"
                        options={Object.keys(incomeEnum)}
                        onChange={handleChange}
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
