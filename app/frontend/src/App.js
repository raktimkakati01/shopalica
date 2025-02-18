import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import AboutUs from './components/AboutUs';
import Wallet from './components/Wallet';
import ContactUs from './components/ContactUs';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <Link to="/">Home</Link> |
            <Link to="/categories">Categories</Link> |
            <Link to="/about-us">About Us</Link> |
            <Link to="/wallet">Wallet</Link> |
            <Link to="/contact-us">Contact Us</Link> |
            <Link to="/admin">Admin</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
        <footer>
          <p>&copy; 2025 Shopalica. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;