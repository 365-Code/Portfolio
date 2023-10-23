"use client"
import Link from 'next/link'
import React from 'react'
import Button from '../components/Button'
import { Fira_Code, Raleway } from 'next/font/google'
import { motion } from 'framer-motion'

const raleway = Raleway({subsets:['latin']})
const firaCode = Fira_Code({subsets:['latin']})
const Hero = () => {
  return (
    <div id='hero' className="hero">
        <motion.h1 className={`hero-title ${firaCode.className}`}
        initial={{opacity: 0, y: 5}}
        animate={{opacity: 1, y: 0}}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.7
        }}>
            Hi my name is
        </motion.h1>
        <motion.h2 className={`hero-title-large ${raleway.className}`}
        initial={{opacity: 0, y: 5}}
        animate={{opacity: 1, y: 0}}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.0
        }}>
            Sohail Ahmed
        </motion.h2>
        <motion.h2 className={`hero-title-large hero-title-sub ${raleway.className}`}
        initial={{opacity: 0, y: 5}}
        animate={{opacity: 1, y: 0}}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.3
        }}>
            I craft things for web.
        </motion.h2>
        <motion.p className={`hero-text ${raleway.className}`}
        initial={{opacity: 0, y: 5}}
        animate={{opacity: 1, y: 0}}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.6
        }}>
            I&apos;m a student pursuing BTech in Computer Engineering from <Link href={"https://www.jmi.ac.in/"} className='link'>Jamia Millia Islamia</Link>. I am in my learning phase, and making project in the process. I am honing my skills in web development and new things.
        </motion.p>
        <motion.div className="hero-button"
        initial={{opacity: 0, y: 5}}
        animate={{opacity: 1, y: 0}}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
          delay: 1.9
        }}>
            <Button 
            text='Check out my latest'
            link='https://b-furnitures.vercel.app'/>
        </motion.div>

    </div>
  )
}

export default Hero