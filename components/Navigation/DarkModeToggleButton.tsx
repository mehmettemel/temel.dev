import React from 'react';
import useDarkMode from '../../hooks/useDarkMode';

const DarkModeToggle = () => {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div className="center my-4">
      <input
        type="checkbox"
        defaultChecked={colorTheme === 'dark' ? false : true}
        id="dark-mode-toggle"
        aria-checked="true"
        className="toggle-checkbox"
        onClick={() => setTheme(colorTheme === 'dark' ? 'dark' : 'light')}
      />

      <label
        htmlFor="dark-mode-toggle"
        aria-label="Dark Mode Toggle Button"
        className="toggle"
      ></label>
    </div>
  );
};

export default DarkModeToggle;
