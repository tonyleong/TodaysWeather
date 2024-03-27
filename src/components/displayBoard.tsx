import { Paper } from "@mui/material"
import { ThemeConfig } from "../themeConfig"
import { ReactNode } from "react"
import SunnyImage from '../assets/sun.png'

const DisplayBoard = ({ children }: { children: ReactNode }) => {
  return (
    <Paper sx={{
      marginTop: {
        xs: '140px',
        sm: '100px'
      },
      position: 'relative',
      backgroundColor: (theme) => ThemeConfig.displayBoard[theme.palette.mode].background,
      border: theme => ThemeConfig.displayBoard[theme.palette.mode].border,
      boxShadow: 'none',
      borderRadius: {
        xs: '20px',
        sm: '40px'
      },
      minHeight: '100vh',
      width: '100%',
      paddingX: {
        xs: '20px',
        sm: '40px'
      },
      paddingY: {
        xs: '20px',
        sm: '45px'
      },
      display: 'flex',
      flexDirection: 'column',
      rowGap: 4
    }}
    >
      <img src={SunnyImage} className=' w-[60%] max-h-[157px] max-w-[157px] sm:max-h-[250px] sm:max-w-[280px] absolute right-0  -top-14 sm:-top-24 sm:right-3 z-10' />
      {children}
    </Paper>
  )
}

export default DisplayBoard