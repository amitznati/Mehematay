import {ReactNode} from 'react';
import {createTheme, ThemeProvider } from '@mui/material';

interface MaterialThemeProviderProps {
    children?: ReactNode
    defaultTheme: any
    // any props that come into the component
}
export default function MaterialThemeProvider({
  children,
  defaultTheme
}: MaterialThemeProviderProps): JSX.Element {
  const theme = createTheme({
    palette: {
      primary: {
        main: defaultTheme.colors.primary,
        light: defaultTheme.colors.primaryLight,
        dark: defaultTheme.colors.primaryDark
      },
      secondary: {
        main: defaultTheme.colors.secondary,
        light: defaultTheme.colors.secondaryLight,
        dark: defaultTheme.colors.secondaryDark
      }
    },
    direction: defaultTheme.direction,
    typography: {
      htmlFontSize: 10,
      fontFamily: defaultTheme.fontFamily.join(', '),
      fontSize: 20
    }
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
