'use client';

import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import { useColorScheme } from '@mui/material/styles';

/**
 * Toggle for verifying light/dark mode (design checklist).
 */
export function DesignModeToggle() {
  const { mode, setMode } = useColorScheme();
  const isDark = mode === 'dark';

  const handleChange = (_: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    setMode(checked ? 'dark' : 'light');
  };

  return (
    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
      <Typography variant="body2" color="text.secondary">
        מצב תצוגה (לבדיקת עיצוב):
      </Typography>
      <FormControlLabel
        control={<Switch checked={isDark} onChange={handleChange} />}
        label={isDark ? 'Dark' : 'Light'}
      />
    </Stack>
  );
}
