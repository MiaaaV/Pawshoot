import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './routes/Home';
import Gallery from './routes/Gallery';
import About from './routes/About';
import Contact from './routes/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
