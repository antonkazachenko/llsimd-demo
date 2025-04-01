import React from 'react';
import Editor from '@monaco-editor/react';
import PropTypes from 'prop-types';
import styles from './code-input.module.css';

function CodeInput({ code, setCode, error }) {
  const handleEditorChange = (value) => {
    setCode(value);
  };

  return (
    <div className={`${styles.inputStyle} ${error ? styles.error : ''}`}>
      <Editor
        defaultLanguage="cpp"
        automaticLayout
        height="100%"
        width="100%"
        theme="vs-dark"
        value={code}
        onChange={handleEditorChange}
        options={{ selectOnLineNumbers: true }}
      />
    </div>
  );
}

CodeInput.propTypes = {
  code: PropTypes.string.isRequired,
  setCode: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
};

export default CodeInput;
