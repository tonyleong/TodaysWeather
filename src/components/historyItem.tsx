import { IconButton, Stack, Typography, useMediaQuery, useTheme } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import { ThemeConfig } from "../themeConfig";

const HistoryItem = () => {
    const theme = useTheme();
    const sm = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <Stack direction='row' gap={1.5} sx={{
            width: '100%',
            alignItems: "center",
            backgroundColor: theme => ThemeConfig.historyItem[theme.palette.mode].background,
            paddingX: '10px',
            paddingY: '13px',
            borderRadius: '16px',
        }}>
            <Stack direction={sm ? 'row' : 'column'} className="w-full">
                <Typography sx={{
                    color: theme => ThemeConfig.historyItem[theme.palette.mode].primary,
                    fontSize: { xs: '14px', sm: '16px' }
                }}>
                    Johor, My
                </Typography>
                <Typography sx={{
                    color: theme => ThemeConfig.historyItem[theme.palette.mode].secondary,
                    fontSize: { xs: '10px', sm: '14px' },
                    marginLeft: { xs: 0, sm: 'auto' }
                }}
                >01-09-2022 09:41am
                </Typography>
            </Stack>
            <IconButton sx={{
                marginLeft: 'auto',
                color: theme => ThemeConfig.historyItem[theme.palette.mode].iconButton.color,
                border: theme => ThemeConfig.historyItem[theme.palette.mode].iconButton.border,
                backgroundColor: theme => ThemeConfig.historyItem[theme.palette.mode].iconButton.backgroundColor
            }}>
                <SearchIcon sx={{ opacity: 0.5 }} />
            </IconButton>
            <IconButton sx={{
                marginLeft: 'auto',
                color: theme => ThemeConfig.historyItem[theme.palette.mode].iconButton.color,
                border: theme => ThemeConfig.historyItem[theme.palette.mode].iconButton.border,
                backgroundColor: theme => ThemeConfig.historyItem[theme.palette.mode].iconButton.backgroundColor
            }}>
                <DeleteIcon sx={{ opacity: 0.5 }} />
            </IconButton>
        </Stack>
    )
}

export default HistoryItem