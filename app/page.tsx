import React from 'react'
import "@/app/scss/index.scss"
import Navbar from './sections/Navbar'
import SocialIcons from './components/SocialIcons'
import Email from './components/Email'

const Home = () => {
  return (
    <div className='app'>
      <Navbar/>
      <SocialIcons/>
      <Email/>
    </div>
  )
}

export default Home