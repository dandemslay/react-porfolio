import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react' 
import "./Header.css"
import {profile1} from '../../images'
import Facts from './Facts'


const Header = () => {
  const container = useRef()
   /*
  gsap.registerPlugin(useGSAP)

  useGSAP(() => {
    gsap.fromTo(".profile__photo__container", {
      scale: .5,
      duration: 1,
      opacity: 0.5,
    },
    {
      scale:1,
      duration:1,
      ease:"sine.in",
      opacity:1,
    })

    gsap.from(".into__text",{
      fontSize:100,
      duration:1,
      delay:1,
      ease:"sine.in",
    })

    const timeline = gsap.timeline();
    timeline
    .from(".header__info__top",{
      opacity:0,
    })
    .from(".header__title",{
      opacity:0,
      y:-30,
    })
    .from(".header__description",{
      opacity:0,
    })
    .from(".btn",{
      x:-40,
      opacity:0,
      stagger:5
    })
  },{scope:container})

  */

  return (
    <header id='header' className='blur-effect'>
      {/* <div className="stroke__text intro__container">Hello</div> */}
      <div className="section__wrapper header__container">
        <div className="column intro__container blur-effect">
          <div className="header__info">
            <div className="header__info__top">
              Hello There! I'm <span className="color__primary">Danny A. Rodriguez</span>
            </div>
            <div className="header__info__middle">
              <h1 className="primary__title header_title">I'm Full Stack Web Developer</h1>
              <p className="text__muted header__description">
              Throughout my career, I’ve had the opportunity to work on diverse projects, from small startups to large-scale applications. I thrive in collaborative environments, utilizing Agile methodologies to deliver high-quality solutions that meet both user needs and business objectives.
              </p>
            </div>
            {/* <Facts/> */}
            <div className="header__info__bottom">
              <a href='https://storage.googleapis.com/turing_developers/resume/1600462554177_461692_dandemslay.pdf' className="btn" target='_blank'>Download CV</a>
              <a href="mailto:danny.rodriguez@dandemslay.com" className='btn'>Email me!
              </a>
            </div>
          </div>
        </div>
        <div className="column profile__wrapper">
          <div className="profile__photo__container">
            <img src={profile1} alt="" className="profile__photo" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
// https://www.youtube.com/watch?v=wYPA0woGdR0 start 36:05