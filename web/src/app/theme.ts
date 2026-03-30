'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6366f1',
    },
    secondary: {
      main: '#ec4899',
    },
    background: {
      default: '#f8fafc',
    },
  },
  typography: {
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

export default theme;
