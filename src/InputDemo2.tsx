import React, { useEffect, useRef, useState } from 'react';

export function InputDemo2() {
    const [activeInput, setActiveInput] = useState(1);
    const [input, setInput] = useState<HTMLInputElement | null>(null);
    const lastInputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        console.log("### useEffect, input", input)
        // 下一个渲染周期，确保能拿到新的ref
        const timeoutId = setTimeout(() => {
            const node = input;
            const lastNode = lastInputRef.current;
            console.log("### lastNode", lastNode);
            // 保存旧的ref到lastInputRef
            lastInputRef.current = input;

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

        return () => clearTimeout(timeoutId);
    }, [input]);

    return (
        <div style={{ padding: 20 }}>
            <div style={{ marginBottom: 10 }}>
                <input
                    data-input-id="Input-1"
                    ref={(ref) => activeInput === 1 ? setInput(ref) : null}
                    placeholder="Input 1"
                />
                {' '}
                <input
                    data-input-id="Input-2"
                    ref={(ref) => activeInput === 2 ? setInput(ref) : null}
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
