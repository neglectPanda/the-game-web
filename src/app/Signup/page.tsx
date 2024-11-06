'use client';
import React, { useState } from 'react';
import './signup.css';
import { BackgroundVideo } from '../components/components.js';
import Image from 'next/image';
import { showPassword, hidePassword } from '../../../public/images/images';

const SignupPage = () => {
    const [isVerified, setIsVerified] = useState(1);
    const [isShown, setIsShown] = useState(false);

    const handleVerify = (e) => {
        e.preventDefault();
        // Logic for verification here
        setIsVerified(2);
    }

    const showPasswordToggle = (e) => {
        e.preventDefault();
        //logic for show password
        setIsShown((prevShown) => !prevShown); // Toggle between true and false
    }

    return (
        <div className='signup-page'>
            <div className="background">
                <BackgroundVideo />
            </div>
            <div className="signup-content">
                <h1>Signup</h1>
                
                <form action="">
                    {isVerified === 1 && (
                        <>
                            <label htmlFor="signup-email">Email</label>
                            <input type="email" placeholder='johndoe@gmail.com' className='signup-email' />
                            
                            <label htmlFor="otp-input">Enter OTP</label>
                            <input type="number" id="otp-input" className='otp-input' placeholder='123456' />
                            
                            <button type="button" onClick={handleVerify}>Verify</button>
                        </>
                    )}

                    {isVerified === 2 && (
                        <>
                            <label htmlFor="account-name">Enter Account Name</label>
                            <input type="text" id="account-name" className='account-name' placeholder='John Doe' />

                            <label htmlFor="">Email (Re-entered)</label>
                            <input type="email" id='email-signup' className='signup-email' placeholder='johndoe@gmail.com' />

                            <div className="passwords-container">
                                <label htmlFor="password">Password</label>
                                <input 
                                    className='password-signup' 
                                    id='password' 
                                    type={isShown ? 'text' : 'password'}
                                />

                                <div className="confirm-password-container">
                                    <label htmlFor="confirm-password">Confirm Password</label>
                                    <div className="confirmpass-input-showpass">
                                        <input 
                                            type={isShown ? 'text' : 'password'}
                                            className='confirm-password-signup' 
                                            id='confirm-password' 
                                        />
                                        <button type="button" className='show-pass-btn' onClick={showPasswordToggle}>
                                            <Image
                                                src={isShown ? hidePassword : showPassword}
                                                alt={isShown ? 'Hide Password' : 'Show Password'}
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </form>
            </div>
        </div>
    )
}

export default SignupPage;
