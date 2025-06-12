"use client";

import { useState, useEffect } from "react";

export function useTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const savedTheme = localStorage.getItem("theme");
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const isDark = savedTheme ? savedTheme === "dark" : systemDark;

    setIsDarkMode(isDark);
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);

    const themeValue = newTheme ? "dark" : "light";
    localStorage.setItem("theme", themeValue);
    document.documentElement.setAttribute("data-theme", themeValue);
  };

  return { isDarkMode, toggleTheme, mounted };
}
