import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
    <div className='footer__content'>
        <div className='footer__content__left'>
            <Link to='/'><img src={assets.logo}/></Link>
            <p>This is left side</p>
            <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt='Facebook'/>
                <img src={assets.twitter_icon} alt='Twitter'/>
                <img src={assets.linkedin_icon} alt='Instagram'/>
                
            </div>
        </div>
        <div className='footer__content__center'>
            <h2>Company</h2>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className='footer__content__right'>
            <h2>Get In Touch</h2>
            <ul>
                <li>075 2452869</li>
                <li>Email:  support@example.com</li>
            </ul>
        </div>
    </div>
    <hr/>
    <p className='copyright'>Copyright &copy; 2024 Tomato.com . All rights reserved.</p>
      
    </div>
  )
}

export default Footer
