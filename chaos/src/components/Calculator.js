import React, { useState } from 'react';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        setInput(input + value);
    };

    const handleClear = () => {
        setInput('');
        setResult('');
    };

    const handleCalculate = () => {
        setResult('Hello, World!');
    };

    return (
        <div className="p-4 border rounded-lg">
            <div>
                <input
                    type="text"
                    value={input}
                    readOnly
                    placeholder="Enter calculation"
                    className="w-full p-2 border rounded-md"
                />
            </div>
            <div className="grid grid-cols-4 gap-2 mt-2">
                <button onClick={() => handleButtonClick('1')} className="p-2 border rounded-md">1</button>
                <button onClick={() => handleButtonClick('2')} className="p-2 border rounded-md">2</button>
                <button onClick={() => handleButtonClick('3')} className="p-2 border rounded-md">3</button>
                <button onClick={() => handleButtonClick('+')} className="p-2 border rounded-md">+</button>

                <button onClick={() => handleButtonClick('4')} className="p-2 border rounded-md">4</button>
                <button onClick={() => handleButtonClick('5')} className="p-2 border rounded-md">5</button>
                <button onClick={() => handleButtonClick('6')} className="p-2 border rounded-md">6</button>
                <button onClick={() => handleButtonClick('-')} className="p-2 border rounded-md">-</button>

                <button onClick={() => handleButtonClick('7')} className="p-2 border rounded-md">7</button>
                <button onClick={() => handleButtonClick('8')} className="p-2 border rounded-md">8</button>
                <button onClick={() => handleButtonClick('9')} className="p-2 border rounded-md">9</button>
                <button onClick={() => handleButtonClick('*')} className="p-2 border rounded-md">*</button>

                <button onClick={() => handleButtonClick('0')} className="p-2 border rounded-md col-span-2">0</button>
                <button onClick={() => handleButtonClick('.')} className="p-2 border rounded-md">.</button>
                <button onClick={handleClear} className="p-2 border rounded-md">Clear</button>
                <button onClick={handleCalculate} className="p-2 border rounded-md">=</button>
            </div>
            Result:
            <div className="mt-4 font-bold"> {result}</div>
        </div>
    );
};

export default Calculator;
