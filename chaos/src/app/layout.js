"use client";
import { useState, useEffect } from 'react';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [partyMode, setPartyMode] = useState(false);
  const [blinkBackground, setBlinkBackground] = useState(false);
  const [blinkText, setBlinkText] = useState(false);

  useEffect(() => {
    let blinkBackgroundInterval;
    let blinkTextInterval;

    if (partyMode) {
      // Blink background colors
      blinkBackgroundInterval = setInterval(() => {
        setBlinkBackground((prev) => !prev);
      }, 1000);

      // Blink text colors
      blinkTextInterval = setInterval(() => {
        setBlinkText((prev) => !prev);
      }, 500);
    }

    return () => {
      clearInterval(blinkBackgroundInterval);
      clearInterval(blinkTextInterval);
    };
  }, [partyMode]);

  const togglePartyMode = () => {
    setPartyMode((prev) => !prev);
  };

  return (
    <html lang="en">
      <head>
        <style>{`
          body {
            animation: ${blinkBackground ? 'blinkBackground 1s infinite alternate' : 'none'};
          }

          @keyframes blinkBackground {
            0% {
              background-color: blue;
            }
            50% {
              background-color: green;
            }
            100% {
              background-color: blue;
            }
          }

          .blink {
            animation: ${blinkText ? 'blinkText 0.5s infinite alternate' : 'none'};
          }

          @keyframes blinkText {
            0% {
              color: yellow;
            }
            50% {
              color: red;
            }
            100% {
              color: yellow;
            }
          }
        `}</style>
      </head>
      <body className={inter.className}>
        <button onClick={togglePartyMode} className='border bg-slate-600 text-white p-2 hover:text-white hover:bg-slate-800 shadow-lg'>🪩Party mode🎉</button>
        <button className='ml-[2rem] right-0 border bg-green-500 text-white p-2 hover:text-white hover:translate-x-[20rem] shadow-lg'> 🤑Free money💵</button>
        {children}

      </body>
    </html>
  );
}
