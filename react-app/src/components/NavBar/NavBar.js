
import React from 'react';
import ProfileButton from './ProfileButton';
import { NavLink } from 'react-router-dom';
import './navbar.css'

const NavBar = () => {
  return (
    <nav className='NavBarContainer'>
      <NavLink to='/home' id='wipHeader'>WIP</NavLink>
      <div className='NavBarButtons'>
        <NavLink to='/newProject' className='startProject'>
          <i class="fas fa-pencil-alt"></i>
        </NavLink>
        <button type='button' className='userButton'>
          <i class="fas fa-search fa-lg"></i>
        </button>
        <ProfileButton className="NavProfileDropdown"/>
      </div>
    </nav>
  );
}

export default NavBar;
