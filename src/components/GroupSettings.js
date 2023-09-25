import React, { useState } from 'react';
import './css/GroupSettings.css';
import Marketplace from './Marketplace';
import ChatConversation from './ChatConversation';

const GroupSettings = ({ onClose }) => {
  const [isMarketplaceEnabled, setMarketplaceEnabled] = useState(false);

  const toggleMarketplace = () => {
    setMarketplaceEnabled(!isMarketplaceEnabled);
  };

  return (
    <div className="group-settings">
      <button className="close-button" onClick={onClose}>
        Close
      </button>
      <p>
        <h2>Group Settings</h2>
        <label className="switch">
          <input
            type="checkbox"
            checked={isMarketplaceEnabled}
            onChange={toggleMarketplace}
          />
          <span className="slider"></span>
        </label>
        <span className="label-text">Enable Marketplace</span>
      </p>

      {isMarketplaceEnabled && <Marketplace />}
      <ChatConversation isMarketplaceEnabled={isMarketplaceEnabled} />
    </div>
  );
};

export default GroupSettings;
