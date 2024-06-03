import React from 'react'
import './CSS/LoginSigup.css'

const LoginSignup = () => {
  return (
    <div className='loginsigup'>
        <div className="loginsigup-container">
          <h1>Sign Up</h1>
          <div className="loginsigup-fields">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
          </div>
          <button>Continue</button>
          <p className='loginsigup-login'>Already have an account? <span>Login Here</span></p>
          <div className="loginsigup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing I agree to the terms of use and privacy policy.</p>
          </div>
        </div>
    </div>
  )
}

export default LoginSignup