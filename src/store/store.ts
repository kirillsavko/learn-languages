import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { userReducer } from '@/store/slices/user'
import { initialLoadingReducer } from '@/store/slices/initialLoading'
import { wordsReducer } from '@/store/slices/words'

export const rootReducer = combineReducers({
  user: userReducer,
  initialLoading: initialLoadingReducer,
  words: wordsReducer,
})

export const setupStore = () => configureStore({ reducer: rootReducer })
export const store = setupStore()
