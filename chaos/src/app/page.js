"use client";
import { useState, useEffect } from 'react';
import { Greetings } from "@/ChaosLessons/HellChaos";
import Name from "@/ChaosLessons/Name";
import { FizzBuzzz } from "@/ChaosLessons/FizzBuzz"; // Import FizzBuzzz component
import { Comments } from "@/ChaosLessons/Comments";
import { Calc } from "@/ChaosLessons/Calc";
import { Sum } from "@/components/CommentVomit";
import FizzBuzz from '@/components/BruteForceFizzBuzz';

export default function Home() {
  const [selectedOption, setSelectedOption] = useState("");
  const [showPrivacySettings, setShowPrivacySettings] = useState(false);

  // Function to reset privacy and settings checkbox after 1 second
  useEffect(() => {
    let timeout;
    if (showPrivacySettings) {
      timeout = setTimeout(() => setShowPrivacySettings(false), 1000);
    }
    return () => clearTimeout(timeout);
  }, [showPrivacySettings]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setShowPrivacySettings(false); // Reset checkbox when selecting an option
  };

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${selectedOption === "calculator" ? 'blink-bg' : ''}`}>
      <h1 className={`blink text-3xl font-bold ${selectedOption === "calculator" ? 'blink-text' : ''}`}>Welcome to the Chaos Lessons</h1>
      <div className='flex flex-row justify-end'>
        <input
          type="checkbox"
          checked={showPrivacySettings}
          onChange={() => setShowPrivacySettings(!showPrivacySettings)}
          className="mb-4"
        />
        <p className='pl-2'>
          I accept to the
          <span
            className='cursor-pointer hover:text-blue-500 hover:underline pl-2'
          >
            privacy and settings
          </span>
        </p>
      </div>
      <div className='font-bold'>Choose a Lesson to start:</div>
      <select
        value={selectedOption}
        onChange={(e) => handleOptionChange(e.target.value)}
        className="mb-4"
      >
        <option value="">Select</option>
        <option value="name">Name</option>
        <option value="greetings">Greetings</option>
        <option value="fizzbuzz">FizzBuzzz</option>
        <option value="comments">Comments</option>
        <option value="calculator">Calculator</option>
      </select>
      {selectedOption === "name" && <Name />}
      {selectedOption === "greetings" && <Greetings />}
      {selectedOption === "fizzbuzz" && (<div>
        <h1 className='text-3xl font-bond text-black'>Title: FizzBuzz optimal O(n)</h1>
        <div className="flex flex-row">

          <div className="border border-black p-4 rounded-lg">
            <textarea
              className="w-[40rem] h-48"
              value={`function fizzbuzz() {
    for (let i = 0; i < 100; i++) {
        if (i === 3 || i === 6 || i === 9 || i === 12 || i === 18 || i === 21 || i === 24 || i === 27 || i === 30 || i === 33 || i === 36 || i === 39 || i === 42 || i === 48 || i === 51 || i === 54 || i === 57 || i === 60 || i === 63 || i === 66 || i === 69 || i === 72 || i === 75 || i === 78 || i === 81 || i === 84 || i === 87 || i === 90 || i === 93 || i === 96 || i === 99) {
            process.stdout.write("Fizz ");
        } else if (i === 5 || i === 10 || i === 20 || i === 25 || i === 35 || i === 40 || i === 45 || i === 50 || i === 55 || i === 60 || i === 65 || i === 70 || i === 75 || i === 80 || i === 85 || i === 90 || i === 95 || i === 100) {
            process.stdout.write("Buzz ");
        } else if (i === 15 || i === 30 || i === 45 || i === 60 || i === 75 || i === 90) {
            process.stdout.write("FizzBuzz ");
        } else {
            process.stdout.write(i + " ");
        }
    }
}

fizzbuzz();


`}
              readOnly
              onChange={(e) => setCode(e.target.value)}
            />

          </div>
          <div className="border p-4 rounded-lg mb-4">
            <FizzBuzz />
          </div>
        </div>
      </div>)}
      {selectedOption === "comments" && (<div ><h1 className='text-3xl font-bond text-black'>Title: a little comment to help</h1>
        <div className="flex flex-row">

          <div className="border border-black p-4 rounded-lg [w-400rem]">
            <textarea
              className="h-48 w-[40rem]"
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
      </div >)}
      {selectedOption === "calculator" && <Calc />}
    </main>
  );
}
