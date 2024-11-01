import { rootReducer, setupStore } from '@/store/store'

export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export type RootState = ReturnType<typeof rootReducer>
export type ThunkApi = { dispatch: AppDispatch, state: RootState }
export type RequestState = 'pending' | 'fulfilled' | 'rejected'
