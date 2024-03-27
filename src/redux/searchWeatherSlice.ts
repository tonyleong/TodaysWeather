import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CountryListType } from '../components/searchBar'
import { v4 as uuidv4 } from "uuid";

export type WeatherApiState = {
  main: {
    humidity: number,
    temp: number,
    temp_max: number,
    temp_min: number,
  },
  weather: {
    main: string
  }[],
  sys: {
    country: string
  },
  name: string,
  timestamp: number,
  coord: {
    lat: number,
    lon: number
  },
  id: string
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
        response.timestamp = new Date().getTime()
        response.id = uuidv4()
        return response
      }
    }),
  }),
})

export const { useLazyGetWeatherQuery, useGetWeatherQuery } = weatherApi
