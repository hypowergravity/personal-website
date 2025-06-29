import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState("light");

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  // Effect to apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setTheme(savedTheme);
  }, []);

  // Save theme to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, toggleTheme };
};
