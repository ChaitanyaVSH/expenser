import React from 'react';
import styles from "./App.module.css";

// UI Components
import ShowCase from '../ShowCase/ShowCase';

const App = () => {

  return (
    <div>
      <div className={styles.showcase}>
        <ShowCase/>
      </div>
    </div>
  )
}

export default App;
