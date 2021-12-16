import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import { NavLink } from 'react-router-dom';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onLogin} className='loginContainer'>
      <h1 className='LoginHeader'>Log In</h1>
      <div className='errorContainer'>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className='inputContainer'>
        <label htmlFor='email' className='emailLabel'>Email</label>
        <input
          className='emailInput'
          name='email'
          type='text'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div className='inputContainer'>
        <label htmlFor='password' className='passwordLabel'>Password</label>
        <input
          className='passwordInput'
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
        />
        <div className='buttonContainer'>
          <button type='submit' className='submitButton'>Login</button>
          <NavLink to='home' className='homeButton'>Cancel</NavLink>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
