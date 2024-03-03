import React, { useState } from 'react';
import GreetByName from "../components/GreetByName";



export function Greetings() {
    const [code, setCode] = useState("");

    const copyCodeToClipboard = () => {
        navigator.clipboard.writeText(code);
    };

    return (
        <div>
            <h1 className='text-3xl font-bond text-black'>Title: Greetings My Friend</h1>
            <div className="flex flex-row">
                <div className="border border-black p-4 rounded-lg">
                    <textarea
                        className="w-full h-48"
                        value={`// src/components/Greeting.js

import React from 'react';

export function Greeting() {
    // Variables
    let name = "Bob";
    name = name.toLowerCase();

    // If Statements
    if (name === "bob") {
        console.log("Hi Bob! You have a cool name.");
    } else {
        if (name === "joe") {
            console.log("Hi Joe! You have a cool name.");
        } else {
            if (name === "billy") {
                console.log("Hi Billy! You have a cool name.");
            } else {
                if (name === "john") {
                    console.log("Hi John! You have a cool name.");
                } else {
                    if (name === "tom") {
                        console.log("Hi Tom! You have a cool name.");
                    } else {
                        if (name === "bill") {
                            console.log("Hi Bill! You have a cool name.");
                        } else {
                            if (name === "fred") {
                                console.log("Hi Fred! You have a cool name.");
                            } else {
                                if (name === "ryan") {
                                    console.log("Hi Ryan! You have a cool name.");
                                } else {
                                    console.log("You have a girl's name, I don't want your cooties.");
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return null; // Return null because this component doesn't render anything
}

export default Greeting;

`}
                        readOnly
                        onChange={(e) => setCode(e.target.value)}
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4" onClick={copyCodeToClipboard}>
                        Copy to Clipboard
                    </button>
                </div>
                <div className="border p-4 rounded-lg mb-4">
                    <GreetByName />
                </div>
            </div>
        </div>
    );
}
