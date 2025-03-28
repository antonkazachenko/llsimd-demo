import React from 'react';
import styles from './App.module.css';
import Header from '../header/header';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div>Main</div>
    </div>
  );
}

export default App;
