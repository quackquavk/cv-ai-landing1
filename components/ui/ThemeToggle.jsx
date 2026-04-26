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
        className="text-[--ds-raw-slate-body] hover:text-[--ds-raw-orange-500] hover:bg-[--ds-raw-orange-500]/10"
      >
        <Sun size={20} />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="text-[--ds-raw-slate-body] hover:text-[--ds-raw-orange-500] hover:bg-[--ds-raw-orange-500]/10 transition-all duration-200"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </Button>
  );
};

export default ThemeToggle;
