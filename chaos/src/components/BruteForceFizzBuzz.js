import React, { useState, useEffect } from 'react';

function FizzBuzz() {
    const [output, setOutput] = useState('');

    useEffect(() => {
        let result = '';
        for (let i = 0; i < 100; i++) {
            if (i === 3 || i === 6 || i === 9 || i === 12 || i === 18 || i === 21 || i === 24 || i === 27 || i === 30 || i === 33 || i === 36 || i === 39 || i === 42 || i === 48 || i === 51 || i === 54 || i === 57 || i === 60 || i === 63 || i === 66 || i === 69 || i === 72 || i === 75 || i === 78 || i === 81 || i === 84 || i === 87 || i === 90 || i === 93 || i === 96 || i === 99) {
                result += 'Fizz ';
            } else if (i === 5 || i === 10 || i === 20 || i === 25 || i === 35 || i === 40 || i === 45 || i === 50 || i === 55 || i === 60 || i === 65 || i === 70 || i === 75 || i === 80 || i === 85 || i === 90 || i === 95 || i === 100) {
                result += 'Buzz ';
            } else if (i === 15 || i === 30 || i === 45 || i === 60 || i === 75 || i === 90) {
                result += 'FizzBuzz ';
            } else {
                result += i + ' ';
            }
        }
        setOutput(result);
    }, []);

    return (
        <div>{output}</div>
    );
}

export default FizzBuzz;
