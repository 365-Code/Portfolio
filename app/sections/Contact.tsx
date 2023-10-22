import React from 'react'
import Button from '../components/Button'
import { Raleway } from 'next/font/google'


const raleway = Raleway({subsets:['latin'], weight: ['300','400','500','600'] })
const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <h2 className='contact-title'>what&apos;s Next?</h2>
        <h2 className={`contact-sub-title ${raleway.className}`}>Get in Touch</h2>
        <p className={`contact-text ${raleway.className}`}>
            Although I&apos;m not currently lookin for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <div className={`contact-cta ${raleway.className}`}>
            <Button text='Say Hello' link='mailto:sohailahmedbhati786@gmail.com'/>
        </div>


    </div>
  )
}

export default Contact