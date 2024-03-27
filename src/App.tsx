import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { selectPreferDarkMode } from './redux/themeSlice';
import BtnThemeToogle from './components/btnThemeToogle';
import SearchContainer from './components/searchContainer';
import DisplayBoard from './components/displayBoard';
import WeatherHeader from './components/weatherHeader';
import SearchHistory from './components/searchHistory';
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
      <SnackbarProvider SnackbarProps={{ style: { width: '100px' } }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}>
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
          </div>
        </main>
      </SnackbarProvider>
    </ThemeProvider>
  )
}

export default App
