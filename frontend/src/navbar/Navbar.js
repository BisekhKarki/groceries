import React from 'react'
import { FcSearch } from "react-icons/fc";
import "../navbar/Navbar.css"
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../features/Connect';
import { FaHome } from "react-icons/fa";

const Navbar = ({length, setSearchItem,searchItem}) => {

    const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation()
  const cartLength = length
  // console.log(cartLength)

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const toCart = ()=>{
    navigate("/cart")
  }

  const toHome = ()=>{
    navigate("/home")
  }

  
  return (
    <div className='navbar'>
        <h1>Groceries</h1>
        {location.pathname === "/cart" ? "" :  <div className='searching'>
          <FcSearch className='searchButton' /><input className='search' placeholder='search'  value={searchItem} onChange={(e)=>setSearchItem(e.target.value)}  />
        </div> }
         
        <div className='cardButtons'>
          
          {location.pathname === "/cart" ? "" : <p className='cartLength'>{cartLength}</p>}
        {location.pathname === "/cart" ? <FaHome  onClick={toHome} /> :<FaShoppingCart onClick={toCart} />}
            <div>
            <button className='back-button' onClick={handleLogout}>Logout</button>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar
