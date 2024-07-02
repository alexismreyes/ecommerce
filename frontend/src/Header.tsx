import { NavLink } from "react-router-dom";
import "./assets/Header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav>
          <ul>
            <li>
              <NavLink to="/" className="custom-navlink">Home</NavLink>
            </li>
            <li>
              <NavLink to="/category" className="custom-navlink">Categories</NavLink>
            </li>
            <li>
              <NavLink to="/products" className="custom-navlink">Products</NavLink>
            </li>
            <li>User</li>
            <li><NavLink to="/test" className="custom-navlink">Test</NavLink></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
