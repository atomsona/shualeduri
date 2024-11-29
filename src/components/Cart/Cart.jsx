import React from "react";
import "./Cart.css";

function Cart({ cartItems, onRemoveFromCart }) {
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="Cart">
      <h2>Your Cart</h2>
      {cartItems.map((item, index) => (
        <div className="Cart-item" key={index}>
          <p>{item.name}</p>
          <p>
            ${item.price} x {item.quantity}
          </p>
          <button onClick={() => onRemoveFromCart(index)}>Remove</button>
        </div>
      ))}
      <div className="Cart-total">Total: ${totalPrice.toFixed(2)}</div>
    </div>
  );
}

export default Cart;
