import { IconButton, TextField, Typography, useTheme } from "@mui/material"
import { ThemeConfig } from "../themeConfig"
import { useMemo } from "react"
import SearchIcon from '@mui/icons-material/Search';
// import { useStyles } from "../themeConfig"

const BtnSearch = () => {
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
    }}>
      <SearchIcon />
    </IconButton>


  )
}

export default BtnSearch