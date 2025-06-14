// 

import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/assets/logo.svg';
import underline from '../../assets/assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/assets/menu_open.svg';
import menu_close from '../../assets/assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
    setMenuOpen(false); // close menu on selection
  };

  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" />

      {/* Hamburger Menu Icon */}
      <img
        src={menu_open}
        onClick={handleMenuToggle}
        alt="open"
        className='nav-mob-open'
        style={{ display: menuOpen ? 'none' : 'block' }}
      />

      {/* Mobile Nav Menu */}
      <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        {/* Close Menu Icon */}
        <img
          src={menu_close}
          onClick={handleMenuToggle}
          alt="close"
          className='nav-mob-close'
        />

        <li>
          <AnchorLink className='anchor-link' href="#home">
            <p onClick={() => handleMenuClick("home")}>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt='' />}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href="#about">
            <p onClick={() => handleMenuClick("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" && <img src={underline} alt='' />}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href="#work">
            <p onClick={() => handleMenuClick("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" && <img src={underline} alt='' />}
        </li>

        <li>
          <AnchorLink className='anchor-link' offset={50} href="#contact">
            <p onClick={() => handleMenuClick("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" && <img src={underline} alt='' />}
        </li>
      </ul>

      {/* Connect Button */}
      <ul className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </ul>
    </div>
  );
};

export default Navbar;
