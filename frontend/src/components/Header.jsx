import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../redux/features/authSlice'

const Header = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <Link to="/" className="navbar-brand" >Home</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">

            {user ?

              <>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link" >
                    <i className="fa-solid fa-user mx-2"></i>
                    My Profile</Link>
                </li>
                <li className="nav-item">
                  <button className='btn btn-md btn-danger' onClick={onLogout}>Log Out</button>
                </li>
              </>
              :
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link active" >Log In</Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link active" >Register</Link>
                </li>
              </>

            }

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header