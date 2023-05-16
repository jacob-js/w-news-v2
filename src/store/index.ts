import { configureStore } from '@reduxjs/toolkit'
import articlesSlice from './slices/articles.slice'
import publishersSlice from './slices/publishers.slice'

const store = configureStore({
  reducer: {
    articles: articlesSlice,
    publishers: publishersSlice
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store