import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CountryListType } from '../components/searchBar'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export const countryApi = createApi({
    reducerPath: 'countryApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://api.openweathermap.org/' }),
    endpoints: (builder) => ({
        getCountries: builder.query<CountryListType[], string>({
            query: (city) => `geo/1.0/direct?q=${city}&limit=10&appid=${import.meta.env.VITE_APIKEY}`,
        }),
    }),
})

export interface SelectedCountryState {
    selectedCountry: CountryListType | null
}

const initialState: SelectedCountryState = {
    selectedCountry: null,
}

export const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        setSelectedCountry: (state, action: PayloadAction<CountryListType | null>) => {
            state.selectedCountry = action.payload
        }
    },
})

export const selectSelectedCountry = (state: RootState) => state?.country?.selectedCountry

export const { useGetCountriesQuery, useLazyGetCountriesQuery } = countryApi
export const { setSelectedCountry } = countrySlice.actions
export default countrySlice.reducer