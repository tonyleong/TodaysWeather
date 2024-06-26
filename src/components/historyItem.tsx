import { IconButton, Stack, Typography, useMediaQuery, useTheme } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import { ThemeConfig } from "../themeConfig";
import { WeatherApiState, useLazyGetWeatherQuery } from "../redux/searchWeatherSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addSearchHistory, removeSearchHistory } from "../redux/searchHistorySlice";
import moment from "moment";
import { useSnackbar } from "../functions/hooks";

export type HistoryItemProps = { data: WeatherApiState }

const HistoryItem = ({ data }: HistoryItemProps) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up('sm'));
  const dispatch = useDispatch()

  const [getWeather, { data: searchData, isLoading, error }] = useLazyGetWeatherQuery()
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
    if (searchData === null || searchData === undefined) return
    dispatch(addSearchHistory(searchData))
  }, [searchData])

  const handleSearch = () => {
    getWeather({
      lon: data?.coord?.lon,
      lat: data?.coord?.lat,
      name: data?.name,
      country: data?.sys?.country
    })
  }

  const handleRemoveHistory = (id: string) => {
    dispatch(removeSearchHistory(id))
  }

  return (
    <Stack direction='row' gap={1.5} sx={{
      width: '100%',
      alignItems: "center",
      backgroundColor: theme => ThemeConfig.historyItem[theme.palette.mode].background,
      paddingX: '10px',
      paddingY: '13px',
      borderRadius: '16px',
    }}>
      <Stack direction={sm ? 'row' : 'column'} className="w-full">
        <Typography sx={{
          color: theme => ThemeConfig.historyItem[theme.palette.mode].primary,
          fontSize: { xs: '14px', sm: '16px' }
        }}>
          {`${data?.name}`}
        </Typography>
        <Typography sx={{
          color: theme => ThemeConfig.historyItem[theme.palette.mode].secondary,
          fontSize: { xs: '10px', sm: '14px' },
          marginLeft: { xs: 0, sm: 'auto' }
        }}>
          {moment(data?.timestamp).format('DD-MM-YYYY hh:mma')}
        </Typography>
      </Stack>
      <IconButton sx={{
        marginLeft: 'auto',
        color: theme => ThemeConfig.historyItem[theme.palette.mode].iconButton.color,
        border: theme => ThemeConfig.historyItem[theme.palette.mode].iconButton.border,
        backgroundColor: theme => ThemeConfig.historyItem[theme.palette.mode].iconButton.backgroundColor
      }}
        onClick={handleSearch}
        disabled={isLoading}
      >
        <SearchIcon sx={{ opacity: 0.5 }} />
      </IconButton>
      <IconButton sx={{
        marginLeft: 'auto',
        color: theme => ThemeConfig.historyItem[theme.palette.mode].iconButton.color,
        border: theme => ThemeConfig.historyItem[theme.palette.mode].iconButton.border,
        backgroundColor: theme => ThemeConfig.historyItem[theme.palette.mode].iconButton.backgroundColor
      }}
        onClick={() => handleRemoveHistory(data.id)}
        disabled={isLoading}
      >
        <DeleteIcon sx={{ opacity: 0.5 }} />
      </IconButton>
    </Stack>
  )
}

export default HistoryItem