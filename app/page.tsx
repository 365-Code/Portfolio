"use client";
import React, { useEffect, useState } from "react";
import "@/app/scss/index.scss";
import Navbar from "./sections/Navbar";
import SocialIcons from "./components/SocialIcons";
import Email from "./components/Email";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Project from "./sections/Project";
import Contact from "./sections/Contact";
import Loader from "./components/Loader";
import Footer from "./sections/Footer";
import OtherProject from "./sections/OtherProject";

const Home = () => {
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);

  return (
    <div className={`app`}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            {/* <Experience/> */}
            <Project />
            <OtherProject />
            <Contact />
            <Footer />
          </main>
          <SocialIcons />
          <Email />
        </>
      )}
    </div>
  );
};

export default Home;
