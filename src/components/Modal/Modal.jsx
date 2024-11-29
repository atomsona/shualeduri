import React from "react";
import "./Modal.css";

function Modal({ image, onClose }) {
  return (
    <div className="Modal">
      <div className="Modal-content">
        <img src={image} alt="Enlarged Product" />
        <button onClick={onClose} className="Modal-close">
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
