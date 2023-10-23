"use client"
import Link from 'next/link'
import React from 'react'

import { Fira_Code } from 'next/font/google'
import { motion } from 'framer-motion'

const firaCode = Fira_Code({subsets:['latin'], weight: ["300", "400", "500"]})
const Email = () => {
  return (
    <motion.div className='email'
    initial={{opacity: 0, y: 5}}
    animate={{opacity: 1, y: 0}}
    transition={{
      duration: 0.3,
      ease: "easeInOut",
      delay: 2.5
    }}>
        <Link 
        href={"mailto:sohailahmedbhati786@gmail.com"} 
        className={`email-link ${firaCode.className}`}>
        sohailahmedbhati786@gmail.com
        </Link>
    </motion.div>
  )
}


export default Email