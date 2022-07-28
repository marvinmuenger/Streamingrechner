import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#70CEB9',
    },
    secondary: {
      main: '#F5F7F6',
      contrastText: "#111",
    },
  },
  typography: {
    fontSize: 12,
    fontFamily: 'Arial',
  },
  shape: {
    borderRadius: 10,
  },
  key: {
    color: "#cfe8fc"
  }
});