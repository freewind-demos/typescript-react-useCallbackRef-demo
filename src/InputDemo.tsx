import React, { useState } from 'react';
import { useCallbackRef } from 'use-callback-ref';

export function InputDemo() {
  const [activeInput, setActiveInput] = useState(1);

  const inputRef = useCallbackRef<HTMLInputElement>(null, (node, lastNode) => {
    console.log('Ref changed:', {
      from: lastNode?.dataset.inputId,
      to: node?.dataset.inputId
    });

    if (lastNode) {
      lastNode.style.border = '1px solid #ccc';
    }
    if (node) {
      node.style.border = '2px solid green';
      node.focus();
    }
  });

  return (
    <div style={{ padding: 20 }}>
      <div style={{ marginBottom: 10 }}>
        <input
          data-input-id="Input-1"
          ref={activeInput === 1 ? inputRef : null}
          placeholder="Input 1"
        />
        {' '}
        <input
          data-input-id="Input-2"
          ref={activeInput === 2 ? inputRef : null}
          placeholder="Input 2"
        />
      </div>
      <button onClick={() => setActiveInput(n => n === 1 ? 2 : 1)}>
        Switch to Input {activeInput === 1 ? 2 : 1}
      </button>
      <div>Current ref on: Input-{activeInput}</div>
    </div>
  );
}
