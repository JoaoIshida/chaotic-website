import { motion, useAnimation } from 'framer-motion';
import HelloWorld from '@/components/HelloChaos';
import { useState } from 'react';

const Name = () => {
    const [isFallingTextArea, setIsFallingTextArea] = useState(false);
    const [isFallingButton, setIsFallingButton] = useState(false);
    const [isFallingHelloWorld, setIsFallingHelloWorld] = useState(false);
    const [isShaking, setIsShaking] = useState(false);
    const controls = useAnimation();

    const startFalling = async () => {
        setIsShaking(true);
        await controls.start({
            x: [-5, 5, -5, 5, -5, 0],
            rotate: [0, -5, 0, 5, 0],
            transition: { duration: 0.5, ease: 'easeInOut', times: [0, 0.1, 0.3, 0.5, 0.7, 1] }
        });
        setIsShaking(false);
        setIsFallingTextArea(true);
        setTimeout(() => setIsFallingButton(true), 200);
        setTimeout(() => setIsFallingHelloWorld(true), 300);
    };

    return (
        <main>
            <motion.div
                className={`flex flex-row items-center justify-center ${isShaking ? 'shake' : ''}`}
                animate={controls}
                onAnimationComplete={() => setIsShaking(false)}
            >
                <motion.div
                    className={`border p-4 rounded-lg mr-4 ${isFallingTextArea ? 'falling' : ''}`}
                    animate={{ y: isFallingTextArea ? '50vh' : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                    <textarea
                        className="w-full h-48"
                        value={`// src/components/HelloWorld.js

import React from 'react';

const HelloWorld = () => {
    // Variables
    const H = "H";
    const e = "e";
    const l = "l";
    const o = "o";
    const space = " ";
    const C = "C";
    const c = "c";
    const h = "h";
    const a = "a";
    const s = "s";
    const K = "K";
    const exclamation_mark = "!";
    const newline = "\\n";

    // Rendering the message
    return (
        <div>
            {H}
            {e}
            {l}
            {l}
            {o}
            {space}
            {C}
            {h}
            {a}
            {o}
            {s}
            {H}
            {a}
            {c}
            {K}
            {s}
            {exclamation_mark}
            {newline}
        </div>
    );
};

export default HelloWorld;


`}
                        readOnly
                        onChange={(e) => setCode(e.target.value)}
                    />
                </motion.div>
                <motion.button
                    onClick={startFalling}
                    className={`border p-4 rounded-lg mr-4 ${isFallingButton ? 'falling' : ''}`}
                    animate={{ y: isFallingButton ? '65vh' : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                    earthquake
                </motion.button>
                <motion.div
                    className={`border p-4 rounded-lg ${isFallingHelloWorld ? 'falling' : ''}`}
                    animate={{ y: isFallingHelloWorld ? '65vh' : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                    <HelloWorld />
                </motion.div>
            </motion.div>
        </main>
    );
};

export default Name;
