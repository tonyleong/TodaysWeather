import { RootState } from '../store'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { WeatherApiState } from './searchWeatherSlice'

export interface SearchHistoryState {
    data: WeatherApiState[]
}

const initialState: SearchHistoryState = {
    data: [],
}

export const searchHistorySlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        addSearchHistory: (state, action: PayloadAction<WeatherApiState>) => {
            state.data = [action.payload, ...state.data]
        }
    },
})

export const selectSearchHistory = (state: RootState) => state?.searchHistory.data
export const selectLatestSearchHistory = (state: RootState) => state?.searchHistory.data?.[0]
export const { addSearchHistory } = searchHistorySlice.actions
export default searchHistorySlice.reducer
