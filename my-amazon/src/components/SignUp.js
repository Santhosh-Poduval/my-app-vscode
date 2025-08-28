import React from 'react';
import './SignUp.css';

const SignUp = () => {
  return (
    <div className="signup-page">
      <div className="signup-side-image"></div>
      <div className="signup-form-container">
        <h1 className="signup-title">Create an account</h1>
        <p className="signup-subtitle">Enter your details below</p>
        <form className="signup-form">
          <div className="input-group">
            <label htmlFor="name" className="input-label">Name</label>
            <input id="name" type="text" placeholder="Enter your name" className="input-field" />
          </div>
          <div className="input-group">
            <label htmlFor="email" className="input-label">Email or Phone Number</label>
            <input id="email" type="email" placeholder="Enter your email or phone number" className="input-field" />
          </div>
          <div className="input-group">
            <label htmlFor="password" className="input-label">Password</label>
            <input id="password" type="password" placeholder="Enter your password" className="input-field" />
          </div>
          <button type="submit" className="primary-button">Create Account</button>
        </form>
        <button className="google-signup">Sign up with Google</button>
        <p className="signup-footer">Already have an account? <a href="/login" className="signup-link">Log in</a></p>
      </div>
    </div>
  );
};

export default SignUp;
