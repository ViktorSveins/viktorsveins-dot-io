import React from 'react';
import './menu-style.scss';
import { NavLink } from 'react-router-dom';

const Menu = ({isOpen, handleLinkClick}) => {
  return (
    <div className={'menu ' + (isOpen ? 'open' : '')}>
      <NavLink exact to="/" className="link" onClick={() => handleLinkClick()}>
        - Welcome
      </NavLink>
      <NavLink exact to="/aboutme" className="link" onClick={() => handleLinkClick()}>
        - About me
      </NavLink>
    </div>
  )
}

export default Menu;