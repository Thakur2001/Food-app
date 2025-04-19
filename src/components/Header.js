import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("LOGIN");
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img
            src="https://static.vecteezy.com/system/resources/previews/011/468/885/non_2x/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg"
            alt="Logo"
          />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart" className="cart-link">
              Cart ({cartItems.length})
            </Link>
          </li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                loginBtn === "LOGIN"
                  ? setLoginBtn("LOGOUT")
                  : setLoginBtn("LOGIN");
              }}
            >
              {loginBtn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
