import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RequestState, RootState, ThunkApi } from '@/store/types'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { getUserThunk } from '@/store/slices/user'

type InitialLoadingState = {
  initialLoading: RequestState | null
}

const initialState: InitialLoadingState = {
  initialLoading: null,
}

export const getInitialDataThunk = createAsyncThunk<
  void, AppRouterInstance, ThunkApi
>(
  'initialLoading/getInitialData',
  async (router, { dispatch }) => {
    dispatch(getUserThunk(router))
  }
)

export const initialLoadingSlice = createSlice({
  name: 'initialLoading',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getInitialDataThunk.pending, (state: InitialLoadingState) => {
        state.initialLoading = 'pending'
      })
      .addCase(getInitialDataThunk.fulfilled, (state: InitialLoadingState) => {
        state.initialLoading = 'fulfilled'
      })
      .addCase(getInitialDataThunk.rejected, (state: InitialLoadingState) => {
        state.initialLoading = 'rejected'
      })
  }
})

export const initialLoadingReducer = initialLoadingSlice.reducer
export const initialLoadingSelector = (state: RootState) => state.initialLoading
