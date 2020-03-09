import React from 'react';
import { Redirect } from 'react-router-dom';

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