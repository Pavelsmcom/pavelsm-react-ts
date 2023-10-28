import "./Navbar.css";

import { NavLink } from "react-router-dom";

interface NavbarProps {
  isBurgerOpen: boolean;
  closeBurgerMenu: React.MouseEventHandler<HTMLAnchorElement>;
}

function Navbar({ isBurgerOpen, closeBurgerMenu }: NavbarProps) {
  return (
    <nav>
      <ul className={isBurgerOpen ? "navigation_burger navigation" : "navigation navigation_header"}>
        <li>
          <NavLink
            onClick={closeBurgerMenu}
            to="/"
            className={({ isActive }) =>
              `navigation__link ${isActive ? "navigation__link navigation__link_active" : ""}`
            }
          >
            Home
            <span className="navigation__span" data-content="Link Hover" aria-hidden="true"></span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={closeBurgerMenu}
            to="/skills"
            className={({ isActive }) =>
              `navigation__link ${isActive ? "navigation__link navigation__link_active" : ""}`
            }
          >
            My Skills
            <span className="navigation__span" data-content="Link Hover" aria-hidden="true"></span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={closeBurgerMenu}
            to="/portfolio"
            className={({ isActive }) =>
              `navigation__link ${isActive ? "navigation__link navigation__link_active" : ""}`
            }
          >
            Portfolio
            <span className="navigation__span" data-content="Link Hover" aria-hidden="true"></span>
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            onClick={closeBurgerMenu}
            to="/workExp"
            className={({ isActive }) =>
              `navigation__link ${isActive ? "navigation__link navigation__link_active" : ""}`
            }
          >
            Experience
            <span className="navigation__span" data-content="Link Hover" aria-hidden="true"></span>
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
