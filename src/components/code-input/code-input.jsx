import React from 'react';
import Editor from '@monaco-editor/react';

function CodeInput() {
  return (
    <Editor
      width="100%"
      defaultLanguage="cpp"
      theme="vs-dark"
      value="test"
      options={{ selectOnLineNumbers: true }}
    />
  );
}

export default CodeInput;
