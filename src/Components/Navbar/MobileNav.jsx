import React, { useState } from "react";
import { MdOutlineCancel, MdMenu } from "react-icons/md";
import "./MobileNav.css";
import NavSearch from "./NavSearch.jsx";
import {AiOutlineShoppingCart} from 'react-icons/ai';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import Modal from "./Modal";

const MobileNav = () => {
  const items =useSelector((state)=>state.cart);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className="mobile-nav-main-cont">
      {isOpen ? (
        <MdOutlineCancel
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-icon"
        />
      ) : (
        <MdMenu onClick={() => setIsOpen(!isOpen)} className="mobile-icon" />
      )}
      <h4>Logo</h4>
      <NavSearch/>
      <button type="button" class="remove-text-decor nav-button navbar-cart-button btn btn-outline-light">
      <Link to="/cart"><AiOutlineShoppingCart className='nav-icon'/>Cart: {items.length}</Link></button>
    </div>
   {
    isOpen &&  < Modal/>
   }
    </>
  );
};

export default MobileNav;
