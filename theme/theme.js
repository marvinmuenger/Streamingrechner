import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#70CEB9',
    },
    secondary: {
      main: '#fff',
    },
  },
  typography: {
    fontSize: 14,
  },
  shape: {
    borderRadius: 10,
  },
});