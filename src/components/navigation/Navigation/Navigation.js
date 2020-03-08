import React from 'react';
import Menu from '../Menu/Menu';
import Burger from '../Burger/Burger';
import useBurger from '../../../hooks/useBurger';

const Navigation = () => {
  const { handleBurgerClick, handleLinkClick, isOpen } = useBurger();
  return (
    <div className="navigation">
      <Menu isOpen={isOpen} handleBurgerClick={handleLinkClick}/>
      <Burger isOpen={isOpen} handleBurgerClick={handleBurgerClick} />
    </div>
  )
}

export default Navigation;