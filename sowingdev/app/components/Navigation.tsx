'use client';

import Image from 'next/image';
import SowingDevLogo from '../img/SowingDevBlack.png';
import { useSession } from 'next-auth/react';

const Navigation: React.FC = () => {
  const { status } = useSession();
  const isAuthenticated = status === 'authenticated';
  const isLoading = status === 'loading';
  const ImageStyle: React.CSSProperties = { borderRadius: '5px' };

  return (
    <div className="nav-container">
      <nav className="absolute transparent">
        <div className="nav-bar">
          <div className="module left">
            <a href="/">
              <Image
                className="logo"
                src={SowingDevLogo}
                width={100}
                height={100}
                alt="Sowing Dev Logo"
                style={ImageStyle}
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
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/#contact">Contact</a>
                </li>
                {!isAuthenticated && !isLoading && (
                  <>
                    <li>
                      <a href="/signup">Signup</a>
                    </li>
                    <li>
                      <a href="/signin">{'Login'}</a>
                    </li>
                  </>
                )}
                {isAuthenticated && !isLoading && (
                  <li>
                    <a href="/curriculum">Curriculum</a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
