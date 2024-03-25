import { IconButton, useMediaQuery } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { changeMode, selectPreferDarkMode } from "../redux/themeSlice";

const BtnThemeToogle = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const prefersDarkModeControl = useSelector(selectPreferDarkMode)
  //Default follow user's browser preference, user can change mode later
  const currentMode = (prefersDarkModeControl ?? prefersDarkMode) ? 'dark' : "light"
  const dispatch = useDispatch()
  const handleToogleMode = () => {
    dispatch(changeMode(currentMode === 'dark' ? false : true))
  }

  return (
    <div className='fixed right-1 top-1'>
      <IconButton onClick={handleToogleMode}>
        {currentMode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </div>

  )
}

export default BtnThemeToogle