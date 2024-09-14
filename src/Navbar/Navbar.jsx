import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import { StoreContext } from '../Context/Contex';
import './Navbar.css';

const Navbar = ({setShowLogin}) => {
    const[menu,setMenu]=useState("menu");

    const {getTotalCartAmount,token,setToken}=useContext(StoreContext);

    const navigate = useNavigate();

    const LogOut=()=>{
      localStorage.removeItem("token");
      setToken('');
      navigate("/")

    }

    

    
  return (
    <div className='Navbar'>
    <Link to='/'><img src={assets.logo} alt='logo' className='logo'/></Link>
    <ul className='Navbar-menu'>
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
        <a href='#ExploreMenu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact-us</a>
    </ul>
    <div className='navbar-right'>
    <img src={assets.search_icon}></img>
    <div className='navbar-search-icon'>
    
    <Link to='/Cart'><img src={assets.basket_icon}></img></Link>
    <div className={getTotalCartAmount()===0 ?"":"dot"}></div>
    </div>
    {!token?<button onClick={()=>setShowLogin(true)}>Sign in</button>
    :<div className='navbar-profile'>
    <img src={assets.profile_icon}/>
    <ul className='nav-profile-dropDown'>
      <li><img src={assets.bag_icon}/><p>Orders</p></li>
      <hr/>
      <li onClick={LogOut}><img src={assets.logout_icon}/><p>LogOut</p></li>
    </ul>

    </div>}
    
    </div>
      
    </div>
  )
}

export default Navbar
