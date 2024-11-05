import React from 'react';
import './page.css';
import Link from 'next/link';
import Image from 'next/image';
import { rocketLogo, signupLogo } from '../../public/images/images.js';
import { BackgroundVideo } from './components/components.js';

export default function Page() {
  return (
    <div className="main-page">
      <div className="background-main-page">
        <BackgroundVideo></BackgroundVideo>
      </div>
      <div className="main-page-content">
        <h1>Yes A Fan Of These Games</h1>
        <h3>by neglectPanda</h3>

        <h2 className='welcome-txt'>WELCOME</h2>
        <p>This is neglectPanda. Don't question my alias. This is my first 
          big project involving full stack development. Since I love vintage 
          games, I got inspired to make this site. If you are a fellow programmer
          like me, feel free to go to the <code><Link href="{somewhere}"> Docs Page </Link></code> 
          and you know, learn, I guess. Everything will be handled in the docs page. For
          just players, enjoy and dominate the system *<i>evil laugh</i>*.
        </p>

        <div className="btn-containers">
          <Link href="/Login">
            <button type="button" className='login-main'>
              <Image alt='Rocket' src={rocketLogo}></Image>
              <h2 className='main-btn-text'>Login</h2>
            </button>
          </Link>
          <Link href="somewhere">
            <button type="button" className='signup-main'>
              <Image alt='Signup' src={signupLogo}></Image>
              <h2 className='main-btn-text'>Signup</h2>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}