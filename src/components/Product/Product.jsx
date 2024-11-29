import React, { useState } from "react";
import "./Product.css";

function Product({ onAddToCart, onImageClick }) {
  const [mainImage, setMainImage] = useState("/assets/img1.png");
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type) => {
    if (type === "decrease" && quantity > 1) setQuantity(quantity - 1);
    if (type === "increase") setQuantity(quantity + 1);
  };

  return (
    <div className="Product">
      <div className="Product-images">
        <img
          src={mainImage}
          alt="Main Product"
          className="main-image"
          onClick={() => onImageClick(mainImage)}
        />
        <div className="thumbnails">
        {["img1.png", "img2.png", "img3.png", "img4.png"].map((img, index) => (
  <img
    key={index}
    src={`/assets/${img}`}  
    alt={`Thumbnail ${index}`}
    onClick={() => setMainImage(`/assets/${img}`)}
  />
))}


        </div>
      </div>
      <div className="Product-details">
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
        </p>
        <p>
          <strong>$125.00</strong> <span className="discount">50% off</span>
        </p>
        <div className="quantity-controls">
          <button onClick={() => handleQuantityChange("decrease")}>-</button>
          <span>{quantity}</span>
          <button onClick={() => handleQuantityChange("increase")}>+</button>
        </div>
        <button onClick={() => onAddToCart(quantity)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
