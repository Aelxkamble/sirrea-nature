import React, { useState } from 'react';
import '../Components/Navbar.css'
import { Link } from 'react-router-dom';

const Navbarcomponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <div>
      <nav className={`navbar ${menuOpen ? 'collapsed' : ''}`}>
        <div className="logo-container">
          <img
            src="https://websitedemos.net/sierra-nature-02/wp-content/uploads/sites/339/2018/12/sierra_nature_logo.svg"
            alt="Sierra Nature Logo"
            className="logo"
          />
        </div>
        <div className={`tabs-container ${menuOpen ? 'show' : ''}`}>
          <Link className="text-decoration-none text-white" to="/">
            Home
          </Link>
          <Link className="text-decoration-none text-white" to="/aboutus">
            About Us
          </Link>
          <Link className="text-decoration-none text-white" to="/projects">
            Projects
          </Link>
          <Link className="text-decoration-none text-white" to="/services">
            Services
          </Link>
          <Link className="text-decoration-none text-white" to="/contact">
            Contact
          </Link>
        </div>
        <div className="cta-container">
          <button className="cta-button">Take Action</button>
        </div>
        <div className="navbar-toggler" onClick={handleMenuToggle}>
          <div className="navbar-toggler-icon">&#9776;</div>
        </div>
      </nav>
    </div>
  )
}

export default Navbarcomponent
