import { Paper, Stack, Typography } from "@mui/material"
import { ThemeConfig } from "../themeConfig"
import HistoryItem from "./historyItem"
import { useSelector } from "react-redux"
import { selectSearchHistory } from "../redux/searchHistorySlice"

const SearchHistory = () => {
  const searchHistory = useSelector(selectSearchHistory)
  console.log(searchHistory)
  return (
    <Paper sx={{
      backgroundColor: theme => ThemeConfig.searchHistory[theme.palette.mode].background,
      borderRadius: '24px',
      paddingX: '17px',
      paddingY: '22px',
    }}>
      <Typography sx={{ marginLeft: '3px', marginBottom: '26px' }}>Search History</Typography>
      <Stack rowGap={2}>
        {searchHistory?.length === 0 && <Typography className=" text-gray-500 text-center">No History Found</Typography>}
        {searchHistory.map((history, i) => (<HistoryItem key={`historyItem-${history.id}`} data={history} />))}
      </Stack>
    </Paper >
  )
}

export default SearchHistory