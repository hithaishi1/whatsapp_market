import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import send from './images/send.png';
import plus from './images/plus.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import icon5 from './images/icon5.png';
import icon6 from './images/icon6.png';
import './css/ChatConversation.css';

const ChatConversation = ({ isMarketplaceEnabled }) => {
  const { chatId } = useParams();
  const [typedMessage, setTypedMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [isPlusPopupVisible, setPlusPopupVisible] = useState(false);

  useEffect(() => {
    // Retrieve chat messages from localStorage when the component mounts
    const storedMessages = localStorage.getItem(`chat_${chatId}_messages`);
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, [chatId]);

  useEffect(() => {
    // Save chat messages to localStorage whenever messages change
    localStorage.setItem(`chat_${chatId}_messages`, JSON.stringify(messages));
  }, [chatId, messages]);

  const sendMessage = () => {
    if (typedMessage.trim() === '') return;

    const newMessage = {
      text: typedMessage,
      sender: 'user',
    };

    setMessages([...messages, newMessage]);
    setTypedMessage('');
  };

  const togglePlusPopup = () => {
    setPlusPopupVisible(!isPlusPopupVisible);
  };

  const renderMessages = () => {
    return messages.map((message, index) => (
      <div
        key={index}
        className={`message ${message.sender === 'user' ? 'sender' : 'receiver'}`}
      >
        {message.text}
      </div>
    ));
  };

  return (
    <div className="chat-conversation">
      <div className="chat-messages">{renderMessages()}</div>
      <div className="message-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={typedMessage}
          onChange={(e) => setTypedMessage(e.target.value)}
        />
        
        {typedMessage.trim() && (
          <img src={send} alt="Send" onClick={sendMessage} className="icon" />
        )}
        <img
          src={plus}
          alt="Plus"
          onClick={togglePlusPopup}
          className={`plus-icon ${isPlusPopupVisible ? 'active' : ''}`}
        />
        {isPlusPopupVisible && (
          <div className="popup">
            <div className="popup-content">
              <div className="popup-icon">
                <img src={icon1} alt="Icon 1" />
                <p>Photos</p>
              </div>
              <div className="popup-icon">
                <img src={icon2} alt="Icon 2" />
                <p>Location</p>
              </div>
              <div className="popup-icon">
                <img src={icon3} alt="Icon 3" />
                <p>Contacts</p>
              </div>
              <div className="popup-icon">
                <img src={icon4} alt="Icon 4" />
                <p>Documents</p>
              </div>
              <div className="popup-icon">
                <img src={icon5} alt="Icon 5" />
                <p>Payments</p>
              </div>
              {/* Conditionally render icon6 based on isMarketplaceEnabled */}
              {isMarketplaceEnabled && (
                <div className="popup-icon">
                  <img src={icon6} alt="Icon 6" />
                  <p>Marketplace</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatConversation;
