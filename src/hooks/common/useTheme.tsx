import React, { useContext, useState } from 'react';
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles';

interface ThemeContext {
  bg: {
    primary: string;
    secondary: string;
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
}

const defaultTheme: ThemeContext = {
  bg: {
    primary: '',
    secondary: '',
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
};

const lightTheme = {
  primary: {
    // light: will be calculated from palette.primary.main,
    main: '#E21A6E',
    // dark: will be calculated from palette.primary.main,
    // contrastText: will be calculated to contrast with palette.primary.main
  },
  background: {
    default: '#ffffff',
    secondary: '#FAFAFA',
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
const chosenTheme = lightTheme;

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
  const [themeValue, setThemeValue] = useState<ThemeContext>({
    bg: {
      primary: chosenTheme.background.default,
      secondary: chosenTheme.background.secondary,
    },
    text: {
      primary: chosenTheme.text.primary,
      secondary: chosenTheme.text.secondary,
      highlight: chosenTheme.highlight.main,
    },
    color: {
      success: chosenTheme.success.main,
      warning: chosenTheme.warning.main,
      error: chosenTheme.error.main,
    },
  });
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
