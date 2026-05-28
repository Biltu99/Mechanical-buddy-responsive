import './ProfileModal.css';
import { useState } from 'react';
import {
  FiUser,
  FiClock,
  FiGlobe,
  FiHelpCircle,
  FiUsers,
  FiLogOut,
  FiCheck,
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const ProfileModal = ({ closeModal }) => {
  const navigate = useNavigate();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('english');

  const languages = [
    { code: 'english', name: 'English', flag: '🇬🇧' },
    { code: 'bengali', name: 'বাংলা', flag: '🇧🇩' },
    { code: 'hindi', name: 'हिन्दी', flag: '🇮🇳' },
  ];

  const handleLanguageChange = (langCode, langName) => {
    setSelectedLanguage(langCode);
    setShowLanguageMenu(false);
    // Here you can add your language change logic
    console.log(`Language changed to: ${langName}`);
    // You can implement i18n or context API here
  };

  return (
    <div className="profile-overlay" onClick={closeModal}>
      <div className="profile-modal" onClick={(e) => e.stopPropagation()}>
        <div className="profile-top">
          <div className="profile-avatar-wrapper">
            <img
              src="https://i.pravatar.cc/100"
              alt="profile"
              className="profile-avatar"
            />
            <span className="online-dot"></span>
          </div>
          <div>
            <h3>Mechanical Buddy</h3>
            <p>mechanicalbuddy@example.com</p>
          </div>
        </div>

        <div className="profile-menu">
          <button
            className="menu-item"
            onClick={() => {
              closeModal();
              navigate('/division');
            }}
          >
            <div className="language-left">
              <FiUser />
              Sign In / Sign Up
            </div>
          </button>

          {/* Language Dropdown */}
          <div className="language-dropdown-container">
            <button
              className="menu-item language-btn"
              onClick={() => setShowLanguageMenu(!showLanguageMenu)}
            >
              <div className="language-left">
                <FiGlobe />
                Language
              </div>
              <span className="language-arrow">▼</span>
            </button>

            {showLanguageMenu && (
              <div className="language-menu">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`language-option ${selectedLanguage === lang.code ? 'active' : ''}`}
                    onClick={() => handleLanguageChange(lang.code, lang.name)}
                  >
                    <span className="language-flag">{lang.flag}</span>
                    <span className="language-name">{lang.name}</span>
                    {selectedLanguage === lang.code && (
                      <FiCheck className="language-check" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="menu-item">
            <div className="language-left">
              <FiClock />
              Booking History
            </div>
          </button>

          <button className="menu-item">
            <div className="language-left">
              <FiHelpCircle />
              Support
            </div>
          </button>

          <button className="menu-item">
            <div className="language-left">
              <FiUsers />
              Community
            </div>
          </button>

          <button className="menu-item logout-btn">
            <div className="language-left">
              <FiLogOut />
              Sign Out
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;