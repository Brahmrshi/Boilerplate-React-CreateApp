import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { createContext, useContext, useState } from 'react';

const commonPalette = {
  primary: {
    main: '#0057b7',
  },
  secondary: {
    main: '#ffb800',
  },
};

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    ...commonPalette,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    ...commonPalette,
  },
});

type ThemeMode = 'light' | 'dark';

const ThemeModeContext = createContext<{ mode: ThemeMode; toggleMode: () => void } | undefined>(
  undefined
);

export const ThemeModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>('light');
  const toggleMode = () => setMode((m) => (m === 'light' ? 'dark' : 'light'));
  return (
    <ThemeModeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export const useThemeMode = () => {
  const ctx = useContext(ThemeModeContext);
  if (!ctx) {
    throw new Error('useThemeMode must be used within ThemeModeProvider');
  }
  return ctx;
};
