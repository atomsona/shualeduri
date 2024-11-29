import React, { useState } from "react";
import "./Navbar.css";

function Navbar({ cartItems }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="Navbar">
      <div className="Navbar-brand">sneakers</div>
      <button className="Navbar-burger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      <nav className={`Navbar-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="Navbar-cart">
        <span>🛒</span>
        <div className="Navbar-cart-items">
          {cartItems.length === 0 ? "Your cart is empty" : "Cart items here..."}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
