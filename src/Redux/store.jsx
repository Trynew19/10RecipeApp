import { configureStore } from '@reduxjs/toolkit'
import recipeSlice from './Redusers/recipeSlice'

export const store = configureStore({
  reducer: {
    recipeReducer:recipeSlice
  },
})