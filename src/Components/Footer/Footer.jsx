import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
        <div className="iconFooter">
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
          <FaInstagram />
        </div>
        <ul>
          <NavLink className="Footer-navLink">
              Home
          </NavLink>
          <NavLink className="Footer-navLink">
           Help/FAQ
          </NavLink>
          <NavLink className="Footer-navLink">
            Services
          </NavLink>
          <NavLink className="Footer-navLink">
           privacy
          </NavLink>
          <NavLink className="Footer-navLink">
           Contact
          </NavLink>
        </ul>
        <hr />
          <p style={{marginTop: '50px'}}>copyright &copy; 2024| <a href="/">The JerryJakes Shopping Moore</a>. All right reserved.</p>
        </div>
    </div>
  )
}
