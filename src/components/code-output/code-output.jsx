import React, { useEffect } from 'react';
import Editor from '@monaco-editor/react';

function CodeOutput() {
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
        overflow: 'visible',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Editor
        defaultLanguage="cpp"
        automaticLayout={false}
        height="100%"
        width="100%"
        theme="vs-dark"
        options={{
          selectOnLineNumbers: true,
          readOnly: true,
        }}
      />
    </div>
  );
}

export default CodeOutput;
