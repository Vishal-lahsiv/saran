// src/Login.js
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getData } from '../Json/Db';
import './Login.css';
import { Context } from './GlobeData';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');
  const {LogIn} = useContext(Context);
  

  const navigate=useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmailError('');
    setPasswordError('');
    setLoginError('');
    let hasError = false;

    if (!email) {
      setEmailError('Email is required');
      hasError = true;
    }
    
    if (!password) {
      setPasswordError('Password is required');
      hasError = true;
    }
    
    if (hasError) return;

    try {
      const response = await getData();
      const user = response.data.find((user) => user.email === email);
      const uindex = response.data.findIndex((user) => user.email === email);

      if (!user) {
        setLoginError('Invalid email address');
      } else if (user.pass !== password) {
        setLoginError('Incorrect password');
      } else {
        console.log(uindex);
        LogIn(user);
        console.log('Login successful:', user);
        alert('Login successful');
        navigate('/');
        // Redirect or perform further actions
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoginError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-image">
        {/* Image background is set in CSS */}
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="error email-error">{emailError}</p>}
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="error password-error">{passwordError}</p>}
        </div>
        {loginError && <p className="error login-error">{loginError}</p>}
        <button type="submit">Login</button>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </form>
    </div>
  );
};

export default Login;
