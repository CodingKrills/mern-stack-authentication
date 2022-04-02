import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet, Link } from "react-router-dom";

// * Pages
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'

// * Components
import Header from './components/Header'

const App = () => {
  return (
    <Router>
      <Header />
      <div className='container-fluid'>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App