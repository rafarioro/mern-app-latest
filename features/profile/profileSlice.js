import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import profileService from './profileService'

const initialState = {
  profile: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// get user data
export const getProfileData = createAsyncThunk(
    'profile/getProfileData',
    async (profileData, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token
        return await profileService.getProfileData(profileData, token)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )

  export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
      reset: (state) => initialState,
    },
    extraReducers: (builder) => {
      builder
        .addCase(getProfileData.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getProfileData.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.profile = action.payload
        })
        .addCase(getProfileData.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })

    },
})

export const { reset } = profileSlice.actions
export default profileSlice.reducer
