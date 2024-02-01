import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function HatsList() {
  const [hats, setHats] = useState([]);

  useEffect(() => {
    fetch('/api/hats/')  // Adjust the endpoint as needed
      .then(response => response.json())
      .then(data => setHats(data))
      .catch(error => console.error('Error fetching hats:', error));
  }, []);

  const handleDelete = (hatId) => {
    fetch(`/api/hats/${hatId}/`, { method: 'DELETE' })  // Adjust the endpoint as needed
      .then(() => {
        setHats(hats.filter(hat => hat.id !== hatId));
      })
      .catch(error => console.error('Error deleting hat:', error));
  };

  return (
    <div>
      <h2>Hats List</h2>
      <ul>
        {hats.map(hat => (
          <li key={hat.id}>
            {hat.name} - {hat.description}
            <button onClick={() => handleDelete(hat.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <Link to="/hats/new">Add New Hat</Link>
    </div>
  );
}

export default HatsList;
