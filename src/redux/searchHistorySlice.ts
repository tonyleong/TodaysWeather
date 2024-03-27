import { RootState } from '../store'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { WeatherApiState } from './searchWeatherSlice'

export interface SearchHistoryState {
  data: { [key: string]: WeatherApiState; }
}

const initialState: SearchHistoryState = {
  data: {},
}

export const searchHistorySlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    addSearchHistory: (state, action: PayloadAction<WeatherApiState>) => {
      state.data[action.payload.id] = action.payload
    },
    removeSearchHistory: (state, action: PayloadAction<string>) => {
      delete state.data[action.payload]
    }
  },
})

export const selectSearchHistory = (state: RootState) => state?.searchHistory.data
export const selectLatestSearchHistory = (state: RootState) => {
  let { data } = state?.searchHistory
  let latest = data[Object.keys(data)[0]]
  Object.keys(data).forEach((key) => {
    if (latest === null) latest = data[key]
    else if (latest.timestamp < data[key].timestamp) latest = data[key]
  })
  return latest

}
export const { addSearchHistory, removeSearchHistory } = searchHistorySlice.actions
export default searchHistorySlice.reducer
