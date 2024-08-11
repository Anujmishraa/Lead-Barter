import { combineReducers, configureStore } from "@reduxjs/toolkit"

import authReducer from "./slices/authSlice"
import cartReducer from "./slices/cartSlice"
import courseReducer from "./slices/courseSlice"
import profileReducer from "./slices/profileSlice"
import viewCourseReducer from "./slices/viewCourseSlice"

const store = configureStore({
  reducer: {
  auth: authReducer,
  profile: profileReducer,
  course: courseReducer,
  cart: cartReducer,
  viewCourse: viewCourseReducer,
  }
})

export default store
