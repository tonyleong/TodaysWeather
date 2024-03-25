import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Typography } from '@mui/material';
import BtnThemeToogle from './components/btnThemeToogle';
import { selectPreferDarkMode } from './redux/themeSlice';
import './App.css'



function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const prefersDarkModeControl = useSelector(selectPreferDarkMode)

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: (prefersDarkModeControl ?? prefersDarkMode) ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode, prefersDarkModeControl],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <BtnThemeToogle />
        <Typography>
          This app is using the dark mode

        </Typography>
      </main>
    </ThemeProvider>
  )
}

export default App
