import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { userReducer } from '@/store/slices/user'
import { initialLoadingReducer } from '@/store/slices/initialLoading'

export const rootReducer = combineReducers({
  user: userReducer,
  initialLoading: initialLoadingReducer,
})

export const setupStore = () => configureStore({ reducer: rootReducer })
export const store = setupStore()
