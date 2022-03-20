import { createContext, useState } from "react";
type AuthUser = {
    'name': string,
    'email': string,
}

type Theme = 'light' | 'dark';
type AppContextType = {
    'theme': Theme,
    toggleTheme: () => void,
    user: AuthUser | null,
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
};


export const AppContext = createContext<AppContextType>({} as AppContextType);

export const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState<Theme>('dark');
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    const color = theme === 'light' ? '#333' : '#fff';
    const background = theme === 'light' ? '#fff' : '#333';

    document.body.style.color = color;
    document.body.style.background = background;

    const [user, setUser] = useState<AuthUser | null>(null);


    return <AppContext.Provider value={{ theme, toggleTheme, user, setUser }}>{children}</AppContext.Provider>
}
