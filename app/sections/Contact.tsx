"use client"
import React from 'react'
import Button from '../components/Button'
import { Fira_Code, Raleway } from 'next/font/google'
import { motion } from 'framer-motion'


const raleway = Raleway({subsets:['latin'], weight: ['300','400','500','600'] })
const firaCode = Fira_Code({subsets:['latin'], weight: ['300','400','500','600'] })
const Contact = () => {
  return (
    <motion.div className='contact' id='contact'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}>
        <h2 className={`contact-title ${firaCode.className}`}>what&apos;s Next?</h2>
        <h2 className={`contact-sub-title ${raleway.className}`}>Get in Touch</h2>
        <p className={`contact-text ${raleway.className}`}>
            Although I&apos;m not currently lookin for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <div className={`contact-cta ${raleway.className}`}>
            <Button text='Say Hello' link='mailto:sohailahmedbhati786@gmail.com'/>
        </div>


    </motion.div>
  )
}

export default Contact