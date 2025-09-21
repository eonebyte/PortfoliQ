import { createContext, useContext, useEffect, useState } from 'react';

// context + initial state
const ThemeProviderContext = createContext({
    theme: 'system',
    setTheme: () => null,
    isDark: false,
    toggleTheme: () => null,
});

export function ThemeProvider({
    children,
    defaultTheme = 'system',
    storageKey = 'vite-ui-theme',
    ...props
}) {
    // --- PERUBAHAN 1 ---
    // Inisialisasi state dengan nilai default yang aman untuk SSR.
    // Jangan sentuh localStorage di sini.
    const [theme, setTheme] = useState(defaultTheme);
    const [isDark, setIsDark] = useState(false);

    // --- PERUBAHAN 2 ---
    // useEffect ini HANYA akan berjalan di sisi klien setelah render pertama.
    // Ini adalah tempat yang aman untuk mengakses localStorage.
    useEffect(() => {
        const storedTheme = localStorage.getItem(storageKey) || defaultTheme;
        setTheme(storedTheme);
    }, []); // Array dependensi kosong [] memastikan ini hanya berjalan sekali saat mount di klien.


    // useEffect ini (yang sudah ada sebelumnya) aman karena useEffect tidak berjalan di server.
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');

        if (theme === 'system') {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
                ? 'dark'
                : 'light';
            root.classList.add(systemTheme);
            setIsDark(systemTheme === 'dark');
            return;
        }

        root.classList.add(theme);
        setIsDark(theme === 'dark');
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = isDark ? 'light' : 'dark';
        localStorage.setItem(storageKey, newTheme);
        setTheme(newTheme);
    };

    const value = {
        theme,
        setTheme: (newTheme) => {
            localStorage.setItem(storageKey, newTheme);
            setTheme(newTheme);
        },
        isDark,
        toggleTheme,
    };

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};