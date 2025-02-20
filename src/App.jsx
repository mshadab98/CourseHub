import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Courses from './Pages/Courses/Courses'
import Dashboard from './Pages/Dashboard/Dashboard'
import Footer from './Components/Navbar/Footer/Footer'
import { Provider } from "react-redux"
import store from "./redux/store"
import CourseDetails from "./Pages/CourseDetails/CourseDetails"
const App = () => {
  return (
    <>
    <Provider store={store}>
    <Router>

    <Navbar/>

    <div className='container mx-auto mt-4'>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/courses' element ={<Courses/>}/>
  <Route path="/courseDetails/:id" element={<CourseDetails/>}/>
  <Route path='/dashboard' element={<Dashboard/>}/>

</Routes>

    </div>

    <Footer/>

    </Router>
    </Provider>
    
    </>
  )
}

export default App