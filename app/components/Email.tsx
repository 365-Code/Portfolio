import Link from 'next/link'
import React from 'react'

const Email = () => {
  return (
    <div className='email'>
        <Link href={"mailto:sohailahmedbhati786@gmail.com"} className='email-link'>
        sohailahmedbhati786@gmail.com
        </Link>
    </div>
  )
}

export default Email