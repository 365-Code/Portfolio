"use client"
import Image from 'next/image'
import React from 'react'
import sam from "@/public/sam.jpeg"
import { Fira_Code, Raleway } from 'next/font/google'
import { motion } from 'framer-motion'
const raleway = Raleway({subsets:['latin']})
const firaCode = Fira_Code({subsets:['latin']})

const About = () => {
  return (

    <motion.div id='about' className='about'
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
    }}>
        <div className={`title ${raleway.className}`}>
            <h2>About Me</h2>
        </div>
        <div className="about-grid">
            <div className="about-grid-info">
                <p className={`about-grid-info-text ${raleway.className}`}>
                    Bonjour! My name is sam, and I am passionate about creating content for the web. My interest in web development was sparked in 2022 when I created my first project of a ToDo app, just a simple to do application
                </p>
                <p className={`about-grid-info-text ${raleway.className}`}>
                    Presently, I am a college student. I have developed skills for both frontend and backend development as well.
                </p>
                <p className={`about-grid-info-text ${raleway.className}`}>
                  I am also now trying to learn building android apps for the web applications I have already build.  
                </p>
                {/* <p className="about-grid-info-text">
                    
                </p> */}
                <p className={`about-grid-info-text ${raleway.className}`}>
                    Here are a few technologies, I&apos;ve been working with recently:
                </p>
                <ul className={`about-grid-info-list ${raleway.className}`}>
                    <li className="about-grid-info-list-item">Next</li>
                    <li className="about-grid-info-list-item">React</li>
                    <li className="about-grid-info-list-item">Typescript</li>
                    <li className="about-grid-info-list-item">Node js</li>
                    <li className="about-grid-info-list-item">CSS</li>
                    <li className="about-grid-info-list-item">MongoDB</li>
                </ul>
            </div>          
            <div className="about-grid-photo">
                <div className="overlay"></div>
                <div className="overlay-border"></div>
                <div className="about-grid-photo-container">
                    <Image src={sam} alt='sam' fill />
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default About