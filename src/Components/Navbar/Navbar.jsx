
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa'
import React, { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useRef } from 'react'

const Navbar = () => {
  const navRef = useRef();
  function toggleRefBtn () {
    navRef.current.classList.toggle("navbarResponsive")
  }

  return (
    <header className='nav-wrapper'>
        
      <div className="container nav-content">
        <h4><FaShoppingCart /> </h4>
      <nav ref={navRef}>
        <ul className="menu-hide">
        <NavLink className="nav-link" to="/">
                 Home
          </NavLink>
        <NavLink className="nav-link" to="/about">
                 About Us
          </NavLink>
        <NavLink className="nav-link" to="/other">
                  Other Products
          </NavLink>
        <NavLink className="nav-link" to="/cart">
            Shop
          </NavLink>
        <NavLink className="nav-link" to="/contact">
                 Contact Us
          </NavLink>
        <button className='nav-close' onClick={toggleRefBtn}>
          <FaTimes />
        </button>
        </ul>
      </nav>
      <button className='navC'>
        <FaBars  onClick={toggleRefBtn}/>
        </button>
      </div>
    </header>
  )
}


export  default Navbar 
