import React from 'react';
import styles from './main.module.css';
import CodeInput from '../code-input/code-input';

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.codeBlock}>
        <div className={styles.inputBlock}>
          <CodeInput />
        </div>
        <div className={styles.outputBlock}>
          <div className={styles.firstOutput}><CodeInput /></div>
          <div className={styles.secondOutput}><CodeInput /></div>
        </div>
      </div>
      <div className={styles.btnStyle}>
        <span className={styles.btnText}>
          Submit Code
        </span>
      </div>
    </div>
  );
}

export default Main;
