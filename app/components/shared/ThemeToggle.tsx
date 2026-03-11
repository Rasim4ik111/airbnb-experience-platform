"use client";

import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={`border rounded-xl p-2 ${theme === "light" ? "text-black bg-white" : "text-white bg-black"}`}
      onClick={toggleTheme}
    >
      {theme}
    </button>
  );
}
