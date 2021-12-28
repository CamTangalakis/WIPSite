
import React, { useState } from 'react';
import ProfileButton from './ProfileButton';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchBar from '../Search/searchBar';
import './navbar.css'

const NavBar = () => {
  const user = useSelector(state => state.session.user)
  const [showSearch, setShowSearch] = useState(false)
  return (
    <nav className='NavBarContainer'>
      <NavLink to='/home' id='wipHeader'>WIP</NavLink>
      
      <div className='NavBarButtons'>
        {user ? (
          <NavLink to='/newProject' className='MenuButton create'>
            <i className="fas fa-pencil-alt"></i>
          </NavLink>
        ): null}

        <button type='button' className='MenuButton' onClick={()=> setShowSearch(!showSearch)}>
          {showSearch ? (
            <i className="fas fa-chevron-right fa-lg"></i>
          ): (<i className="fas fa-search fa-lg"></i>)}
        </button>

        {showSearch && <SearchBar /> }

        <ProfileButton className="NavProfileDropdown"/>
      </div>
    </nav>
  );
}

export default NavBar;
