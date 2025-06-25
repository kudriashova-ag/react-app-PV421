import React, { useContext } from 'react';
import ThemeContext from '../../contexts/ThemeContext';

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);


    return (
        <div>
            <button onClick={toggleTheme}>{theme}</button>
        </div>
    );
}

export default ThemeSwitcher;
