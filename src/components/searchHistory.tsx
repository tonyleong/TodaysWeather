import { Paper, Stack, Typography } from "@mui/material"
import { ThemeConfig } from "../themeConfig"
import HistoryItem from "./historyItem"

const SearchHistory = () => {
  return (
    <Paper sx={{
      backgroundColor: theme => ThemeConfig.searchHistory[theme.palette.mode].background,
      borderRadius: '24px',
      paddingX: '17px',
      paddingY: '22px',
    }}>
      <Typography sx={{ marginLeft: '3px', marginBottom: '26px' }}>Search History</Typography>
      <Stack rowGap={2}>
        {[1, 2, 3, 4, 5].map(() => (<HistoryItem />))}
      </Stack>
    </Paper >
  )
}

export default SearchHistory