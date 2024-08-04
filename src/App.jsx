import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './Components/HeadersComponents/Navbar'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from './Pages/HomePage'
import { Footer } from './Components/HeadersComponents/Footer'
import { AboutUs } from './Pages/AboutUs'
import { ContactUs } from './Pages/ContactUs'
import { Login } from './Pages/Login'
import {SignUp} from './Pages/SignUp'
import { Courses } from './Pages/Courses'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/SignUp' element={<SignUp/>} />
        <Route path='/Courses' element={<Courses/>} />
      </Routes>
     <Footer/>
    </>
  )
}

export default App
