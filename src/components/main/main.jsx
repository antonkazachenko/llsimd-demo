import React from 'react';
import styles from './main.module.css';
import CodeInput from '../code-input/code-input';

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.codeBlock}>
        <div className={styles.inputBlock}>
          <div className={styles.codeTitle}>Code Input</div>
          <CodeInput />
        </div>
        <div className={styles.outputBlock}>
          <div className={styles.firstOutput}>
            <div className={styles.codeTitle}>LLVM IR Viewer</div>
            <CodeInput />
          </div>
          <div className={styles.secondOutput}>
            <div className={styles.codeTitle}>Transformed Output</div>
            <CodeInput />
          </div>
        </div>
      </div>
      <button type="button" className={styles.btnStyle}>
        <div className={styles.btnText}>
          Submit Code
        </div>
      </button>
    </div>
  );
}

export default Main;
