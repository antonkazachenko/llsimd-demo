import React, { useState } from 'react';
import styles from './main.module.css';
import CodeInput from '../code-input/code-input';
import CodeOutput from '../code-output/code-output';

function Main() {
  const [code, setCode] = useState('');
  const [llvmIR, setLLVMIR] = useState('');
  const [errorState, setError] = useState(false);
  const [transformedOutput, setTransformedOutput] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:5000/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });
      const data = await response.json();
      setLLVMIR(data.llvmIR);
      setTransformedOutput(data.transformedOutput);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.codeBlock}>
        <div className={styles.inputBlock}>
          <div className={styles.codeTitle}>Code Input</div>
          <CodeInput code={code} setCode={setCode} error={errorState} />
        </div>
        <div className={styles.outputBlock}>
          <div className={styles.firstOutput}>
            <div className={styles.codeTitle}>LLVM IR Viewer</div>
            <CodeOutput value={llvmIR} error={errorState} />
          </div>
          <div className={styles.secondOutput}>
            <div className={styles.codeTitle}>Transformed Output</div>
            <CodeOutput value={transformedOutput} error={errorState} />
          </div>
        </div>
      </div>
      <button type="button" className={styles.btnStyle} onClick={handleSubmit}>
        <div className={styles.btnText}>Submit Code</div>
      </button>
    </div>
  );
}

export default Main;
