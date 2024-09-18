import React, { useEffect, useRef } from 'react'
import "./About.css"
import { profile2 } from '../../images'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function About() {
  const container = useRef(null)
 /* gsap.registerPlugin(ScrollTrigger)
  useEffect(() => {
    const el = container.current;
    gsap.fromTo(".about__container",{
      scale:0.7 
    },{
      scale:1,
      scrollTrigger:el,
      scrub:true,    
    })
  },[])*/
  return (
    <section id='about'>
      <div className="section__wrapper about__container">
        <div className="me__container blur-effect">
          <div className="photo__container">
            <img src={profile2} alt="" />
          </div>
        </div>
        <div className="section__header">
          <h2 className="primary__title">About Me</h2>
          <h1 className="title">I am <span className="color__primary">Danny A. Rodriguez</span></h1>
          <p className="text__muted description">Throughout my career, I’ve had the opportunity to work on diverse projects, from small startups to large-scale applications. I thrive in collaborative environments, utilizing Agile methodologies to deliver high-quality solutions that meet both user needs and business objectives.</p>
          <p className="text__muted description">I’m passionate about staying updated with the latest industry trends and continuously improving my skills. I look forward to contributing my expertise in full stack development to create innovative applications that make a meaningful impact.</p>
        </div>
      </div>
    </section>
  )
}

export default About