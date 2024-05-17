import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../Pages/images/aun_logo.png";
import cartimg from "../Pages/images/shopping-bag-add_3916669.png";

import "../Pages/Styling/nav.css"
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false); // State to toggle showing links

  const links = [
    // { title: "Home", path: "/", imageSrc: logo},
    { title: "Product", path: "/products" },
    { title: "About", path: "/about" },
    { title: "Blog", path: "/blog" },
    { title: "Login", path: "/login" },
    { title: "Cart", path: "/cart", imageSrc: cartimg }
  ];

  const handleLinkClick = () => {
    setShowLinks(false); // Close the hamburger menu when any link is clicked
  };

  return (
    <div id="navbar">
      {/* Hamburger Icon */}
      <div className={`hamburger ${showLinks ? 'active' : ''}`} onClick={() => setShowLinks(!showLinks)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      
      {/* Logo */}
      <div className="logo">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      
      {/* Links */}
      <div className={`navlinks ${showLinks ? 'active' : ''}`}>
        {links.map((link) => (
          <Link
            to={link.path}
            key={link.path}
            style={{ color: "white", textDecoration: 'none', padding: '10px' }}
            onClick={handleLinkClick} // Close the hamburger menu when a link is clicked
          >
            {link.title === 'Cart' && link.imageSrc ? (
              <img src={link.imageSrc} alt={link.title} style={{ height: "30px", marginRight: '10px' }} />
            ) : (
              link.title
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
