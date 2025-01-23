"use client";

import { useState } from "react";
import { useTheme } from "next-themes";

import { MoonIcon, SunIcon } from "lucide-react";

export function ThemeToggle() {
  const selectedTheme = localStorage.getItem("theme");

  const [pageTheme, setPageTheme] = useState(selectedTheme);
  const { setTheme } = useTheme();

  function handleTheme() {
    if (!pageTheme) {
      setTheme("dark");
      setPageTheme("dark");
    } else {
      switch (selectedTheme) {
        case "dark":
          setTheme("light");
          setPageTheme("light");
          break;

        case "light":
          setTheme("dark");
          setPageTheme("dark");
          break;

        default:
          break;
      }
    }
  }

  return (
    <button onClick={handleTheme}>
      {pageTheme === "dark" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
