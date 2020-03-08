import React from 'react';
import './menu-style.scss';

const Menu = ({isOpen, handleLinkClick}) => {
  return(
    <div className={'menu ' + (isOpen ? 'open' : '')}>
      <div onClick={() => handleLinkClick()}>
        - Welcome
      </div>
      <div onClick={() => handleLinkClick()}>
        - About me
      </div>
    </div>
  )
}

export default Menu;