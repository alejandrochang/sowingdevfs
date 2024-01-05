'use client';

import Image from 'next/image';
import SowingDevLogo from '../img/SowingDevBlack.png';
import { useSession } from 'next-auth/react';

const Navigation: React.FC = () => {
  const { status } = useSession();

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
                style={{ borderRadius: '5px' }}
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
                {status !== 'authenticated' && (
                  <>
                    <li>
                      <a href="/signup">Signup</a>
                    </li>
                    <li>
                      <a href="/signin">{'Login'}</a>
                    </li>
                  </>
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
