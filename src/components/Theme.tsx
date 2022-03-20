import { useContext } from 'react';
import { AppContext } from './context/AppContext';

export const Theme = () => {
    const {theme, toggleTheme } = useContext(AppContext);
    return(
        <button onClick={toggleTheme}>Switch to {theme === 'light' ? 'dark' : 'light'}</button>
    )
}