import React, { useEffect, useState } from 'react';


function ShoeForm() {
  const [bin, setBin] = useState('');
  const [model_name, setModel_Name] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [color, setColor] = useState('');
  const [picture_url, setPicture_Url] = useState('');
  const [bins, setBins] = useState([]);
  const [hasCreated, setHasCreated] = useState(false);
  const fetchData = async () => {
    const url = 'http://localhost:8100/api/bins/';
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setBins(data.bins);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.bin = bin;
    data.model_name = model_name;
    data.manufacturer = manufacturer;
    data.color = color;
    data.picture_url = picture_url;
    const shoeUrl = 'http://localhost:8080/api/shoes/';
    const fetchOptions = {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const shoeResponse = await fetch(shoeUrl, fetchOptions);
    if (shoeResponse.ok) {
          setBin('');
          setModel_Name('');
          setManufacturer('');
          setColor('');
          setPicture_Url('');
          setHasCreated(true);
    }
  }

  const handleChangeBin = (event) => {
    const value = event.target.value;
    setBin(value);
  }
  const handleChangeModel_Name = (event) => {
    const value = event.target.value;
    setModel_Name(value);
  }
  const handleChangeManufacturer = (event) => {
    const value = event.target.value;
    setManufacturer(value);
  }
  const handleChangeColor = (event) => {
    const value = event.target.value;
    setColor(value);
  }
  const handleChangePicture_Url = (event) => {
    const value = event.target.value;
    setPicture_Url(value);
  }
  
  // CSS classes for rendering
  let spinnerClasses = 'd-flex justify-content-center mb-3';
  let dropdownClasses = 'form-select d-none';
  if (bins.length > 0) {
    spinnerClasses = 'd-flex justify-content-center mb-3 d-none';
    dropdownClasses = 'form-select';
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
          {/* <img width="300" className="bg-white rounded shadow d-block mx-auto mb-4" src="/logo.svg" alt="/logo.svg"/> */}
          <img width="300" className="bg-white rounded shadow d-block mx-auto mb-4"/>
        </div>
        <div className="col">
          <div className="card shadow">
            <div className="card-body">
              <form className={formClasses} onSubmit={handleSubmit} id="create-shoe-form">
                <h1 className="card-title">It's Shoe Time!</h1>
                <p className="mb-3">
                  Please choose which bin
                  you'd like to store the shoe in.
                </p>
                <div className={spinnerClasses} id="loading-bin-spinner">
                  <div className="spinner-grow text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
                <div className="mb-3">
                  <select onChange={handleChangeBin} name="bin" id="bin" className={dropdownClasses} required>
                    <option value="">Choose a bin</option>
                    {bins.map(bin => {
                      return (
                        <option key={bin.href} value={bin.href}>{bin.closet_name}</option>
                      )
                    })}
                  </select>
                </div>
                <p className="mb-3">
                  Please enter the shoe details.
                </p>
                <div className="row">
                  <div className="row">
                    <div className="form-floating mb-3">
                      <input onChange={handleChangeModel_Name} required placeholder="Shoe name" type="text" id="model_name" name="model_name" className="form-control" />
                      <label htmlFor="name">The shoe's model name</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-floating mb-3">
                      <input onChange={handleChangeManufacturer} required placeholder="Manufacturer" type="text" id="Manufacturer" name="Manufacturer" className="form-control" />
                      <label htmlFor="name">Manufacturer</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-floating mb-3">
                      <input onChange={handleChangeColor} required placeholder="Color" type="text" id="color" name="color" className="form-control" />
                      <label htmlFor="name">Color</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-floating mb-3">
                      <input onChange={handleChangePicture_Url} required placeholder="Picture_Url" type="text" id="picture_url" name="picture_url" className="form-control" />
                      <label htmlFor="name">Picture URL</label>
                    </div>
                  </div>
                </div>
                <button className="btn btn-lg btn-primary">Store that shoe!</button>
              </form>
              <div className={messageClasses} id="success-message">
                Congratulations! Your shoe is registered!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShoeForm;
