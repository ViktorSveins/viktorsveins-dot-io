import React from 'react';

const useBurger = () => {
  const [isOpen, setOpen] = React.useState(false);
  console.log(isOpen)

  const handleBurgerClick = () => {
    setOpen(!isOpen);
  }

  const handleLinkClick = () => {
    setOpen(false);
  }

  return { handleBurgerClick, handleLinkClick, isOpen };
}

export default useBurger;