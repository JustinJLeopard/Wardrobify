import React, { useEffect, useState } from 'react';


function BinList() {
  const [bins, setBins] = useState([]);

  const getData = async ()=> {
    const response = await fetch('http://localhost:8100/api/bins/');
    if (response.ok) {
      const { bins } = await response.json();
      setBins(bins);
    } else {
      console.error('An error occurred fetching the data')
    }
  }

  useEffect(()=> {
    getData()
  }, []);

  return (
    <div className="my-5 container">
      <div className="row">
        <h1>Current Bins</h1>
        <table className="table table-striped m-3">
          <thead>
            <tr>
              <th>Id</th>
              <th>Closet Name</th>
              <th>Bin Number</th>
              <th>Bin Size</th>
            </tr>
          </thead>
          <tbody>
            {bins.map(bin => {
              return (
                <tr key={bin.href}>
                  <td>{ bin.id }</td>
                  <td>{ bin.closet_name }</td>
                  <td>{ bin.bin_number }</td>
                  <td>{ bin.bin_size }</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BinList;
