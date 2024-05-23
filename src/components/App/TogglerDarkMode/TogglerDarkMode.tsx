import './TogglerDarkMode.scss';

import { Sun, Moon } from 'react-feather';

interface TogglerDarkModeProps {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

function TogglerDarkMode({ isDark, setIsDark }: TogglerDarkModeProps) {
  return (
    <button
      className={isDark ? 'App-button' : 'App-button-dark'}
      type="button"
      onClick={() => {
        setIsDark(!isDark);
      }}
    >
      {isDark ? <Sun /> : <Moon />}
    </button>
  );
}

export default TogglerDarkMode;
