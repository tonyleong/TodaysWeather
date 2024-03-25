import { IconButton, TextField, Typography, useTheme } from "@mui/material"
import { ThemeConfig } from "../themeConfig"
import { useMemo } from "react"
import SearchIcon from '@mui/icons-material/Search';
// import { useStyles } from "../themeConfig"

const SearchBar = () => {

  return (

    <TextField fullWidth
      variant="standard"
      label="Country"
      sx={{
        backgroundColor: (theme) => ThemeConfig.searchBar[theme.palette.mode].background,
        color: (theme) => ThemeConfig.searchBar[theme.palette.mode].color,
        height: {
          xs: '40px',
          sm: '60px',
        },
        borderRadius: {
          xs: '8px',
          sm: '20px',
        },
        '.MuiInput-underline::before, .MuiInput-underline::after, .MuiInput-underline:hover::before': { borderBottom: 'none' },
        paddingLeft: '1rem',
        'label': { paddingLeft: '1rem' }
      }}
    >
      search here
    </TextField>


  )
}

export default SearchBar