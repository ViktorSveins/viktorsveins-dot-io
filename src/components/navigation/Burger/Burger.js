import React from 'react';
import './burger-style.scss';

const Burger = ({isOpen, handleBurgerClick}) => {
  return (
    <div className='burger' onClick={() => handleBurgerClick()}>
      <div className={isOpen ? 'open' : ''}></div>
      <div className={isOpen ? 'open' : ''}></div>
      <div className={isOpen ? 'open' : ''}></div>
    </div>
  )
}

export default Burger;