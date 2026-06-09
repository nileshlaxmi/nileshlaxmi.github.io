import { useTheme } from '../hooks/useTheme.jsx';

export default function ThemeToggle() {
  const { dark, toggle } = useTheme();

  return (
    <button
      type="button"
      className="btn"
      title="Toggle theme"
      aria-pressed={dark}
      aria-label="Toggle theme"
      onClick={toggle}
    >
      {dark ? '☀️' : '🌙'}
    </button>
  );
}
