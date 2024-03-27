import { IconButton } from "@mui/material"
import { ThemeConfig } from "../themeConfig"
import { useEffect } from "react"
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedCountry } from "../redux/searchCountrySlice";
import { useLazyGetWeatherQuery } from "../redux/searchWeatherSlice";
import { addSearchHistory } from "../redux/searchHistorySlice";
import { useSnackbar } from "../functions/hooks";
// import { useStyles } from "../themeConfig"

const BtnSearch = () => {
  const selectedCountry = useSelector(selectSelectedCountry)
  const dispatch = useDispatch()
  const [getWeather, { data, isLoading, error }] = useLazyGetWeatherQuery()

  const { showSnackbar } = useSnackbar()
  useEffect(() => {
    if (!error) return
    if ('status' in error) {
      const errMsg = 'error' in error ? error.error : JSON.stringify(error.data)
      showSnackbar(errMsg, 'error')
    } else {
      showSnackbar(error.message ?? '', 'error')
    }
  }, [error])

  useEffect(() => {
    if (data === null || data === undefined) return
    dispatch(addSearchHistory(data))
  }, [data])

  const handleWeatherSearch = () => {
    if (selectedCountry === null) return
    getWeather(selectedCountry)
  }
  return (
    <IconButton sx={{
      backgroundColor: (theme) => ThemeConfig.btnSearch[theme.palette.mode].background,
      color: (theme) => ThemeConfig.btnSearch[theme.palette.mode].color,
      borderRadius: {
        xs: '8px',
        sm: '20px'
      },
      height: {
        xs: '40px',
        sm: '60px',
      },
      width: {
        xs: '40px',
        sm: '60px',
      },
    }}
      onClick={handleWeatherSearch}
      disabled={isLoading}
    >
      <SearchIcon />
    </IconButton>


  )
}

export default BtnSearch