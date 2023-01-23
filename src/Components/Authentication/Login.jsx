import React,{useState} from 'react';
import './Login.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import {useDispatch } from 'react-redux';
import { loginSuccess } from '../Context/LoginSlice';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const[password,setPassword] = useState("");
  const [err, setErr] = useState(false);
  const dispatch=useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        try {
            // const res = await createUserWithEmailAndPassword(auth, email, password);
         const user= await signInWithEmailAndPassword(auth, email, password);
         dispatch(loginSuccess(user));
          navigate("/")
        } catch (err) {
          console.log(err)
          setErr(true);
        }
      };
      
  return (
    <div className="hero-login-main-cont">
        <form >
        <div className="hero-login-sub-cont">
        <input  type="email" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/>
    <button onClick={handleSubmit} class="hero-sign-button btn btn-primary">Login</button>
    </div>
        </form>
    </div>
  )
}

export default Login