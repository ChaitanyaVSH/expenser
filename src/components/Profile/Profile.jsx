import React from 'react';
import styles from "./Profile.module.css";

// Redux
import { useSelector } from "react-redux";

// UI Components
import Tab from "react-bootstrap/Tab";
import Tabs from 'react-bootstrap/Tabs';
import BarGraph from '../Commons/Dashboards/BarGraph/BarGraph';

/**
 * This component helps the user to track the entire incomes and expenses through dashboard.
 * @returns JSX
 */
const Profile = () => {
    
    const state = useSelector((state) => state.transactions)
    console.log("state", state);

    return (
        <div className={styles.container}>
            <Tabs id="controlled-tab-example" fill justify transition={true}>
                <Tab eventKey="incomes" title="Incomes">
                    <br />
                    <h1>Your Incomes</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, atque voluptatem, perspiciatis consectetur, labore delectus similique vero nemo repellat tempore totam officiis odio culpa sit.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, atque voluptatem, perspiciatis consectetur, labore delectus similique vero nemo repellat tempore totam officiis odio culpa sit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ea magnam molestias, iure laboriosam exercitationem esse, rem necessitatibus dicta quos sequi quas consequatur, a labore?</p>
                    <BarGraph/>
                </Tab>
                <Tab eventKey="expenses" title="Expenses">
                    <br />
                    <h1>Your Expenses</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt debitis harum reprehenderit, commodi consectetur excepturi!</p>
                    <BarGraph/>
                </Tab>
            </Tabs>
        </div>
    );
};

export default Profile;
