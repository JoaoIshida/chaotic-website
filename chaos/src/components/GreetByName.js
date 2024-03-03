// src/components/Greeting.js

import React, { useEffect, useState } from 'react';

const Greeting = () => {
    const [message, setMessage] = useState("");

    // Variables
    let name = "Bob";
    name = name.toLowerCase();

    // If Statements
    useEffect(() => {
        if (name === "bob") {
            setMessage("Hi Bob! You have a cool name.");
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
    }, [name]);

    return (
        <div>
            {message}
        </div>
    ); // Return null because this component doesn't render anything
};

export default Greeting;
