// Header.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import logo from './images/whatsapp-logo.png';
import market from './images/marketplace.png';
import './css/Header.css'; // Create a CSS file for styling

function Header({ onGroupSettingsClick }) {
  return (
    <header className="header">
      <div className="header-icons">
      <Link to="/">
        <img src={logo} alt="WhatsApp Pay" className="icon" onClick={onGroupSettingsClick}/>
        </Link>
      </div>
      <div className="header-title">
        <h1>WhatsApp Marketplace</h1>
      </div>
      <div className="header-icons">
        {/* Replace yourLogoImagePath with the actual path to your group settings logo */}
        <Link to="/group-settings">
          <img src={market} alt="Marketplace" className="icon" />
        </Link>
        
      </div>
    </header>
  );
};

export default Header;
