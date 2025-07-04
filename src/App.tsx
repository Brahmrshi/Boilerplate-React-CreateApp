import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import { ThemeProvider, CssBaseline, Button, Box } from '@mui/material';
import { lightTheme, darkTheme } from './theme';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  return (
    <ThemeProvider theme={mode === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      <Box className="App" textAlign="center" p={4}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Button
            variant="contained"
            onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          >
            Toggle Theme
          </Button>
        </header>
      </Box>
    </ThemeProvider>
  );
}

export default App;
