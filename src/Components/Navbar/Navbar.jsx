import React from 'react'
import NavbarFirst from './NavbarFirst';
import MobileNav from './MobileNav';
import MediaQuery from 'react-responsive'

const Navbar = () => {

  return (
    <div>
    <MediaQuery maxWidth={480}>
    <MobileNav/>
  </MediaQuery>
  <MediaQuery minWidth={1080}>
    <NavbarFirst/>
  </MediaQuery>
    </div>
  )
}

export default Navbar