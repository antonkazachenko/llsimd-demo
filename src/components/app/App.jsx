import React from 'react';
import styles from './App.module.css';
import Main from '../main/main';
import Header from '../header/header';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      {/* eslint-disable-next-line react/style-prop-object */}
      <Main />
    </div>
  );
}

export default App;
