import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material"
import { ThemeConfig } from "../themeConfig"

const WeatherHeader = () => {
  const theme = useTheme()
  const sm = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Stack className="w-full" rowGap={1}>
      <Typography fontSize={14} sx={{ color: theme => ThemeConfig.weatherHeder[theme.palette.mode].primary }} >Today's Weather</Typography>
      <Stack direction='row' alignItems='baseline' >
        <Typography sx={{ color: theme => ThemeConfig.weatherHeder[theme.palette.mode].main }} fontSize={62} lineHeight='58px' fontWeight={700}>26°</Typography>
        {!sm && <Typography sx={{ marginLeft: 'auto', color: theme => ThemeConfig.weatherHeder[theme.palette.mode].secondary }} >Clouds</Typography>}
      </Stack>
      <Stack direction='row'>
        <Typography sx={{ color: theme => ThemeConfig.weatherHeder[theme.palette.mode].primary }}>H:29° L:26°</Typography>
        {!sm && <Typography sx={{ marginLeft: 'auto', color: theme => ThemeConfig.weatherHeder[theme.palette.mode].secondary }} >Humidity: 58%</Typography>}
      </Stack>
      <Stack direction='row'>
        <Typography sx={{ color: theme => ThemeConfig.weatherHeder[theme.palette.mode].secondary }} fontWeight={600}>Johor, MY</Typography>
        <Typography sx={{ marginLeft: 'auto', color: theme => ThemeConfig.weatherHeder[theme.palette.mode].secondary }} >01-09-2022 09:41am</Typography>
        {sm && <Typography sx={{ marginLeft: 'auto', color: theme => ThemeConfig.weatherHeder[theme.palette.mode].secondary }} >Humidity: 58%</Typography>}
        {sm && <Typography sx={{ marginLeft: 'auto', color: theme => ThemeConfig.weatherHeder[theme.palette.mode].secondary }} >Clouds</Typography>}
      </Stack>
    </Stack>
  )
}

export default WeatherHeader