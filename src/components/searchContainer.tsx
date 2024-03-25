import { IconButton, Stack, TextField, Typography, useTheme } from "@mui/material"
import { ThemeConfig } from "../themeConfig"
import { useMemo } from "react"
import SearchIcon from '@mui/icons-material/Search';
import SearchBar from "./searchBar";
import BtnSearch from "./btnSearch";
// import { useStyles } from "../themeConfig"

const SearchContainer = () => {
  const theme = useTheme()
  const style = useMemo(() => ThemeConfig.btnSearch[theme.palette.mode], [theme])
  return (
    <Stack direction='row' className=" gap-x-[20px]">
      <SearchBar />
      <BtnSearch />
    </Stack>
  )
}

export default SearchContainer