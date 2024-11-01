import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserForAuth, UserForRegistration, UserRegistered } from '@/types/user'
import { getUser, login, logout, register } from '@/services/api/user'
import { RequestState, RootState, ThunkApi } from '@/store/types'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { routes } from '@/constants/routes'

type UserState = {
  user: UserRegistered | null
  loginFormData: UserForAuth
  loggingIn: RequestState | null
  loginError: string | null
  loggingOut: RequestState | null
  logoutError: string | null
  registerFormData: UserForRegistration
  registering: RequestState | null
  registerError: string | null
  gettingUser: RequestState | null
  getUserError: string | null
}

const initialState: UserState = {
  user: null,
  loginFormData: { username: '', passwordRaw: '' },
  loggingIn: null,
  loginError: null,
  loggingOut: null,
  logoutError: null,
  registerFormData: { username: '', passwordRaw: '', passwordRawRepeated: '' },
  registering: null,
  registerError: null,
  gettingUser: null,
  getUserError: null,
}

export const loginThunk = createAsyncThunk<
  UserRegistered | undefined, AppRouterInstance, ThunkApi
>(
  'user/login',
  async (router, { rejectWithValue, getState }) => {
    try {
      const userForAuth = getState().user.loginFormData
      const result = await login(userForAuth)
      router.push(routes.home)
      return result.user
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
)

export const logoutThunk = createAsyncThunk<
  undefined, AppRouterInstance
>(
  'user/logout',
  async (router, { rejectWithValue }) => {
    try {
      await logout()
      router.push(routes.login)
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
)

export const registerThunk = createAsyncThunk<
  UserRegistered | undefined, AppRouterInstance, ThunkApi
>(
  'user/register',
  async (router, { rejectWithValue, getState }) => {
    const userForRegistration = getState().user.registerFormData

    if (userForRegistration.passwordRaw !== userForRegistration.passwordRawRepeated) {
      return rejectWithValue('Passwords are different')
    }

    try {
      const result = await register({
        username: userForRegistration.username, passwordRaw: userForRegistration.passwordRaw,
      })
      router.push(routes.home)
      return result.user
    } catch (e) {
      return rejectWithValue(e.message)
    }
  }
)

export const getUserThunk = createAsyncThunk<
  UserRegistered | undefined, AppRouterInstance, ThunkApi
>(
  'user/getUser',
  async (router, { rejectWithValue }) => {
    try {
      const result = await getUser()
      return result.user
    } catch (e) {
      if (e.status === 401 || e.status === 404) {
        router.push(routes.login)
      }
      return rejectWithValue(e.message)
    }
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setLoginFormUsername: (state: UserState, action: PayloadAction<string>) => {
      state.loginFormData.username = action.payload
    },
    setLoginFormPassword: (state: UserState, action: PayloadAction<string>) => {
      state.loginFormData.passwordRaw = action.payload
    },
    setRegisterFormUsername: (state: UserState, action: PayloadAction<string>) => {
      state.registerFormData.username = action.payload
    },
    setRegisterFormPassword: (state: UserState, action: PayloadAction<string>) => {
      state.registerFormData.passwordRaw = action.payload
    },
    setRegisterFormPasswordRepeated: (state: UserState, action: PayloadAction<string>) => {
      state.registerFormData.passwordRawRepeated = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loginThunk.pending, (state: UserState) => {
        state.loggingIn = 'pending'
      })
      .addCase(loginThunk.fulfilled, (state: UserState, action) => {
        state.loggingIn = 'fulfilled'
        if (action.payload) {
          state.user = action.payload
          state.loginFormData = { username: '', passwordRaw: '' }
        }
      })
      .addCase(loginThunk.rejected, (state: UserState, action) => {
        state.loggingIn = 'rejected'
        if (action.payload) {
          state.loginError = action.payload  as string
        }
      })
      .addCase(logoutThunk.pending, (state: UserState) => {
        state.loggingOut = 'pending'
      })
      .addCase(logoutThunk.fulfilled, (state: UserState) => {
        state.loggingOut = 'fulfilled'
        state.user = null
      })
      .addCase(logoutThunk.rejected, (state: UserState, action) => {
        state.loggingOut = 'rejected'
        state.logoutError = action.payload as string
      })
      .addCase(registerThunk.pending, (state: UserState) => {
        state.registering = 'pending'
      })
      .addCase(registerThunk.fulfilled, (state: UserState, action) => {
        state.registering = 'fulfilled'
        if (action.payload) {
          state.user = action.payload
          state.registerFormData = { username: '', passwordRaw: '', passwordRawRepeated: '' }
        }
      })
      .addCase(registerThunk.rejected, (state: UserState, action) => {
        state.registering = 'rejected'
        if (action.payload) {
          state.registerError = action.payload as string
        }
      })
      .addCase(getUserThunk.pending, (state: UserState) => {
        state.gettingUser = 'pending'
      })
      .addCase(getUserThunk.fulfilled, (state: UserState, action) => {
        state.gettingUser = 'fulfilled'
        if (action.payload) {
          state.user = action.payload
        }
      })
      .addCase(getUserThunk.rejected, (state: UserState, action) => {
        state.gettingUser = 'rejected'
        if (action.payload) {
          state.getUserError = action.payload as string
        }
      })
  }
})

export const {
  setLoginFormUsername, setLoginFormPassword, setRegisterFormUsername, setRegisterFormPassword,
  setRegisterFormPasswordRepeated,
} = userSlice.actions
export const userReducer = userSlice.reducer
export const userSelector = (state: RootState) => state.user
