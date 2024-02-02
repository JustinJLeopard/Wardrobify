import React, { useEffect, useState } from 'react';


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

  const handleDelete = (hatId) => {
    fetch(`/api/hats/${hatId}/`, { method: 'DELETE' })
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
              <th>Fabric</th>
              <th>Style Name</th>
              <th>Color</th>
              <th>Picture URL</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {hats.map(hat => {
              return (
                <tr key={hat.href}>
                  <td>{ hat.name }</td>
                  <td>{ hat.fabric }</td>
                  <td>{ hat.style_name }</td>
                  <td>{ hat.color }</td>
                  <td>{ hat.pic_url }</td>
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

export default HatsList;
