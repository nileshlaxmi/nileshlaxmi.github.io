import { useTheme } from "../../../hooks/useTheme";

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      id="toggleTheme"
      className="btn"
      onClick={toggleTheme}
      title="Toggle theme"
      aria-pressed={isDark}
      aria-label="Toggle theme"
      style={{marginRight: '2px'}}
    >
      {isDark ? (
        <span className="theme-icon">☀️</span>
      ) : (
        <span className="theme-icon">🌙</span>
      )}
    </button>
  );
}
