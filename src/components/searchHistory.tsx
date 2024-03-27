import { Paper, Stack, Typography } from "@mui/material"
import { ThemeConfig } from "../themeConfig"
import HistoryItem from "./historyItem"
import { useSelector } from "react-redux"
import { selectSearchHistory } from "../redux/searchHistorySlice"

const SearchHistory = () => {
  const searchHistory = useSelector(selectSearchHistory)
  return (
    <Paper sx={{
      backgroundColor: theme => ThemeConfig.searchHistory[theme.palette.mode].background,
      borderRadius: '24px',
      paddingX: '17px',
      paddingY: '22px',
    }}>
      <Typography sx={{ marginLeft: '3px', marginBottom: '26px' }}>Search History</Typography>
      <Stack rowGap={2}>
        {Object.keys(searchHistory)?.length === 0 && <Typography className=" text-gray-500 text-center">No History Found</Typography>}
        {Object.entries(searchHistory)
          ?.sort(([_, prevValue], [__, nextValue]) => (nextValue.timestamp - prevValue.timestamp))
          ?.map(([key, value]) => (<HistoryItem key={`historyItem-${key}`} data={value} />))
        }
      </Stack>
    </Paper >
  )
}

export default SearchHistory