import './Navbar.css';
import { useState, useEffect } from 'react';
import { IoNotificationsOutline } from 'react-icons/io5';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import ProfileModal from '../ProfileModal/ProfileModal';
import Logo from '../Logo/Logo';

const Navbar = () => {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav className="navbar container">
        <div className="logo-area">
          <Logo />
        </div>

        <ul className="nav-links">
          <li>Dashboard</li>
          <li>Services</li>
          <li>Mechanics</li>
          <li>Emergency</li>
        </ul>

        <div className="nav-right">
          <div className="location-box">
            <HiOutlineLocationMarker />
            {!isMobile ? "Rajpur Sonarpur, West Bengal" : "Location"}
          </div>

          <div className="notification">
            <IoNotificationsOutline />
            <span></span>
          </div>

          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
            className="profile"
            onClick={() => setShowProfileModal(true)}
          />
        </div>
      </nav>

      {showProfileModal && (
        <ProfileModal closeModal={() => setShowProfileModal(false)} />
      )}
    </>
  );
};

export default Navbar;