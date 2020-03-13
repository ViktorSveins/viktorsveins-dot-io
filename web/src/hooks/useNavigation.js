import React from 'react';

const useNavigation = () => {
  const [isOpen, setOpen] = React.useState(false);

  const handleBurgerClick = () => {
    setOpen(!isOpen);
  }

  const handleLinkClick = () => {
    setOpen(false);
  }

  return { handleBurgerClick, handleLinkClick, isOpen };
}

export default useNavigation;