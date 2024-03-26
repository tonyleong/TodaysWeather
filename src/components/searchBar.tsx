import { Autocomplete, IconButton, TextField, Typography, useMediaQuery, useTheme } from "@mui/material"
import { ThemeConfig } from "../themeConfig"
import { useMemo } from "react"
import SearchIcon from '@mui/icons-material/Search';
// import { useStyles } from "../themeConfig"

const SearchBar = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up('sm'));
  console.log(sm)

  return (
    <Autocomplete
      size={sm ? 'medium' : "small"}
      sx={{
        backgroundColor: (theme) => ThemeConfig.searchBar[theme.palette.mode].background,
        borderRadius: {
          xs: '8px',
          sm: '20px',
        },
        color: (theme) => ThemeConfig.searchBar[theme.palette.mode].color,
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
          border: "none"
        }
      }}
      fullWidth
      options={[]}
      renderInput={(props) => <TextField {...props} label="Country" />}

    />

  )
}

export default SearchBar