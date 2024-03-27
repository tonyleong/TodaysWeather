import { SnackbarMessage, useSnackbar as useNotistack } from "notistack";

export const useSnackbar = () => {
    const { enqueueSnackbar } = useNotistack()
    const showSnackbar = (msg: SnackbarMessage, variant: "error" | "default" | "success" | "warning" | "info" | undefined) => {
        console.log(msg, variant)
        enqueueSnackbar(msg, { variant })
    }
    return { showSnackbar }
}