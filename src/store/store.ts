import { configureStore } from '@reduxjs/toolkit'
import {reducer as categoryReducer} from './category/category.slice'


export const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch