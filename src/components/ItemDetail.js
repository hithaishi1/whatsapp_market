// ItemDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { items } from '../data';
import './css/ItemDetail.css'; // Create a CSS file for styling

const ItemDetail = () => {
  const { itemId } = useParams();
  const selectedItem = items.find((item) => item.id === parseInt(itemId, 10));

  if (!selectedItem) {
    return <div className="item-detail">Item not found.</div>;
  }

  return (
    <div className="item-detail">
      <div className="item-header">
        <div className="item-title">{selectedItem.title}</div>
        <div className="item-status">
          Status: {selectedItem.isSold ? 'Sold' : 'Available'}
        </div>
      </div>
      <div className="item-description">{selectedItem.description}</div>
    </div>
  );
};

export default ItemDetail;
