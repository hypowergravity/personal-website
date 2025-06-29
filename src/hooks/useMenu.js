import { useState } from "react";

export const useMenu = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuActive(false);
  };

  return { isMenuActive, toggleMenu, closeMenu };
};
