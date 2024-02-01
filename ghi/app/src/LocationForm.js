import React, { useEffect, useState } from 'react';


function LocationForm() {

  const [closet_name, setCloset_Name] = useState('');
  const [section_number, setSection_Number] = useState('');
  const [shelf_number, setShelf_Number] = useState('');
  const [hasCreated, setHasCreated] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};

    data.closet_name = closet_name;
    data.section_number = section_number;
    data.shelf_number = shelf_number;

    const locationUrl = 'http://localhost:8100/api/locations/';
    const fetchOptions = {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const locationResponse = await fetch(locationUrl, fetchOptions);
    if (locationResponse.ok) {
          setCloset_Name('');
          setSection_Number('');
          setShelf_Number('');
          setHasCreated(true);
    }
  }

  const handleChangeCloset_Name = (event) => {
    const value = event.target.value;
    setCloset_Name(value);
  }

  const handleChangeSection_Number = (event) => {
    const value = event.target.value;
    setSection_Number(value);
  }

  const handleChangeShelf_Number = (event) => {
    const value = event.target.value;
    setShelf_Number(value);
  }

  let messageClasses = 'alert alert-success d-none mb-0';
  let formClasses = '';
  if (hasCreated) {
    messageClasses = 'alert alert-success mb-0';
    formClasses = 'd-none';
  }

  return (
    <div className="my-5 container">
      <div className="row">
        <div className="col col-sm-auto">
          <img width="300" className="bg-white rounded shadow d-block mx-auto mb-4"/>
        </div>
        <div className="col">
          <div className="card shadow">
            <div className="card-body">
              <form className={formClasses} onSubmit={handleSubmit} id="create-location-form">
                <h1 className="card-title">Choose a Location</h1>
                <p className="mb-3">
                  Please enter the hat details.
                </p>
                <div className="row">
                  <div className="row">
                    <div className="form-floating mb-3">
                      <input onChange={handleChangeCloset_Name} required placeholder="Closet Name" type="text" id="closet_name" name="closet_name" className="form-control" />
                      <label htmlFor="name">The Closet's Name</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-floating mb-3">
                      <input onChange={handleChangeSection_Number} required placeholder="Section Number" type="text" id="section_number" name="section_number" className="form-control" />
                      <label htmlFor="name">Section Number</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-floating mb-3">
                      <input onChange={handleChangeShelf_Number} required placeholder="Style" type="text" id="shelf_number" name="shelf_number" className="form-control" />
                      <label htmlFor="name">Shelf Number</label>
                    </div>
                  </div>
                </div>
                <button className="btn btn-lg btn-primary">Create that location!</button>
              </form>
              <div className={messageClasses} id="success-message">
                Congratulations! Your location has been registered!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationForm;
