import React from 'react'
import UserRegistration from './components/UserRegistration'
import Home from './components/Home'
import { useState } from 'react'
import 'react-toastify'
import 'react-router-dom'
import { Route, Router,Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        
        <Route path='/' element={<Home />}/>
        <Route path='/register' element={<UserRegistration />}/>
      </Routes>
      <Footer/>
      <ToastContainer position='top-center' />
    </Router>
    </div>
  )
}

export default App