import React,{useState} from 'react'
import './NavFirst.css';
import NavbarSearch from './NavSearch';
import { useSelector,useDispatch } from 'react-redux';
import {auth} from '../../firebase';
import {signOut} from "firebase/auth";
import { logout } from '../Context/LoginSlice';
import { useNavigate, Link } from "react-router-dom";
import {AiOutlineHeart,AiOutlineUser,AiOutlineShoppingCart} from 'react-icons/ai'
import {CiGrid41} from "react-icons/ci";
import {BsUiRadiosGrid} from "react-icons/bs"

const NavbarFirst = () => {
  const navigate = useNavigate();
  const items =useSelector((state)=>state.cart);
  const isLogged=useSelector((state)=>state.authentication.user);
  const dispatch= useDispatch();

  const handleLogOut=async() => {
    const res=await signOut(auth);;
    dispatch(logout(res));
    navigate("/")
  };
  
  return (
    <>
    <div className="navbarfirst-main-cont">
        <h4 className='navbar-logo'>Walmart</h4>
        <h5><CiGrid41 className='nav-icon'/>Departments</h5>
        <h5><BsUiRadiosGrid className='nav-icon-service'/>Services</h5>
    <NavbarSearch/>
    <button type="button" class="nav-button navbar-additems-button btn btn-outline-light">
      <AiOutlineHeart className='nav-icon'/>Add Items</button>
      {
        isLogged?<button onClick={handleLogOut} type="button" class="remove-text-decor nav-button navbar-sign-button btn btn-outline-light">
        <AiOutlineUser className='nav-icon'/>Sign out</button>
        :
<button type="button" class="remove-text-decor nav-button navbar-sign-button btn btn-outline-light">
        <Link to="/signin"><AiOutlineUser className='nav-icon'/>Sign in</Link></button> 
      }
    <button type="button" class="remove-text-decor nav-button navbar-cart-button btn btn-outline-light">
      <Link to="/cart"><AiOutlineShoppingCart className='nav-icon'/>Cart: {items.length}</Link></button>
    </div>
    </>
  )
}

export default NavbarFirst