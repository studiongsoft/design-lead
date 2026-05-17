'use client';

import * as React from 'react';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { CreateAppThemeOptions } from './createAppTheme';
import { createAppTheme } from './createAppTheme';
import { rtlCache } from './rtlCache';

export interface AppThemeProviderProps {
  children: React.ReactNode;
  /** BCP 47 language tag for the RTL root (default: Hebrew). */
  lang?: string;
  /** Passed to createAppTheme for brand tokens / component overrides. */
  themeOptions?: CreateAppThemeOptions;
}

/**
 * Root wrapper: RTL + Emotion RTL plugin + light/dark color schemes.
 */
export function AppThemeProvider({
  children,
  lang = 'he',
  themeOptions,
}: AppThemeProviderProps) {
  const theme = React.useMemo(() => createAppTheme(themeOptions), [themeOptions]);

  return (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={theme} defaultMode="light">
        <div dir="rtl" lang={lang}>
          <CssBaseline />
          {children}
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}
