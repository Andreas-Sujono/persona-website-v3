import React, { useContext, useEffect, useMemo, useState } from 'react';
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles';

interface ThemeContext {
  theme: 'dark' | 'light';
  bg: {
    primary: string;
    secondary: string;
    gradient: string;
  };
  text: {
    primary: string;
    secondary: string;
    highlight: string;
  };
  color: {
    success: string;
    warning: string;
    error: string;
  };
  switchTheme: () => void;
}

const lightTheme = {
  theme: 'light',
  primary: {
    // light: will be calculated from palette.primary.main,
    main: '#E21A6E',
    // dark: will be calculated from palette.primary.main,
    // contrastText: will be calculated to contrast with palette.primary.main
  },
  background: {
    default: '#ffffff',
    secondary: '#FAFAFA',
    gradient: 'linear-gradient(90.15deg, #E21A6E 0.68%, #6485F9 99.87%)',
  },
  secondary: {
    // light: '#0066ff',
    main: '#E21A6E',
    // dark: will be calculated from palette.secondary.main,
    // contrastText: '#ffcc00',
  },
  highlight: {
    main: '#E21A6E',
  },
  text: {
    primary: '#252525',
    secondary: '#a3a2a2',
  },
  success: {
    main: '#30c461',
  },
  error: {
    main: '#eb3f74',
  },
  warning: {
    main: '#d2b427',
  },
  // Used by `getContrastText()` to maximize the contrast between
  // the background and the text.
  contrastThreshold: 3,
  // Used by the functions below to shift a color's luminance by approximately
  // two indexes within its tonal palette.
  // E.g., shift from Red 500 to Red 300 or Red 700.
  tonalOffset: 0.2,
};

const darkTheme = {
  theme: 'dark',
  primary: {
    // light: will be calculated from palette.primary.main,
    main: '#E21A6E',
    // dark: will be calculated from palette.primary.main,
    // contrastText: will be calculated to contrast with palette.primary.main
  },
  background: {
    default: '#141A3E',
    secondary: '#1E2652',
    gradient: 'linear-gradient(90.15deg, #E21A6E 0.68%, #6485F9 99.87%)',
  },
  secondary: {
    // light: '#0066ff',
    main: '#E21A6E',
    // dark: will be calculated from palette.secondary.main,
    // contrastText: '#ffcc00',
  },
  highlight: {
    main: '#E21A6E',
  },
  text: {
    primary: '#ffffff',
    secondary: '#a3a2a2',
  },
  success: {
    main: '#30c461',
  },
  error: {
    main: '#eb3f74',
  },
  warning: {
    main: '#d2b427',
  },
  // Used by `getContrastText()` to maximize the contrast between
  // the background and the text.
  contrastThreshold: 3,
  // Used by the functions below to shift a color's luminance by approximately
  // two indexes within its tonal palette.
  // E.g., shift from Red 500 to Red 300 or Red 700.
  tonalOffset: 0.2,
};

const chosenTheme = lightTheme;

const defaultTheme: ThemeContext = {
  theme: chosenTheme === lightTheme ? 'light' : 'dark',
  bg: {
    primary: '',
    secondary: '',
    gradient: '',
  },
  text: {
    primary: '',
    secondary: '',
    highlight: '',
  },
  color: {
    success: '',
    warning: '',
    error: '',
  },
  switchTheme: () => null,
};

const muiTheme = createTheme({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontFamily: 'Roboto, sans-serif',
    fontSize: 16,
    htmlFontSize: 16,
    h1: {
      fontSize: 32,
    },
    h2: {
      fontSize: 28,
    },
    h3: {
      fontSize: 24,
    },
    body1: {
      fontSize: 16,
    },
    body2: {
      fontSize: 14,
    },
    button: {
      fontSize: 16,
    },
  },
  palette: chosenTheme,
});

const themeContext = React.createContext<ThemeContext>(defaultTheme);

export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [localTheme, setLocalTheme] = useState(chosenTheme);
  const themeValue = useMemo(() => {
    return {
      theme: localTheme.theme as 'dark' | 'light',
      bg: {
        primary: localTheme.background.default,
        secondary: localTheme.background.secondary,
        gradient: localTheme.background.gradient,
      },
      text: {
        primary: localTheme.text.primary,
        secondary: localTheme.text.secondary,
        highlight: localTheme.highlight.main,
      },
      color: {
        success: localTheme.success.main,
        warning: localTheme.warning.main,
        error: localTheme.error.main,
      },
      switchTheme: () => {
        if (themeValue.theme === 'light') {
          setLocalTheme(darkTheme);
          localStorage.setItem('theme', 'dark');
        } else {
          setLocalTheme(lightTheme);
          localStorage.setItem('theme', 'light');
        }
      },
    };
  }, [localTheme]);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      themeValue.switchTheme();
    }
  }, []);

  return (
    <MUIThemeProvider theme={muiTheme}>
      <themeContext.Provider value={themeValue}>
        {children}
      </themeContext.Provider>
    </MUIThemeProvider>
  );
};

const useTheme = (): ThemeContext => {
  return useContext(themeContext);
};
export default useTheme;
