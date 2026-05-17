import { createTheme, type Theme } from '@mui/material/styles';

export interface CreateAppThemeOptions {
  /** Extend or override the default RTL theme. */
  theme?: Parameters<typeof createTheme>[0];
}

/**
 * Application theme: RTL + light/dark color schemes.
 */
export function createAppTheme(options: CreateAppThemeOptions = {}): Theme {
  return createTheme({
    direction: 'rtl',
    cssVariables: true,
    colorSchemes: {
      light: true,
      dark: true,
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    ...options.theme,
  });
}
