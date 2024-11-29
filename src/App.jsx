import React, { useState } from "react";
import "./App.css"; // App-level styles
import Product from "./components/Product/Product";
import Cart from "./components/Cart/Cart";
import Modal from "./components/Modal/Modal";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleAddToCart = (quantity) => {
    setCartItems([
      ...cartItems,
      { id: 1, name: "Fall Limited Edition Sneakers", price: 125, quantity },
    ]);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const openModal = (image) => {
    setModalImage(image);
    setModalVisible(true);
  };

  const closeModal = () => setModalVisible(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sneakers</h1>
        <nav>
          <ul>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      <Product onAddToCart={handleAddToCart} onImageClick={openModal} />

      {cartItems.length > 0 && (
        <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
      )}

      {modalVisible && <Modal image={modalImage} onClose={closeModal} />}
    </div>
  );
}

export default App;
