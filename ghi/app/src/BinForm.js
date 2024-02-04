import React, { useEffect, useState } from 'react';


function BinForm() {

  const [closet_name, setCloset_Name] = useState('');
  const [bin_number, setBin_Number] = useState('');
  const [bin_size, setBin_Size] = useState('');
  const [hasCreated, setHasCreated] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};

    data.closet_name = closet_name;
    data.bin_number = bin_number;
    data.bin_size = bin_size;

    const binUrl = 'http://localhost:8100/api/bins/';
    const fetchOptions = {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const binResponse = await fetch(binUrl, fetchOptions);
    if (binResponse.ok) {
          setCloset_Name('');
          setBin_Number('');
          setBin_Size('');
          setHasCreated(true);
    }
  }

  const handleChangeCloset_Name = (event) => {
    const value = event.target.value;
    setCloset_Name(value);
  }

  const handleChangeBin_Number = (event) => {
    const value = event.target.value;
    setBin_Number(value);
  }

  const handleChangeBin_Size = (event) => {
    const value = event.target.value;
    setBin_Size(value);
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
              <form className={formClasses} onSubmit={handleSubmit} id="create-bin-form">
                <h1 className="card-title">Create a Bin</h1>
                <p className="mb-3">
                  Please enter the bin details.
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
                      <input onChange={handleChangeBin_Number} required placeholder="Bin Number" type="text" id="bin_number" name="bin_number" className="form-control" />
                      <label htmlFor="name">Bin Number</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-floating mb-3">
                      <input onChange={handleChangeBin_Size} required placeholder="Style" type="text" id="bin_size" name="bin_size" className="form-control" />
                      <label htmlFor="name">Bin Size</label>
                    </div>
                  </div>
                </div>
                <button className="btn btn-lg btn-primary">Create that Bin!</button>
              </form>
              <div className={messageClasses} id="success-message">
                Congratulations! Your bin has been registered!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BinForm;
