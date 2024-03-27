import moment from "moment";
import { useSelector } from "react-redux";
import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material"
import { selectLatestSearchHistory } from "../redux/searchHistorySlice";
import { WeatherApiState } from "../redux/searchWeatherSlice";
import { ThemeConfig } from "../themeConfig"

const WeatherHeader = () => {
  const theme = useTheme()
  const sm = useMediaQuery(theme.breakpoints.up('sm'));
  const weatherState: WeatherApiState | null = useSelector(selectLatestSearchHistory)
  const temp = weatherState?.main?.temp === undefined ? '-' : Math.round(weatherState?.main?.temp ?? 0)
  const temp_min = weatherState?.main?.temp_min === undefined ? '-' : Math.round(weatherState?.main?.temp_min ?? 0)
  const temp_max = weatherState?.main?.temp_max === undefined ? '-' : Math.round(weatherState?.main?.temp_max ?? 0)

  return (
    <Stack className="w-full" rowGap={1}>
      <Typography fontSize={14} sx={{ color: theme => ThemeConfig.weatherHeder[theme.palette.mode].primary }} >Today's Weather</Typography>
      <Stack direction='row' alignItems='baseline' >
        <Typography sx={{ color: theme => ThemeConfig.weatherHeder[theme.palette.mode].main, fontSize: { xs: '4rem', sm: '5rem' }, fontWeight: 700 }} lineHeight='58px' >{temp}°</Typography>
        {!sm && <Typography sx={{ marginLeft: 'auto', color: theme => ThemeConfig.weatherHeder[theme.palette.mode].secondary }} >Clouds</Typography>}
      </Stack>
      <Stack direction='row'>
        <Typography sx={{ color: theme => ThemeConfig.weatherHeder[theme.palette.mode].primary }}>H:{temp_max}° L:{temp_min}°</Typography>
        {!sm && <Typography sx={{ marginLeft: 'auto', color: theme => ThemeConfig.weatherHeder[theme.palette.mode].secondary }} >Humidity: {weatherState?.main?.humidity ?? '-'}%</Typography>}
      </Stack>
      <Stack direction='row'>
        <Typography sx={{ color: theme => ThemeConfig.weatherHeder[theme.palette.mode].secondary }} fontWeight={600}>{weatherState ? `${weatherState?.name}, ${weatherState?.sys?.country}` : '-'}</Typography>
        <Typography sx={{ marginLeft: 'auto', color: theme => ThemeConfig.weatherHeder[theme.palette.mode].secondary }} >{moment(weatherState?.timestamp).format('DD-MM-YYYY hh:mma')}</Typography>

        {sm && <Typography sx={{ marginLeft: 'auto', color: theme => ThemeConfig.weatherHeder[theme.palette.mode].secondary }} >Humidity: {weatherState?.main?.humidity ?? '-'}%</Typography>}
        {sm && <Typography sx={{ marginLeft: 'auto', color: theme => ThemeConfig.weatherHeder[theme.palette.mode].secondary }} >{weatherState?.weather?.[0]?.main ?? '-'}</Typography>}
      </Stack>
    </Stack>
  )
}

export default WeatherHeader