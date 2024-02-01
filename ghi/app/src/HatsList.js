import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function HatsList() {
  const [hats, setHats] = useState([]);

  const getData = async ()=> {
    const response = await fetch('http://localhost:8090/api/hats/');
    if (response.ok) {
      const { hats } = await response.json();
      setHats(hats);
    } else {
      console.error('An error occurred fetching the data')
    }
  }

  useEffect(()=> {
    getData()
  }, []);

  // useEffect(() => {
  //   fetch('/api/hats/')  // Adjust the endpoint as needed
  //     .then(response => response.json())
  //     .then(data => setHats(data))
  //     .catch(error => console.error('Error fetching hats:', error));
  // }, []);

  const handleDelete = (hatId) => {
    fetch(`/api/hats/${hatId}/`, { method: 'DELETE' })  // Adjust the endpoint as needed
      .then(() => {
        setHats(hats.filter(hat => hat.id !== hatId));
      })
      .catch(error => console.error('Error deleting hat:', error));
  };

  return (
    <div className="my-5 container">
      <div className="row">
        <h1>Current Hats</h1>

        <table className="table table-striped m-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {hats.map(hat => {
              return (
                <tr key={hat.href}>
                  <td>{ hat.name }</td>
                  <td>{ hat.location }</td>
                  <td><button onClick={() => handleDelete(hat.id)}>Delete</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
//   return (
//     <div>
//       <h2>Hats List</h2>
//       <ul>
//         {hats.map(hat => (
//           <li key={hat.id}>
//             {hat.name} - {hat.description}
//             <button onClick={() => handleDelete(hat.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//       <Link to="/hats/new">Add New Hat</Link>
//     </div>
//   );
// }

export default HatsList;
