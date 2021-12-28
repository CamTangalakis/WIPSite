
import React from 'react';
import ProfileButton from './ProfileButton';
import { NavLink } from 'react-router-dom';
import './navbar.css'
import { useSelector } from 'react-redux';

const NavBar = () => {
  const user = useSelector(state => state.session.user)
  return (
    <nav className='NavBarContainer'>
      <NavLink to='/home' id='wipHeader'>WIP</NavLink>
      <div className='NavBarButtons'>
        {user ? (
          <NavLink to='/newProject' className='MenuButton create'>
            <i class="fas fa-pencil-alt"></i>
          </NavLink>
        ): null}
        <button type='button' className='MenuButton'>
          <i class="fas fa-search fa-lg"></i>
        </button>
        <ProfileButton className="NavProfileDropdown"/>
      </div>
    </nav>
  );
}

export default NavBar;
