import React from 'react'
import "./NavBar.css"
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_img from '../../assets/caret_icon.svg'

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left" >
        <img src={logo} alt="" />
        <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt=""  className='icons'/>
        <p>Children</p>
        <div className="navbar-profile">
            <img src={profile_img} alt="" className='profile'/>
            <img src={caret_img} alt="" />
            <div className="dropdown">
                <p>Sign Out Of Netflix</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
