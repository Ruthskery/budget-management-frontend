'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../context/ThemeContext';

function ToggleSwitch() {
  const { darkMode, setDarkMode } = useDarkMode();

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
    >
      {darkMode ? <Moon size={20} className="text-yellow-400" /> : <Sun size={20} className="text-yellow-500" />}
    </button>
  );
}

export default ToggleSwitch;
