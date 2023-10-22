import Link from 'next/link'
import React from 'react'
import Button from '../components/Button'
import { Raleway } from 'next/font/google'

const raleway = Raleway({subsets:['latin']})
const Hero = () => {
  return (
    <div id='hero' className={`hero ${raleway.className}`}>
        <h1 className="hero-title">
            Hi my name is
        </h1>
        <h2 className={`hero-title-large`}>
            Sohail Ahmed
        </h2>
        <h2 className={`hero-title-large hero-title-sub`}>
            I craft things for web.
        </h2>
        <p className="hero-text">
            I&apos;m a student pursuing BTech in Computer Engineering from <Link href={"https://www.jmi.ac.in/"} className='link'>Jamia Millia Islamia</Link>. I am in my learning phase, and making project in the process. I am honing my skills in web development and new things.
        </p>
        <div className="hero-button">
            <Button 
            text='Check out my latest'
            link='b-furnitures.vercel.app'/>
        </div>

    </div>
  )
}

export default Hero