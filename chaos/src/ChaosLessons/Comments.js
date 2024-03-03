import React, { useState } from 'react';
import { Sum } from '@/components/CommentVomit';


export function Comments() {
    const [code, setCode] = useState("");

    const copyCodeToClipboard = () => {
        navigator.clipboard.writeText(code);
    };

    return (
        <div ><h1 className='text-3xl font-bond text-black'>Title: a little comment to help</h1>
            <div className="flex flex-row">

                <div className="border border-black p-4 rounded-lg [w-400rem]">
                    <textarea
                        className="w-[400rem] h-48"
                        value={`
// This function serves the purpose of performing addition on two integer parameters, namely "num1" and "num2".
// It encapsulates the fundamental arithmetic operation of addition, whereby the value of "num1" is added to the value of "num2".
// The function employs a straightforward algorithm to execute this operation efficiently, ensuring reliable and accurate results.
// It follows the basic principles of integer addition, adhering to the conventions and rules established in arithmetic operations.
// Upon execution, the function computes the sum of "num1" and "num2", representing their combined numerical value.
// It does not alter the values of the parameters passed to it but rather utilizes them solely for computation.
// The output of the function is the result of the addition operation, which is returned to the caller.
// This output represents the mathematical sum of the input integers and is of integer data type, preserving numerical integrity.
// The function assumes the input parameters are valid integers and does not perform type checking or validation.
// It operates independently of any external state or context, relying solely on the input parameters for computation.
// This function is designed for general-purpose use cases where addition of two integers is required, offering a convenient and reliable solution.
// Its simplicity and efficiency make it suitable for integration into various software systems and applications.
// Overall, this function provides a straightforward and robust implementation of integer addition, facilitating numerical calculations with ease.
function add(num1, num2) {
    return num1 + num2;
}
// This program begins by checking whether it is being executed directly or imported as a module.
// This initial conditional check ensures proper behavior and execution flow depending on how the program is invoked.
// Following this check, the program proceeds to perform an arithmetic operation, specifically the addition of two integers: 5 and 7.
// This operation utilizes the "add" function previously defined, encapsulating the addition logic and promoting code reusability.
// By invoking the "add" function with the parameters 5 and 7, the program calculates their sum and obtains the result.
// The resulting value represents the outcome of the addition operation, showcasing the functionality of the "add" function.
// Subsequently, the program prints out this computed sum, displaying it to the user for visibility and verification purposes.
// Printing the result enhances user experience by providing immediate feedback on the outcome of the arithmetic operation.
// This output serves as a demonstration of the program's functionality and the correctness of the addition operation.
// The program's structure and design facilitate clarity and maintainability, promoting good coding practices.
// Overall, this program exemplifies a simple yet effective demonstration of conditional execution and arithmetic computation in JavaScript,
// showcasing the use of functions for encapsulating logic and enhancing code organization and readability.

export function Sum() {
    function add(num1, num2) {
        return num1 + num2;
    }

    return (
        <div>
            {add(5, 7)}
        </div>
    );
}
`}
                        readOnly
                        onChange={(e) => setCode(e.target.value)}
                    />

                </div>
                <div className="border p-4 rounded-lg mb-4">
                    <Sum />
                </div>
            </div>
            );
}
