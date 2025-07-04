import { createTheme } from '@mui/material/styles';

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
