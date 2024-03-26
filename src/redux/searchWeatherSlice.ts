import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CountryListType } from '../components/searchBar'
import { RootState } from '../store'
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { selectSelectedCountry } from './searchCountrySlice'

export type WeatherApiState = {
    main: {
        humidity: number,
        temp: number,
        temp_max: number,
        temp_min: number,
    },
    weather: {
        main: string
    }[]
}

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://api.openweathermap.org/' }),
    endpoints: (builder) => ({
        getWeather: builder.query<any, CountryListType>({
            query: (countrySet) => `data/2.5/weather?lat=${countrySet.lat}&lon=${countrySet.lon}&appid=${import.meta.env.VITE_APIKEY}`,
            transformResponse: (response: WeatherApiState) => {
                // calculation K to C refer to https://www.vedantu.com/chemistry/kelvin-to-celsius 
                response.main.temp = response.main.temp - 273.15
                response.main.temp_min = response.main.temp_min - 273.15
                response.main.temp_max = response.main.temp_max - 273.15
                return response
            }
        }),
    }),
})

export interface WeatherState {
    selectedWeather: WeatherApiState | null
}

const initialState: WeatherState = {
    selectedWeather: null,
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setSelectedWeather: (state, action: PayloadAction<WeatherApiState>) => {
            state.selectedWeather = action.payload
        }
    },
})



export const selectWeather = (state: RootState) => state?.weather?.selectedWeather
export const { useLazyGetWeatherQuery, useGetWeatherQuery } = weatherApi
export const { setSelectedWeather } = weatherSlice.actions
export default weatherSlice.reducer
