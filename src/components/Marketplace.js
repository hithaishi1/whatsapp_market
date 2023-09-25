import React, { useState } from 'react';
import SearchBar from './SearchBar'; // Import the SearchBar component

const Marketplace = ({ isMarketplaceEnabled, toggleMarketplace }) => {
  // Mock data for item listings (you can replace this with actual data)
  const [listings, setListings] = useState([
    { id: 1, title: 'Item 1', description: 'Description for Item 1', price: 10 },
    { id: 2, title: 'Item 2', description: 'Description for Item 2', price: 20 },
    // Add more items as needed
  ]);

  // State to track the selected item for displaying details
  const [selectedItem, setSelectedItem] = useState(null);

  // State to track the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle item selection and display details
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  // Function to close the item details view
  const closeItemDetails = () => {
    setSelectedItem(null);
  };

  // Function to handle search
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Filter the listings based on the search query
  const filteredListings = listings.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="marketplace">
      <h2>Marketplace</h2>

      {/* Toggle switch for enabling/disabling the marketplace */}
      {/* <label className="switch">
        <input
          type="checkbox"
          checked={isMarketplaceEnabled}
          onChange={toggleMarketplace}
        />
        <span className="slider"></span>
      </label> */}

      {/* Include the SearchBar component */}
      <SearchBar onSearch={handleSearch} />

      <ul className="item-list">
        {filteredListings.map((item) => (
          <li key={item.id} onClick={() => handleItemClick(item)}>
            <h3>{item.title}</h3>
            <p>${item.price}</p>
          </li>
        ))}
      </ul>

      {selectedItem && (
        <div className="item-details">
          <button onClick={closeItemDetails}>Close</button>
          <h3>{selectedItem.title}</h3>
          <p>{selectedItem.description}</p>
          <p>Price: ${selectedItem.price}</p>
        </div>
      )}
    </div>
  );
};

export default Marketplace;
