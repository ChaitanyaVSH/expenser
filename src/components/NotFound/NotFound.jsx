import React from 'react';
import styles from "./NotFound.module.css";
import notFoundLogo from "../../images/notFound.svg";

const NotFound = () => {
    return (
        <div className={styles.container}>
            <img src={notFoundLogo} alt="Page Not Found"/>
            <h4>The Page you are looking does not exist.</h4>
        </div>
    )
}

export default NotFound;
