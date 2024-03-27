import { Stack } from "@mui/material"
import SearchBar from "./searchBar";
import BtnSearch from "./btnSearch";

const SearchContainer = () => {
  return (
    <Stack direction='row' className=" gap-x-[20px]">
      <SearchBar />
      <BtnSearch />
    </Stack>
  )
}

export default SearchContainer