import React, { useEffect, useState } from 'react';


function ShoesList() {
  const [shoes, setShoes] = useState([]);

  const getData = async ()=> {
    const response = await fetch('http://localhost:8080/api/shoes/');
    if (response.ok) {
      const { shoes } = await response.json();
      setShoes(shoes);
    } else {
      console.error('An error occurred fetching the data')
    }
  }

  useEffect(()=> {
    getData()
  }, []);

  const handleDelete = (shoeId) => {
    fetch(`/api/shoes/${shoeId}/`, { method: 'DELETE' })
      .then(() => {
        setShoes(shoes.filter(shoe => shoe.id !== shoeId));
      })
      .catch(error => console.error('Error deleting shoe:', error));
  };

return (
  <div className="my-5 container">
    <div className="row">
      <h1>Current Shoes</h1>
      <table className="table table-striped m-3">
        <thead>
          <tr>
            <th>Name</th>
            <th>Manufacturer</th>
            <th>Color</th>
            <th>Picture Url</th>
            <th>Bin</th>
          </tr>
        </thead>
        <tbody>
          {shoes.map(shoe => {
            return (
              <tr key={shoe.href}>
                <td>{ shoe.model_name }</td>
                <td>{ shoe.manufacturer }</td>
                <td>{ shoe.color }</td>
                <td>{ shoe.picture_url }</td>
                <td>{ shoe.bin }</td>
                <td><button onClick={() => handleDelete(shoe.id)}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default ShoesList;
