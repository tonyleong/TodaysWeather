import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface ThemeState {
  mode: boolean | undefined
}

const initialState: ThemeState = {
  mode: undefined,
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeMode: (state, action: PayloadAction<boolean>) => {
      state.mode = action.payload
    }
  },
})

export const selectPreferDarkMode = (state: RootState) => state?.theme?.mode

// Action creators are generated for each case reducer function
export const { changeMode } = themeSlice.actions

export default themeSlice.reducer