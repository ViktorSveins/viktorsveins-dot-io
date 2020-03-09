import React from 'react';
import Menu from '../Menu/Menu';
import Burger from '../Burger/Burger';
import useNavigation from '../../../hooks/useNavigation';

const Navigation = () => {
  const { handleBurgerClick, handleLinkClick, isOpen } = useNavigation();
  return (
    <div className="navigation">
      <Menu isOpen={isOpen} handleLinkClick={handleLinkClick}/>
      <Burger isOpen={isOpen} handleBurgerClick={handleBurgerClick} />
    </div>
  )
}

export default Navigation;