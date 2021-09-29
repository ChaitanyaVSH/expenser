import React from 'react';
import styles from "./Profile.module.css";

// UI Components
import Tab from "react-bootstrap/Tab";
import Tabs from 'react-bootstrap/Tabs';

/**
 * This component helps the user to track the entire incomes and expenses through dashboard.
 * @returns JSX
 */
const Profile = () => {
    return (
        <div className={styles.container}>
            <Tabs id="controlled-tab-example" transition={false}>
                <Tab eventKey="home" title="Home">
                    <h1>T1</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt debitis harum reprehenderit, commodi consectetur excepturi!</p>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <h1>T2</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt debitis harum reprehenderit, commodi consectetur excepturi!</p>
                </Tab>
                <Tab eventKey="contact" title="Contact">
                    <h1>T3</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt debitis harum reprehenderit, commodi consectetur excepturi!</p>
                </Tab>
            </Tabs>
        </div>
    );
};

export default Profile;
