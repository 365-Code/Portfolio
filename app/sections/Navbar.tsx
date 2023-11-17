"use client"
import Link from 'next/link'
import React from 'react'
import {useEffect, useState} from 'react'
import Logo from '../components/Logo'
import Button from '../components/Button'
import { Fira_Code } from 'next/font/google'
import { MdMenu, MdClose } from 'react-icons/md'
import { motion } from 'framer-motion'

const firaCode = Fira_Code({subsets:['latin']})

const Navbar = () => {

  const sectionLinks = [
    {name: "About", link: "#about"},
    {name: "Experience", link: "#experience"},
    {name: "Work", link: "#work"},
    {name: "Contact", link: "#contact"},
  ]

  const [navbarVisible, setNavbarVisible] = useState(false)
  const [responsiveNavVisible, setResponsiveNavVisible] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", ()=>{
      window.scrollY > 100
      ? setNavbarVisible(true)
      : setNavbarVisible(false)
    })
  })
  


  return (
    <nav>
        <div className={`wrapper ${navbarVisible ? "blur-nav" : ""}`}>
            <motion.div 
            className="brand"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
              duration: 0.3,
              ease: "easeInOut"
            }}
            >
                <Link href={"/"} >
                    <Logo/>
                </Link>
            </motion.div>
            <motion.div 
            className="nav-responsive-toggle "
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
              duration: 0.3,
              ease: "easeInOut"
            }}
            >
              {
                responsiveNavVisible
                ? (
                  <button onClick={(e)=>{
                    e.stopPropagation();
                    setResponsiveNavVisible(false)
                    let main = document.querySelector("main")
                    main?.classList.remove("blur")
                  }}>
                    <MdClose />
                  </button>
                )
                : (
                  <button onClick={(e)=>{
                    e.stopPropagation();
                    setResponsiveNavVisible(true)
                    let main = document.querySelector("main")
                    main?.classList.add("blur")
                  }}>
                    <MdMenu/>
                  </button>
                )
              }
            </motion.div>
            <div 
            className={` ${responsiveNavVisible && "nav-responsive"} nav-items`}>
              <ul className="nav-items-list">
                {
                  sectionLinks.map(({name, link},index)=>(
                    <motion.li 
                    key={name} 
                    onClick={
                      (e)=>{
                      e.stopPropagation();
                      setResponsiveNavVisible(false)
                      let main = document.querySelector("main")
                      main?.classList.remove("blur")
                    }}
                    className='nav-items-list-item'
                    initial={{opacity: 0, y: -25}}
                    animate={{opacity: 1, y: 0}}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: (0.3 + index * 0.1)
                    }}
                    >
                      <Link 
                      href={link}
                      className={`nav-items-list-item-link ${firaCode.className}`}>{name}</Link>
                    </motion.li>
                  ))
                }
              </ul>
              <motion.div 
              className='nav-items-button'
              initial={{opacity: 0, y: -25}}
              animate={{opacity: 1, y: 0}}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: 0.6
            }}
              >
                <Button text='Resume' link='/resume.pdf' />
              </motion.div>

            </div>
        </div>

    </nav>
  )
}

export default Navbar