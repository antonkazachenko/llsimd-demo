import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Editor from '@monaco-editor/react';
import styles from './code-output.module.css';
import { ReactComponent as Spinner } from '../../assets/images/spinner.svg';

function CodeOutput({ value, error, loading }) {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .monaco-editor .monaco-editor-hover,
      .monaco-editor .suggest-widget,
      .monaco-editor .overflowingContentWidgets {
        z-index: 9999 !important;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div className={`${styles.outputStyle} ${error ? styles.error : ''}`}>
      {loading && (
        <div className={styles.spinner}>
          <Spinner />
        </div>
      )}
      <Editor
        defaultLanguage="cpp"
        automaticLayout
        height="100%"
        width="100%"
        theme="vs-dark"
        value={value}
        options={{ selectOnLineNumbers: true, readOnly: true }}
      />
    </div>
  );
}

CodeOutput.propTypes = {
  value: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default CodeOutput;
