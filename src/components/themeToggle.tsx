"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { MoonIcon, SunIcon } from "lucide-react";

export function ThemeToggle() {
  const [pageTheme, setPageTheme] = useState<string | null>();
  const { setTheme } = useTheme();

  useEffect(() => {
    const selectedTheme = window.localStorage.getItem("theme");
    setPageTheme(selectedTheme);
  }, []);

  function handleTheme() {
    if (!pageTheme) {
      setTheme("dark");
      setPageTheme("dark");
    } else {
      switch (pageTheme) {
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
