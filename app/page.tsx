import React from 'react'
import "@/app/scss/index.scss"
import Navbar from './sections/Navbar'
import SocialIcons from './components/SocialIcons'
import Email from './components/Email'
import Hero from './sections/Hero'
import About from './sections/About'
import Experience from './sections/Experience'
import Project from './sections/Project'
import Contact from './sections/Contact'

const Home = () => {
  return (
    <div className={`app`}>
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Experience/>
        <Project/>
        <Contact/>
      </main>
      <SocialIcons/>
      <Email/>
    </div>
  )
}

export default Home