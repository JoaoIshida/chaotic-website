"use client";
import { useState, useEffect } from 'react';
import Terminal from "@/components/Terminal";
import Greetings from "@/ChaosLessons/HellChaos";
import Name from "@/ChaosLessons/Name";
import Image from "next/image";

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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to the Chaos Lessons</h1>
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
      </select>
      {selectedOption === "name" && <Name />}
      {selectedOption === "greetings" && <Greetings />}
    </main>
  );
}
