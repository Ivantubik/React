import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

function Navigation() {
  return (
    <nav>
      <img src={logo} alt="logo"/>
      <Link to="/">Home</Link>
      <Link to="/explore">Explore</Link>
      <Link to="/itemDetal">Item Details</Link>
      <Link to="/author">Authors</Link>
      <Link to="/createyours">Create Yours</Link>
    </nav>
  )
}

export default Navigation