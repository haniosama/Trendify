"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="w-6 h-6 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded fixed right-1.5 bottom-1.5 rounded-full"
    >
      {darkMode ? "🌞" : "🌙"}
    </button>
  );
}
