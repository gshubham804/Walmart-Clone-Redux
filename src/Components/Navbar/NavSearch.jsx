import React,{useState} from 'react';
import './NavSearch.css';
import {BiSearch} from 'react-icons/bi';


const NavSearch = () => {
  const[query,setQuery] = useState("");
//   const handleSearch=()=>{
//    let ans= products.filter((el)=>{
//     if (query === '') {
//       return el;
//   }
//   else {
//       return el.title.toLowerCase().includes(query.toLowerCase())
//   }
// })
// console.log(ans);
//   }

  // const handleKey = (e) => {
  //   e.code === "Enter" && handleSearch();
  // };

  return (
    <>
    <div className="navbar-search-main-cont">
        <input className='navbar-searchbox' type="search" 
        placeholder='Search everything at walmart '
        // onKeyDown={handleKey}
        onChange={(e) => setQuery(e.target.value)}
        />
        <BiSearch className='search-icon'/>
    </div>
    </>
  )
}

export default NavSearch