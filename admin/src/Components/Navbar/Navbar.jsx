import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/navlogo.png'
import navProfile from '../../assets/nav-profile.png' 
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <Link to={'/addproduct'} style={{textDecoration:"none"}}>
      <div className='navbar'>
          <img src={navlogo} alt="" className="nav-logo" />
          <img src={navProfile} alt="" className="nav-profile" />
      </div>
    </Link>
  )
}

export default Navbar