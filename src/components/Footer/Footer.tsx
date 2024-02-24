import { Props } from './types/Footer'
import './Footer.css'
import { footer_logo, instagram_icon, pintester_icon, whatsapp_icon } from '../assets/images'

export default function Footer({}: Props) {
  return (
    <div className='footer'>
       <div className="footer-logo">
        <img src={`${footer_logo}.avif`} alt="footer logo" />
        <p>SHOPPER CART</p>
       </div>
       <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
       </ul>
       <div className="footer-social-icons">
           <div className="footer-icons-container">
              <img src={`${instagram_icon}.avif`} alt="instagram image" />
           </div>
           <div className="footer-icons-container">
              <img src={`${pintester_icon}.avif`} alt="pintester image" />
           </div>
           <div className="footer-icons-container">
              <img src={`${whatsapp_icon}.avif`} alt="whatsapp image" />
           </div>
       </div>
       <div className="footer-copyright">
          <hr />
          <p>&copy; Copyright @ 2024 - All Rights Reserved</p>
       </div>
    </div>
  )
}