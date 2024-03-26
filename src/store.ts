import { configureStore } from '@reduxjs/toolkit'
import theme from './redux/themeSlice'
import country from './redux/searchCountrySlice'
import weather from './redux/searchWeatherSlice'
import { countryApi } from './redux/searchCountrySlice'
import { weatherApi } from './redux/searchWeatherSlice'

export const store = configureStore({
  reducer: {
    theme,
    country,
    weather,
    [countryApi.reducerPath]: countryApi.reducer,
    [weatherApi.reducerPath]: weatherApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat([countryApi.middleware, weatherApi.middleware])
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch