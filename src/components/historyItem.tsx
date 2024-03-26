import { IconButton, Stack, Typography, useMediaQuery, useTheme } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import { ThemeConfig } from "../themeConfig";
import { WeatherApiState, useLazyGetWeatherQuery } from "../redux/searchWeatherSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addSearchHistory } from "../redux/searchHistorySlice";
import { CountryListType } from "./searchBar";

export type HistoryItemProps = { data: WeatherApiState }

const HistoryItem = ({ data }: HistoryItemProps) => {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.up('sm'));
    const dispatch = useDispatch()

    const [getWeather, { data: searchData, isLoading, error }] = useLazyGetWeatherQuery()
    useEffect(() => {
        //TODO: check duplicate item add
        if (searchData === null || searchData === undefined) return
        console.log('history item triggered')
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
                    {`${data?.name}, ${data?.sys?.country}`}
                </Typography>
                <Typography sx={{
                    color: theme => ThemeConfig.historyItem[theme.palette.mode].secondary,
                    fontSize: { xs: '10px', sm: '14px' },
                    marginLeft: { xs: 0, sm: 'auto' }
                }}
                >{data?.timestamp}
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
            }}>
                <DeleteIcon sx={{ opacity: 0.5 }} />
            </IconButton>
        </Stack>
    )
}

export default HistoryItem