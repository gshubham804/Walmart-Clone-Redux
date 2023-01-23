import React,{useState,useEffect} from 'react';
import './ProductList.css';
import {add} from '../Context/cartSlice';
import { useDispatch } from 'react-redux';

const ProductList = () => {
    const dispatch = useDispatch();
    const[products,setProducts]= useState([]);

    useEffect(() => {
        const fetchProducts=async()=>{
            const res = await fetch ("https://fakestoreapi.com/products");
            const data =await res.json();
            setProducts(data);
        }
        fetchProducts();
    }, [])

    const handleAdd=(product)=>{
        dispatch(add(product));
    }
    
  return (
    <div className="productsWrapper">
            {products.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>${product.price}</h5>
                    <button onClick={()=>handleAdd(product)} className="add-to-cart btn">
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
  )
}

export default ProductList