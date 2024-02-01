import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ShoeForm() {
  const [shoe, setShoe] = useState({
    name: '',
    size: '',
    description: ''
  });
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setShoe(prevShoe => ({
      ...prevShoe,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Adjust the endpoint as needed
    fetch('/api/shoes/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(shoe)
    })
    .then(response => response.json())
    .then(() => {
      alert('Shoe added successfully!');
      navigate('/shoes'); // Redirect to the shoes list
    })
    .catch(error => {
      console.error('Error adding shoe:', error);
      alert('Failed to add shoe.');
    });
  };

  return (
    <div>
      <h2>Add New Shoe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={shoe.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Size:</label>
          <input
            type="text"
            name="size"
            value={shoe.size}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={shoe.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Shoe</button>
      </form>
    </div>
  );
}

export default ShoeForm;
