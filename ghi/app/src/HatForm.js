import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HatForm() {

  const [location, setLocation] = useState('');
  const [name, setName] = useState('');
  const [fabric, setFabric] = useState('');
  const [style_name, setStyleName] = useState('');
  const [color, setColor] = useState('');
  const [pic_url, setPic_Url] = useState('');
  const [locations, setLocations] = useState([]);

  const fetchData = async () => {
    const url = 'http://localhost:8100/api/locations/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setLocations(data.locations);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  
//   const [hat, setHat] = useState({
//     name: '',
//     fabric: '',
//     style_name: '',
//     color: '',
//     pic_url: '',
//     location: '',
//   });
//   const navigate = useNavigate();

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setHat(prevHat => ({
//       ...prevHat,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     fetch('/api/hats/', {  // Adjust the endpoint as needed
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(hat)
//     })
//     .then(response => response.json())
//     .then(() => {
//       alert('Hat added successfully!');
//       navigate('/hats'); // Redirect to the hats list
//     })
//     .catch(error => {
//       console.error('Error adding hat:', error);
//       alert('Failed to add hat.');
//     });
//   };

//   return (
//     <div>
//       <h2>Add New Hat</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={hat.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Description:</label>
//           <textarea
//             name="description"
//             value={hat.description}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Add Hat</button>
//       </form>
//     </div>
//   );
// }

// export default HatForm;
}
