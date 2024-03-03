import React, { useState } from 'react';
import Calculator from '@/components/Calculator';


export function Calc() {
    const [code, setCode] = useState("");

    const copyCodeToClipboard = () => {
        navigator.clipboard.writeText(code);
    };

    return (
        <div ><h1 className='text-3xl font-bond text-black'>Title: NASA Calculator</h1>
            <div className="flex flex-row">

                <div className="border border-black p-4 rounded-lg [w-400rem]">
                    <textarea
                        className="w-[400rem] h-48"
                        value={`import React, { useState } from 'react';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleCalculate = () => {
        setResult('Hello, World!');
    };

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Enter calculation"
            />
            <button onClick={handleCalculate}>Calculate</button>
            <div>Result: {result}</div>
        </div>
    );
};

export default Calculator;

`}
                        readOnly
                        onChange={(e) => setCode(e.target.value)}
                    />

                </div>
                <div className="border p-4 rounded-lg mb-4">
                    <Calculator />
                </div>
            </div>
        </div >
    );
}
