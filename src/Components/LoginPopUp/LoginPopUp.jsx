import axios from 'axios'
import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/Contex'
import './LoginPopUp.css'


const LoginPopUp = ({setShowLogin}) => {
    const {url,setToken}=useContext(StoreContext)
    const[CurrentState,setCurrentState]=useState('Login')
    const[data,setData] =useState({
      name:"",
      email:"",
      password:"",
    })
    const onChangeHandler= (event)=>{
      const name= event.target.name;
      const value= event.target.value;
      setData(data=>({...data,[name]:value}))
    }
    const onLogin = async(event)=>{
      event.preventDefault();
      let newUrl= url;
      if(CurrentState==="Login"){
        newUrl +="/api/user/login"

      }
      else{
        newUrl +="/api/user/register"
      }
      const response = await axios.post(newUrl,data); 
      if(response.data.success){
        setToken(response.data.token);
        localStorage.setItem("token",response.data.token);
        setShowLogin(false);
      }else{
        alert(response.data.message);
      }
      
    }

    
  return (
    <div className='Login-Popup'>
    <form onSubmit={onLogin} className='Login-Popup-Container'>
    <div className='Login-Popup-title'>
        <h2>{CurrentState}</h2>
        <img onClick={()=>setShowLogin(false)} src={assets.cross_icon}/>
    </div>
    <div className='Login-Popup-input'>
    {CurrentState ==="Login"?<></>:<input name="name" onChange={onChangeHandler} value={data.name} type="text" placeholder='Your Name' required/>}
    
    <input name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email' required/>
    <input name="password" onChange={onChangeHandler} value={data.password} type="password" placeholder='Your Password' required/>
       
    </div>
    <button type='submit' > {CurrentState === "Sign up"?"Create Account":"Login"}</button>
    <div className='Login-Popup-Condition'>
        <input type='checkbox' required/>
        <p>By Continuing, I agree the the terms of use & Privacy Policy</p>
    </div>
    {CurrentState==="Login"?<p>Create A New Account? <span onClick={()=>setCurrentState('Sign up')}>Click Here</span></p>
    :<p>Already Have an Account <span onClick={()=>setCurrentState('Login')}>Login Here</span></p>}
    
    


    </form>
   
      
    </div>
  )
}

export default LoginPopUp
