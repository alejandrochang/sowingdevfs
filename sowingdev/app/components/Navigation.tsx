'use client';

import Image from 'next/image';
import SowingDevWord from '../img/SowingDevWord.png';
import { signOut, useSession } from "next-auth/react"

const Navigation: React.FC = () => {
  const { data: session, status } = useSession();
  const sessionText = status === 'authenticated' ? 'Logout' : 'Login';
  const linkStyle = status === 'authenticated' ? {color: '#ea4545'} : {};
  const handleSignOut = async () => {
    if (status === 'authenticated') {
      await signOut({ callbackUrl: '/signin' });
      return;
    } 
  }

  return (
    <div className="nav-container">
      <nav className="absolute transparent">
        <div className="nav-bar">
          <div className="module left">
            <a href="/">
              <Image
                className="logo logo-light"
                src={SowingDevWord}
                width={200}
                height={100}
                alt="Sowing Dev Logo"
                style={{ borderRadius: '5px'}}
              />
            </a>
          </div>
          <div className="module widget-handle mobile-toggle right visible-sm visible-xs">
            <i className="ti-menu"></i>
          </div>
          <div className="module-group right">
            <div className="module left">
              <ul className="menu">
                <li>
                  <a href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/#contact">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/signup">
                    Signup
                  </a>
                </li>
                <li onClick={handleSignOut}>
                  <a href="/signin" style={linkStyle}>
                    {sessionText}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navigation;