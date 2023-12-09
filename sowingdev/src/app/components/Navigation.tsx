'use client';
import Image from 'next/image';
import SowingDevWord from '../img/SowingDevWord.png';

const Navigation: React.FC = () => {
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
                alt="SowingDev Logo"
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
                  <a href="/signup">
                    Signup
                  </a>
                </li>
                <li>
                  <a href="/signin">
                    Login
                  </a>
                </li>
                <li>
                  <a href="/#contact">
                    Contact
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