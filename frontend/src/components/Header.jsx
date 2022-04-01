import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
    <Link to="/" className="navbar-brand" >Home</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/login" className="nav-link active" >Log In</Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link active" >Register</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header