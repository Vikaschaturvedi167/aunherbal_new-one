import React, { useState, useEffect, useRef } from 'react';
import "../Pages/Styling/bav.css";
import { Link } from 'react-router-dom';
import logo1 from "../Pages/images/aun_logo.png";
import cartimg from "../Pages/images/shopping-bag-add_3916669.png";
import SubMenu from './submenue'; // Import the SubMenu component

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [currentLink, setCurrentLink] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setShowLinks(false);
        setCurrentLink(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const links = [
    { 
      title: "PRODUCTS", 
      path: "/products", 
      subLinks: [
        { title: "Men Products", path: "/products" },
        { title: "Women Products", path: "/products" },
        { title: "Both", path: "/products" }
      ]
    },
    { title: "CART", path: "/cart", subLinks: [] },

    { 
        title: "BLOG", 
        path: "/blog", 
        subLinks: [ ] },
      
    { 
      title: "ABOUT US ", 
      path: "/about", 
      subLinks: []},

   { title: "REGISTER", path: "/login", subLinks: [] },
  ];

  const closeDropdown = () => {
    setShowLinks(false);
    setCurrentLink(null);
  };

  const handleHover = (index) => {
    setCurrentLink(index);
    setShowLinks(true);
  };

  return (
    <div id="navbar" ref={navRef}>
      <div className={`hamburger ${showLinks ? 'active' : ''}`} onClick={() => setShowLinks(!showLinks)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      
      <div className="logo">
        <Link to="/" className="logo-link" onClick={closeDropdown}>
          <img src={logo1} alt="Logo" style={{ width: "100px" }} />
        </Link>
      </div>

      <div className={`navlinks ${showLinks ? 'active' : ''}`}>
        {links.map((link, index) => (
          <div key={index} onMouseEnter={() => handleHover(index)}>
            <Link
              to={link.path}
              style={{ color: "white", textDecoration: 'none', padding: '10px', fontSize: "30px" }}
              onClick={closeDropdown} 
            >
              {link.title}
            </Link>
            {showLinks && currentLink === index && (
              <SubMenu subLinks={link.subLinks} closeDropdown={closeDropdown} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
