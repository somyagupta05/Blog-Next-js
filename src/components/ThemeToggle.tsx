"use client"; 
import { FaMoon } from "react-icons/fa";
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };


  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('bg-black', 'text-white');
      document.body.classList.remove('bg-white', 'text-black');
    } else {
      document.body.classList.add('bg-white', 'text-black');
      document.body.classList.remove('bg-black', 'text-white');
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded transition duration-300 border border-0 border-rounded${
        isDarkMode ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-200 text-black hover:bg-gray-300'
      }`}
    >
     <FaMoon />
    </button>
  );
}
