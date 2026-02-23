"use client";

import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="text-[#b0b0b0] hover:text-[#ff6600] hover:bg-[#ff6600]/10"
      >
        <Sun size={20} />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="text-[#b0b0b0] hover:text-[#ff6600] hover:bg-[#ff6600]/10 transition-all duration-200"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </Button>
  );
};

export default ThemeToggle;
