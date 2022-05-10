import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
          <NavLink to="/">
              <img src={require('../../images/logo.png')} alt='logo'/>
          </NavLink>
          <Bars />
          <NavMenu>
              <NavLink to="/home" activeStyle>
                  Home
              </NavLink>
              <NavLink to="/project" activeStyle>
                  Project
              </NavLink>
              <NavLink to="/gallery" activeStyle>
                  Gallery
              </NavLink>
              <NavLink to="/event" activeStyle>
                  Event
              </NavLink>
              <NavLink to="/about-us" activeStyle>
                  About us
              </NavLink>
          </NavMenu>
          <NavBtn>
              <NavBtnLink to="/contact-us">Contact us</NavBtnLink>
          </NavBtn>
      </Nav>
    </>
  )
}

export default Navbar