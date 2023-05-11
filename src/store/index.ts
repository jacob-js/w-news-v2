import { configureStore } from '@reduxjs/toolkit'
import articlesSlice from './slices/articles.slice'

const store = configureStore({
  reducer: {
    articles: articlesSlice
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store