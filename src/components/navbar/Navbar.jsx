import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
// import { BiUserCircle } from "react-icons/bi";
import "./navbar.css";
import { useContext } from "react";
import { cartItem } from "../Context/CartContext";

const Navbar = () => {
  const { totalCartItem } = useContext(cartItem);
  return (
    <>
      <nav className="Navbar">
        <div className="logo">
          <NavLink to="/">
            <img
              src="https://i.postimg.cc/7LtP5W2Z/techstore-02-01.png"
              alt=""
            />
          </NavLink>
        </div>

        <div className="nav">
          <div className="nav-link">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/products">Products</NavLink>
              </li>

              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>

          <div className="icons">
            <ul>
              <li>
                <NavLink to="/cart">
                  <AiOutlineShoppingCart />
                  <div className="cartNumber">{totalCartItem}</div>
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/">
                <BiUserCircle />
                </NavLink>
                
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
