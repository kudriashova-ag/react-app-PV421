import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import './Header.css';
import ThemeContext from '../../contexts/ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';


const Header = () => {
    const { theme } = useContext(ThemeContext);

    return (
      <header className={`theme-${theme}`}>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/todo">ToDo</NavLink>
          <NavLink to="/first">First</NavLink>
          <NavLink to="/register">Register</NavLink>
        </nav>

        <ThemeSwitcher />
      </header>
    );
}

export default Header;
