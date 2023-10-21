import { useState } from "react";
import "./Header.css";

import Navbar from "../Navbar/Navbar";
import Resume from "../Resume/Resume";
import Logo from "../Logo/Logo";
import Burger from "../Burger/Burger";

function Header() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  function click() {
    setIsBurgerOpen(!isBurgerOpen);
  }

  function handleCloseBurgerMenu() {
    setIsBurgerOpen(false);
  }

  return (
    <header className="head">
      <Burger click={click} isBurgerOpen={isBurgerOpen} />
      <Logo />
      <Navbar isBurgerOpen={isBurgerOpen} closeBurgerMenu={handleCloseBurgerMenu} />
      <Resume />
    </header>
  );
}

export default Header;
