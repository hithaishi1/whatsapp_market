// ChatList.js
import React from 'react';
import { Link } from 'react-router-dom';
import user from './images/user.png';
import './css/ChatList.css';

const ChatList = ({ chats }) => {
  return (
    <div className="chat-list">
      {chats.map((chat) => (
        <Link key={chat.id} to={`/chat/${chat.id}`}>
          <div className="user">
            <img
              src={user} // Replace with the actual URL of the avatar image
              alt={`${chat.name}'s Avatar`}
              className="avatar"
            />
            <div className="user-info">
              <div className="user-name">{chat.name}</div>
              {/* Add additional user information if needed */}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ChatList;
