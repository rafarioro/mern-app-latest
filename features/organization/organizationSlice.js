import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import organizationService from './organizationService'

const initialState = {
  organization: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// get org data
export const getOrganizationData = createAsyncThunk(
    'organization/getData',
    async (organizationData, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token
        return await organizationService.getOrganizationData(organizationData, token)
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

  export const organizationSlice = createSlice({
    name: 'organization',
    initialState,
    reducers: {
      reset: (state) => initialState,
    },
    extraReducers: (builder) => {
      builder
        .addCase(getOrganizationData.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getOrganizationData.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.organization = action.payload
        })
        .addCase(getOrganizationData.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })

    },
})

export const { reset } = organizationSlice.actions
export default organizationSlice.reducer
