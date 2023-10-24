import React from 'react'
import {
    FiGithub,
    FiInstagram,
    FiYoutube,
    FiLinkedin,
    FiTwitter,
    FiFacebook
} from "react-icons/fi"

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-links'>
            <span className='footer-links-icon'><FiGithub/></span>
            <span className='footer-links-icon'><FiInstagram/></span>
            <span className='footer-links-icon'><FiYoutube/></span>
            <span className='footer-links-icon'><FiLinkedin/></span>
            <span className='footer-links-icon'><FiTwitter/></span>
            <span className='footer-links-icon'><FiFacebook/></span>
        </div>
    </footer>
  )
}

export default Footer