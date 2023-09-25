// ItemList.js
import React from 'react';
import { items } from '../data'; // Simulated data

const ItemList = () => {
  return (
    <div>
      <h3>Items for Sale</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
