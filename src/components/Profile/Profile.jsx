import React from 'react';
import styles from "./Profile.module.css";

// Redux
import { useSelector } from "react-redux";

// UI Components
import Tab from "react-bootstrap/Tab";
import Tabs from 'react-bootstrap/Tabs';
import Transaction from '../Commons/Transaction/Transaction';
import Overview from '../Overview/Overview';
import FiltersPanel from '../Commons/FiltersPanel/FiltersPanel';

/**
 * This component helps the user to track the entire incomes and expenses through dashboard.
 * @returns JSX
 */
const Profile = () => {
    
    const state = useSelector((state) => state);

    const _getIncomes = () => {
        const incomes = [...state.transactions.incomes]
        return incomes.map((i, idx) => {
            return <Transaction
                        key={idx}
                        tName={i.title}
                        tAmount={i.amount}
                        tType={i.type}
                        tDesc={i.desc}
                        tDate={i.date}
                        tCategory={i.category}
                        tId={idx}
                    />
        })
    }

    const _getExpenses = () => {
        const expenses = [...state.transactions.expenses]
        return expenses.map((e, idx) => {
            return <Transaction
                        key={idx}
                        tName={e.title}
                        tAmount={e.amount}
                        tType={e.type}
                        tDesc={e.desc}
                        tDate={e.date}
                        tCategory={e.category}
                        tId={idx}
                    />
        })
    }

    return (
        <div className={styles.container}>
            <Tabs id="controlled-tab-example" fill justify transition={true}>
                <Tab eventKey="incomes" title="Incomes">
                    <br />
                    <FiltersPanel filters={[
                        {
                            filterName: "f1",
                            filterType: "date"
                        },
                        {
                            filterName: "f2",
                            filterType: "select"
                        }]}/>
                    <h1>Your Incomes</h1>
                    <div className={styles.transactionsContainer}>
                        {_getIncomes() || <h4>None here</h4>}
                    </div>
                </Tab>
                <Tab eventKey="expenses" title="Expenses">
                    <br />
                    <h1>Your Expenses</h1>
                    <div className={styles.transactionsContainer}>
                        {_getExpenses() || <h4>None here</h4>}
                    </div>
                </Tab>
                <Tab eventKey="overview" title="Overview">
                    <br />
                    <h1>Your summary</h1>
                    <Overview />
                </Tab>
            </Tabs>
        </div>
    );
};

export default Profile;
