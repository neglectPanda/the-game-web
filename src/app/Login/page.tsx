import React from 'react';
import { rocketLogo } from '../../../public/images/images';
import Image from 'next/image';
import './login.css';
import Link from 'next/link';
import { BackgroundVideo } from '../components/components.js';

//ADD ERROR MESSAGES IF ACC DOES NOT EXIST

const LoginPage = () => {
  return (
    <div className='login-page'>
        <div className="background">
          <BackgroundVideo></BackgroundVideo>
        </div>
        
        <div className="login-content">
          <h1>Login Here</h1>

          <form action="">
              <label htmlFor="account-name-login">Account Name</label>
              <input type="text" className='account-name-login' placeholder='e.g. John Doe' />

              <label htmlFor="login-password">Password</label>
              <input type="password" className='login-password' />

              <div className="login-btn-container">
                <button type="submit" className="login-btn">
                    <Image alt='Rocket' src={rocketLogo}></Image>
                    <h3>Login</h3>
                </button>
              </div>
          </form>

          <p>Don't have an account yet? <Link href="smthn">Signup Here</Link></p>
        </div>
    </div>
  )
}

export default LoginPage