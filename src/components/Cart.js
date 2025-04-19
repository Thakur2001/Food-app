import React from "react";

const Cart = () => {
  return (
    <div className="cart-container">
      <div className="cart-content">
        <h1 className="cart-title">Your Cart</h1>
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <p>Add some delicious items to get started!</p>
        </div>
      </div>
    </div>
  );
};

export default Cart; 