import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const footer = () => {
  return (
    <footer>
      {/* <a href="#" className='footer__logo'>PORTFOLIO</a> */}

      <ul className='permalinks'>
        <li> <a href="#">Home</a></li>
        <li> <a href="#About">About</a></li>
        <li> <a href="#Experience">Experience</a></li>
        <li> <a href="#portfolio">Portfolio</a></li>
        <li> <a href="#Contact">Contact</a></li>

      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
      </div>
     


    </footer>
  )
}

export default footer