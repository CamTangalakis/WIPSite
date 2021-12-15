import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import { NavLink } from 'react-router-dom';
import { login } from '../../store/session';
import { useHistory } from 'react-router';
import SignupModal from '../auth/SignupModal';
import LoginModal from '../auth/LoginModal';

function ProfileButton() {
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        return history.push('/');
      };

    const loginGuest = (e) => {
        e.preventDefault();
        dispatch(login('demo@aa.io', 'password'));
        return history.push('/home');
    };

    let sessionLinks;

    if (sessionUser) {
        sessionLinks = (
        <div className="NavButtons">
            <button className="NavButton" onClick={logout}>
                Log Out
            </button>
        </div>
    );
    } else {
        sessionLinks = (
        <div className="NavButtons">
            <LoginModal className="NavButton" />

            <SignupModal className="NavButton" />

            <button type="button" onClick={loginGuest} className="NavButton">
                Guest User
            </button>
        </div>
    );
  }

  return (
    <div className="NavProfileDropdown">
      {!showMenu ? (
        <div>
          <button className="MenuButton" onClick={openMenu}>
            open
          </button>
        </div>
      ) : (
        <button className="MenuButton" onClick={closeMenu}>
          close
        </button>
      )}

      {showMenu && (
        <div className="profile-dropdown">
          {sessionUser ? (
            <div className='profileButtons'>
              <li className="WelcomeUser">Welcome, {sessionUser.username}!</li>
              <NavLink to='/profile' exact={true} activeClassName='active' className='NavHomeButton' onClick={closeMenu}>
                Profile
              </NavLink>

              <NavLink to='/favorites' exact={true} activeClassName='active' className='NavHomeButton' onClick={closeMenu}>
                Favorites
              </NavLink>
            </div>
          ) : null}

          <NavLink to='/home' exact={true} activeClassName='active' className='NavHome' onClick={closeMenu} >
            Home
          </NavLink>
          {sessionLinks}
        </div>
      )}
    </div>
  );
}



export default ProfileButton;
