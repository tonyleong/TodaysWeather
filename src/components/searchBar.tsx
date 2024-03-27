import { Autocomplete, TextField, useMediaQuery, useTheme } from "@mui/material"
import { ThemeConfig } from "../themeConfig"
import { SyntheticEvent, useEffect, useState } from "react";
import { setSelectedCountry, useLazyGetCountriesQuery } from "../redux/searchCountrySlice";
import { useDispatch } from "react-redux";

export type CountryListType = {
  lat: number,
  lon: number,
  name: string,
  country: string
}

const SearchBar = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up('sm'));
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const handleInput = (_: SyntheticEvent, val: string) => {
    setInput(val)
  }

  const [getCountry, { data: countryList, error, isLoading }] = useLazyGetCountriesQuery()

  useEffect(() => {
    let timeout = setTimeout(() => {
      getCountry(input)
    }, 500)
    return () => clearTimeout(timeout)
  }, [input])

  const handleOnChange = (_: SyntheticEvent, val: CountryListType | null) => {
    dispatch(setSelectedCountry(val))
  }

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
      options={countryList ?? []}
      getOptionKey={(options: CountryListType) => (`${options?.lat}-${options?.lon}`)}
      onInputChange={handleInput}
      renderInput={(props) => <TextField {...props} label="Country" />}
      getOptionLabel={(options: CountryListType) => (`${options?.name}, ${options?.country}`)}
      onChange={handleOnChange}
    />

  )
}

export default SearchBar