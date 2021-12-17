
import React from 'react';
import ProfileButton from './ProfileButton';
import { NavLink } from 'react-router-dom';
import './navbar.css'

const NavBar = () => {
  return (
    <nav className='NavBarContainer'>
      <NavLink to='/home' id='wipHeader'>WIP</NavLink>
      <ProfileButton className="NavProfileDropdown"/>
    </nav>
  );
}

export default NavBar;
