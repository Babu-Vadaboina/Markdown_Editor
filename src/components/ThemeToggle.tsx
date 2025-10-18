import { useState, useEffect } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    try {
      const stored = localStorage.getItem("theme");
      if (stored) return stored === "dark";
      return (
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      );
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {}
  }, [isDark]);

  return (
    <button
      className="theme-toggle-button"
      onClick={() => setIsDark((d) => !d)}
      aria-label="Toggle dark mode"
      aria-pressed={isDark}
    >
      {isDark ? "🌑 Dark" : "🌕 Light"}
    </button>
  );
}

export default ThemeToggle;
