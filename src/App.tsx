import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Theme, Typography, createStyles, makeStyles } from '@mui/material';
import BtnThemeToogle from './components/btnThemeToogle';
import { selectPreferDarkMode } from './redux/themeSlice';
import { ThemeConfig } from './themeConfig'
import './App.css'
import SearchBar from './components/searchBar';
import SearchContainer from './components/searchContainer';
import DisplayBoard from './components/displayBoard';

import { Image } from '@mui/icons-material';
import WeatherHeader from './components/weatherHeader';
import SearchHistory from './components/searchHistory';






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
      <main className={` w-full h-full ${theme.palette.mode}Mode flex justify-center`}>
        <BtnThemeToogle />
        <div className='p-[42px] w-full max-w-[700px]' >
          <SearchContainer />
          <div className=' mt-[17px]'>
            <DisplayBoard >
              <WeatherHeader />
              <SearchHistory />
            </DisplayBoard>
          </div>
          {/* <Typography className=' '>
            This app is using the dark mode

          </Typography> */}
        </div>
      </main>
    </ThemeProvider>
  )
}

export default App
