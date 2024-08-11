import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './Components/HeadersComponents/Navbar'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { HomePage } from './Pages/HomePage'
import { Footer } from './Components/HeadersComponents/Footer'
import { AboutUs } from './Pages/AboutUs'
import { ContactUs } from './Pages/ContactUs'
import { Courses } from './Pages/Courses'
import { Otp } from './Components/authentication/Otp'
import { EmailVerify } from './Components/authentication/EmailVerify'
import { Login } from './Components/authentication/Login'
import { SignUp } from './Components/authentication/SignUp'
import PrivateRoute from "./Components/authentication/PrivateRoute"
import MyProfile from "./Components/Dashboard/MyProfile"
import Settings from "./Components/Dashboard/Settings"
import Instructor from "./Components/Dashboard/Instructor"
import MyCourses from "./Components/Dashboard/MyCourses"
import AddCourse from "./Components/Dashboard/AddCourse"
import EditCourse from "./Components/Dashboard/EditCourse"
import EnrolledCourses from "./Components/Dashboard/EnrolledCourses"
import Cart from "./Components/Dashboard/Cart"
import Dashboard from './Pages/Deshboard'
import { useDispatch, useSelector } from 'react-redux'
import { ACCOUNT_TYPE } from "./utils/constants"
import { getUserDetails } from './services/operations/profileAPI'



function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((state) => state.profile)
  const {token} = useSelector((state) => state.auth)
  console.log("user in App : ", user);
  useEffect(() => {
    if(!user && token) {
      dispatch(getUserDetails(token, navigate))
    }
  }, [])

  return (
    <div className=' bg-richblack-900'>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/SignUp' element={<SignUp/>} />
        <Route path='/Courses' element={<Courses/>} />
        <Route path='/verify-email' element={<Otp/>} />
        

        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          {/* Route for all users */}
          <Route path="dashboard/my-profile" element={<MyProfile />} />
          <Route path="dashboard/Settings" element={<Settings />} />
          {/* Route only for Instructors */}
          {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
            <>
              <Route path="dashboard/instructor" element={<Instructor />} />
              <Route path="dashboard/my-courses" element={<MyCourses />} />
              <Route path="dashboard/add-course" element={<AddCourse />} />
              <Route
                path="dashboard/edit-course/:courseId"
                element={<EditCourse />}
              />
            </>
          )}
          {/* Route only for Students */}
          {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route
                path="dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              />
              <Route path="/dashboard/cart" element={<Cart />} />
            </>
          )}
          <Route path="dashboard/settings" element={<Settings />} />
        </Route>
      </Routes>
     <Footer/>
    </div>
  )
}


export default App
