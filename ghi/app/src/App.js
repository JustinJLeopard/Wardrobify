import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import MainPage from './MainPage';
import ShoesList from './ShoesList';
import ShoeForm from './ShoeForm';
import HatsList from './HatsList';  // Import the HatsList component
import HatForm from './HatForm';    // Import the HatForm component
// import BinList from './BinList';
// import BinForm from './BinForm';
// import LocationList from './LocationList';
// import LocationForm from './LocationForm';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/shoes" element={<ShoesList />} />
          <Route path="/shoes/new" element={<ShoeForm />} />
          <Route path="/hats" element={<HatsList />} />    // Add route for listing hats
          <Route path="/hats/new" element={<HatForm />} /> // Add route for adding a new hat
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
