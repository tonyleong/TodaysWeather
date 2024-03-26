import { IconButton, TextField, Typography, useTheme } from "@mui/material"
import { ThemeConfig } from "../themeConfig"
import { useEffect, useMemo } from "react"
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedCountry } from "../redux/searchCountrySlice";
import { setSelectedWeather, useLazyGetWeatherQuery } from "../redux/searchWeatherSlice";
// import { useStyles } from "../themeConfig"

const BtnSearch = () => {
  const selectedCountry = useSelector(selectSelectedCountry)
  const dispatch = useDispatch()
  const [getWeather, { data, isLoading, error }] = useLazyGetWeatherQuery()
  useEffect(() => {
    dispatch(setSelectedWeather(data))
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
    >
      <SearchIcon />
    </IconButton>


  )
}

export default BtnSearch