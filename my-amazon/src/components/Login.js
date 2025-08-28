import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-side-image"></div>
      <div className="login-form-container">
        <h1 className="login-title">Log in to Exclusive</h1>
        <p className="login-subtitle">Enter your details below</p>
        <form className="login-form">
          <input type="email" placeholder="Email or Phone Number" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button type="submit" className="primary-button">Log In</button>
        </form>
        <p className="login-footer"><a href="/forgot-password" className="login-link">Forget Password?</a></p>
      </div>
    </div>
  );
};

export default Login;
