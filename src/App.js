// App.js (React Router v6 syntax)
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Routes and Link

import Header from './components/Header';
import GroupSettings from './components/GroupSettings';
import ChatList from './components/ChatList'; // Import the ChatList component
import ChatConversation from './components/ChatConversation'; // Import the ChatConversation component
import Marketplace from './components/Marketplace';
import ItemList from './components/ItemList';
import ItemDetail from './components/ItemDetail';
import ItemForm from './components/ItemForm';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [isMarketplaceEnabled, setMarketplaceEnabled] = useState(false);
  const [isGroupSettingsOpen, setGroupSettingsOpen] = useState(false);

  // Sample chat data (you can replace this with your own data)
  const chats = [
    { id: 1, name: 'Friend 1', messages: [] },
    { id: 2, name: 'Friend 2', messages: [] },
    // Add more chat data as needed
  ];

  const handleChatClick = (chat) => {
    setSelectedChat(chat);
  };

  const toggleGroupSettings = () => {
    setGroupSettingsOpen(!isGroupSettingsOpen);
  };

  return (
    <Router>
      <div className="App">
      <Header onGroupSettingsClick={toggleGroupSettings} />

        {/* Define your routes */}
        <Routes>
          <Route path="/" element={<ChatList chats={chats} onChatClick={handleChatClick} />} />
          <Route path="/chat/:chatId" element={<ChatConversation />} />
          <Route path="/group-settings" element={<GroupSettings />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/items/:itemId" element={<ItemDetail />} />
          <Route path="/sell" element={<ItemForm />} />
          
        </Routes>

        {/* Display the chat conversation when a chat is selected */}
        {selectedChat && <ChatConversation chat={selectedChat} />}
        {isGroupSettingsOpen && (
          <div className={`group-settings-popup ${isGroupSettingsOpen ? 'slide-in' : ''}`}>
            <div className="group-settings-content">
            <GroupSettings onClose={toggleGroupSettings} />
          </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
