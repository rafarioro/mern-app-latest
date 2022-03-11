import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import goalReducer from '../features/goals/goalSlice'
import postReducer from '../features/posts/postSlice'
import organizationReducer from '../features/organization/organizationSlice'
import profileReducer from '../features/profile/profileSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
    profile: profileReducer,
    organization: organizationReducer,
    posts: postReducer,
    
  },
})
