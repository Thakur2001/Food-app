import React from "react";
import { useState } from "react";

const Header = () => {
  let btnName = "LOGIN";
  const [loginBtn, setLoginBtn] = useState("LOGIN");
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://static.vecteezy.com/system/resources/previews/011/468/885/non_2x/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg"
          alt="Logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              loginBtn === "LOGIN"
                ? setLoginBtn("logout")
                : setLoginBtn("LOGIN");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
