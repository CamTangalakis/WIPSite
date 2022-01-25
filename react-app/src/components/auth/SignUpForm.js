import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './forms.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [profilePic, setProfilePic] = useState('')
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const checkPass = () => {
    if (password) {
      if (password === repeatPassword) {
      document.getElementById('message').style.color = 'darkblue';
      document.getElementById('message').style.fontWeight = 600;
      document.getElementById('message').innerHTML = 'Matching!';
    } else {
      document.getElementById('message').style.color = 'darkred';
      document.getElementById('message').innerHTML = 'Passwords do not match';
    }}
  }

  const checkEmail = () => {
    if (String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      return true
    } else {
      setErrors([...errors, 'Please enter valid email'])
      return false
    };
  };

  if (user) {
    return <Redirect to='/home' />;
  }

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword && checkEmail()) {
      const data = await dispatch(signUp(username, email, password, profilePic));
      if (data) {
        setErrors(data)
      }
    }
  };

  return (
    <form onSubmit={onSignUp} className='signupContainer'>
      <h1 className='SignupHeader'>Sign Up</h1>
      <div className='errorContainer'>
        {errors.map((error, ind) => (
          <div className='errors' key={ind}>{error}</div>
        ))}
      </div>
      <div className='inputContainer'>
        <label className='usernameLabel'>User Name</label>
        <input
          className='usernameInput'
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
          required='required'
        ></input>
      </div>
      <div className='inputContainer'>
        <label className='emailLabel'>Email</label>
        <input
          className='emailInput'
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
          required='required'
        ></input>
      </div>
      <div className='inputContainer'>
        <label className='passwordLabel'>Password</label>
        <input
          className='passwordInput'
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
          onKeyUp={checkPass()}
          required='required'
        ></input>
      </div>
      <div className='inputContainer'>
        <label className='confirmLabel'>Repeat Password</label>
        <input
          className='confirmInput'
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          onKeyUp={checkPass()}
          value={repeatPassword}
          required='required'
        ></input>
        <span id='message' />
      </div>
      <div className='buttonsContainer'>
        <button type='submit' className='submitButton'>Sign Up</button>
        <NavLink to='home' className='homeButton'>Cancel</NavLink>
      </div>
    </form>
  );
};

export default SignUpForm;
