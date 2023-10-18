import Link from 'next/link'
import React from 'react'
import {
    FiGithub,
    FiInstagram,
    FiYoutube,
    FiLinkedin,
    FiTwitter
} from "react-icons/fi"

const SocialIcons = () => {

    const socialLinks = [
        {name: "Github", icon: <FiGithub/>, link: "https:/www.github.com"},
        {name: "Youtube", icon: <FiYoutube/>, link: "https:/www.youtube.com"},
        {name: "LinkedIn", icon: <FiLinkedin/>, link: "https:/www.linkedin.com"},
        {name: "Instagram", icon: <FiInstagram/>, link: "https:/www.instagram.com"},
        {name: "Twitter", icon: <FiTwitter/>, link: "https:/www.twitter.com"}
    ]

  return (
    <div className='social-icons'>
        <ul className='social-icons-list'>
            {
                socialLinks.map(({name, icon, link})=>{
                    return (
                        <li key={name} title={name} className='social-icons-list-item'>
                        <Link href={link} className='social-icons-list-item-link'>{icon}</Link>
                    </li>
                        )
                })
            }
        </ul>
    </div>
  )
}

export default SocialIcons