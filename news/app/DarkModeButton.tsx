"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

import React from "react";

const DarkModeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  // const toggleTheme = () => {
  //   if (currentTheme === "dark") {
  //     setTheme("light");
  //   } else {
  //     setTheme("dark");
  //   }
  // }

  return (
    <div className="flex items-center justify-center flex-col mr-2">
      {currentTheme === "dark" ? (
        <SunIcon className="w-6 h-6" onClick={() => setTheme("light")} />
      ) : (
        <MoonIcon className="w-6 h-6" onClick={() => setTheme("dark")} />
      )}
    </div>
  );
};

export default DarkModeButton;
