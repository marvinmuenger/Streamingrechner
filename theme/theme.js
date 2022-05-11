import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#7FD1AE',
    },
    secondary: {
      main: '#fff',
    },
  },
  typography: {
    fontSize: 12,
    fontFamily: 'Avenir',
  },
  shape: {
    borderRadius: 10,
  },
});