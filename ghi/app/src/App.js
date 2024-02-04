import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import MainPage from './MainPage';
import ShoesList from './ShoesList';
import ShoeForm from './ShoeForm';
import HatsList from './HatsList';
import HatForm from './HatForm';
import BinList from './BinList';
import BinForm from './BinForm';
import LocationList from './LocationList';
import LocationForm from './LocationForm';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/shoes" element={<ShoesList />} />
          <Route path="/shoes/new" element={<ShoeForm />} />
          <Route path="/hats" element={<HatsList />} />
          <Route path="/hats/new" element={<HatForm />} />
          <Route path="/bins" element={<BinList />} />
          <Route path="/bins/new" element={<BinForm />} />
          <Route path="/locations" element={<LocationList />} />
          <Route path="/locations/new" element={<LocationForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
