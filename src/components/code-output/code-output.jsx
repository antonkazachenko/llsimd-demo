import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Editor from '@monaco-editor/react';
import styles from './code-output.module.css';

function CodeOutput({ value, error }) {
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
};

export default CodeOutput;
