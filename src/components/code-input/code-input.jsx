import React from 'react';
import Editor from '@monaco-editor/react';

function CodeInput() {
  return (
    <div
      style={{
        boxSizing: 'border-box',
        borderRadius: '10px',
        width: '100%',
        height: '100%',
        border: '3px solid #F7F7F7',
        background: '#1E1E1E',
        fontFamily: 'Montserrat, sans-serif',
        boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.25)',
        padding: '15px 20px',
        overflow: 'hidden',
      }}
    >
      <Editor
        defaultLanguage="cpp"
        automaticLayout={false}
        height="100%"
        width="100%"
        theme="vs-dark"
        value="test"
        options={{ selectOnLineNumbers: true }}
      />
    </div>
  );
}

export default CodeInput;
