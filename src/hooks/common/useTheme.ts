import createTheme from '@mui/material/styles/createTheme'

interface Theme {
  bg: {
    primary: string
    secondary: string
  }
  text: {
    primary: string
    secondary: string
  }
  color: {
    success: string
    warning: string
    error: string
  }
}

const theme = createTheme({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontFamily: 'Raleway, Arial',
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
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ff4400',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    text: {
      primary: '#2a2a2a',
      secondary: '#eeeeee',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
})

export const ThemeProvider = () => {}
