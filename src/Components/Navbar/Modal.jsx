import React from 'react';
import './Modal.css';
import ReactDom from "react-dom";

const Modal = () => {
    return ReactDom.createPortal(
    <div className="mobile-options">
    <ul>
      <li className="mobile-opt">Departments</li>
      <li className="mobile-opt">Services</li>
      <li className="mobile-opt">My Items</li>
      <li className="mobile-opt">Account</li>
    </ul>
  </div>,
      document.getElementById("portal-modal")
  )
}

export default Modal