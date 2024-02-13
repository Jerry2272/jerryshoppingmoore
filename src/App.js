import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import About from './pages/About';
import OtherProduct from './pages/OtherProduct';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Hero from './pages/Hero';
import { Newsletter } from './Components/NewsLetter/Newsletter';
import { Footer } from './Components/Footer/Footer';
import { ContextApi } from './contextApi/ContextApi'; // Import the context provider

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* Wrap your Routes and components with the context provider */}
        <ContextApi>
          <Routes>
            <Route path="/" index element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/other" element={<OtherProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </ContextApi>
        <Newsletter />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
