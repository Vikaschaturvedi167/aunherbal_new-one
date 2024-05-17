import React from 'react';
import { Link } from 'react-router-dom';
import "../Pages/Styling/hub.css"

const SubMenu = ({ subLinks, closeDropdown }) => {
  return (
    <div className="submenu" onMouseLeave={closeDropdown}>
      {subLinks.map((subLink, index) => (
        <Link
          to={subLink.path}
          key={index}
          style={{ color: "white", textDecoration: 'none', padding: '10px', fontSize: "22px" }}
          onClick={closeDropdown} 
        >
          {subLink.title}
        </Link>
      ))}
    </div>
  );
};

export default SubMenu;