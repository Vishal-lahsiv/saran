import React, { useState, useEffect } from 'react';
import { showData, showInventory } from '../Json/Db';

const InventoryDetails = () => {
  const [inventoryData, setInventoryData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await showInventory(); 
      setInventoryData(response.data); 
    } catch (error) {
      console.error("Error fetching inventory data:", error);
    }
  };

  return (
    <div className='inventoryDetails'>
      <h1>Inventory Details</h1>
      <ul>
        {inventoryData.map(item => (
          <li key={item.id}>
            <strong>{item.id}:</strong> {item.Quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InventoryDetails;
