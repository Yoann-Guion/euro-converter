import './TogglerDarkMode.scss';
import { Sun, Moon } from 'react-feather';

interface TogglerDarkModeProps {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

function TogglerDarkMode({ isDark, setIsDark }: TogglerDarkModeProps) {
  return (
    <button
      className={`theme-toggle ${
        isDark ? 'theme-toggle--dark' : 'theme-toggle--light'
      }`}
      type="button"
      onClick={() => setIsDark(!isDark)}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? <Sun /> : <Moon />}
    </button>
  );
}

export default TogglerDarkMode;
