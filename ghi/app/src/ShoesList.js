import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ShoesList() {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    fetch('/api/shoes/')  // Adjust the endpoint as needed
      .then(response => response.json())
      .then(data => setShoes(data))
      .catch(error => console.error('Error fetching shoes:', error));
  }, []);

  const handleDelete = (shoeId) => {
    fetch(`/api/shoes/${shoeId}/`, { method: 'DELETE' })  // Adjust the endpoint as needed
      .then(() => {
        // Remove the shoe from the list upon successful deletion
        setShoes(shoes.filter(shoe => shoe.id !== shoeId));
      })
      .catch(error => console.error('Error deleting shoe:', error));
  };

  return (
    <div>
      <h2>Shoes List</h2>
      <ul>
        {shoes.map(shoe => (
          <li key={shoe.id}>
            {shoe.name} - Size: {shoe.size}
            <button onClick={() => handleDelete(shoe.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Link to="/shoes/new">Add New Shoe</Link>
    </div>
  );
}

export default ShoesList;
