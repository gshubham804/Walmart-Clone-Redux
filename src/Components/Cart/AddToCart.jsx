import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import './AddToCart.css';
import {remove} from '../Context/cartSlice';

const AddToCart = () => {
  const products = useSelector((state)=>state.cart);
  const dispatch  = useDispatch();

  const handleRemove =(productId)=>{
    dispatch(remove(productId));
  }
  return (
    <div className="productsWrapper">
    {products.map((product) => (
        <div className="card" key={product.id}>
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <h5>${product.price}</h5>
            <button onClick={()=>handleRemove(product.id)} className="add-to-cart btn">
                Remove
            </button>
        </div>
    ))}
</div>
  )
}

export default AddToCart