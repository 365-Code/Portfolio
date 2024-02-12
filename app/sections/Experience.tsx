"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Fira_Code, Raleway } from 'next/font/google'
import { motion } from 'framer-motion';
const raleway = Raleway({subsets:['latin']})
const firaCode = Fira_Code({subsets:['latin']})
const Experience = () => {

    const experiences = [
        {
            name: "Rapidops",
            role: "Full Stack Developer",
            url: "https://www.rapidops.com",
            start: "January 2021",
            end: "Present",
            shortDescription: [
                "I had experience working on a large codebase utilizing kibana and Elastic search."
            ]
        },
        {
            name: "JMI",
            role: "UnderGraduate BTech Student",
            url: "https://www.jmi.ac.in",
            start: "November 2021",
            end: "Present",
            shortDescription: [
                "I have learnt many thing after entering the college life",
                "All my web skills were developed after entering the college"
            ]
        },
        {
            name: "12th Board",
            role: "Student",
            url: "https://www.jmi.ac.in",
            start: "July 2018",
            end: "May 2019",
            shortDescription: [
                "I have learnt many thing after entering the college life",
                "All my web skills were developed after entering the college"
            ]
        },
        {
            name: "10th Board",
            role: "Student",
            url: "https://www.jmi.ac.in",
            start: "July 2018",
            end: "May 2019",
            shortDescription: [
                "I have learnt many thing after entering the college life",
                "All my web skills were developed after entering the college"
            ]
        }
    ]


    const [selected, setSelected] = useState(0);

    useEffect(()=>{
        const transformSelected = ()=>{
            let underline = document.querySelector<HTMLElement>(".underline");
            underline && (underline.style.top = `${selected* 2.5}rem`)
        }
        transformSelected();
    }, [selected])

  return (
    <motion.div className='experience' id='experience'
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    variants={{
    visible: { opacity: 1, y: -50 },
    hidden: { opacity: 0, y: 0 },
    }}>
        <div className={`title ${raleway.className} `}>
            <h2>Where I&apos;ve Worked</h2>
        </div>
        <div className="container">
            <ul className="exp-slider">
                <div className="underline"></div>
                {
                    experiences.map((exp, index)=>{
                        return (
                            <li 
                            key={index} 
                            className={`${firaCode.className} exp-slider-item ${
                                index === selected && "exp-slider-item-selected"
                            }`}
                            onClick={()=> setSelected(index)}>
                                <span className={`${firaCode.className}`}>{exp.name}</span>
                            </li>
                        )
                    })
                }
            </ul>
            <div className={`exp-details ${raleway.className}`}>
                <div className="exp-details-position">
                    <h3>
                        <span>{experiences[selected].role}</span>
                        <span> @ </span>
                        <span className='exp-details-position-company'>
                            <Link className='link' target='_blank' href={experiences[selected].url}>{experiences[selected].url}</Link>
                        </span>
                    </h3>
                    <p className="exp-details-range">
                        {experiences[selected].start} - {experiences[selected].end}
                    </p>
                    <ul className="exp-details-list">
                        {
                            experiences[selected].shortDescription.map((desc, index)=>{
                                return (
                                    <li key={index} className='exp-details-list-item'>
                                        {desc}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>

    </motion.div>
  )
}

export default Experience