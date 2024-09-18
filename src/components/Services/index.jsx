import React from 'react'
import "./Services.css"
import { FaPaintBrush } from 'react-icons/fa'
import { BsCodeSquare } from 'react-icons/bs'
import { TfiWrite } from 'react-icons/tfi'
const Services = () => {
  return (
  <section id="services">
    <div className="section__wrapper">
      <div className="section__header center">
        <h2 className="primary__title">Services</h2>
        <p className="text_muted description">I transform your ideas, and consequently your desires, into a 
distinctive web project that both inspires you and captivates your customers.</p>
      </div>
      <div className="services__group">
        <article className="service">
          <div className="service__top">
            <div className="icon__container">
              <FaPaintBrush className='icon'/>
            </div>
            <h3 className="title">Web developer</h3>
          </div>
          <div className="service__middle">
            <p className="text__muted description">As a Full Stack Developer, I have expertise in both front-end and back-end technologies. On the front end, I work with HTML, CSS, and JavaScript frameworks like React and Angular to create intuitive user interfaces that enhance user experience. I believe that a well-designed interface is crucial for engaging users and ensuring accessibility across all devices.</p>
          </div>
          {/* <div className="service__bottom">
            <button className="btn btn__primary">Read more</button>
            </div> */}
        </article>
        {/* End ux/ui */}

        <article className="service" style={{"--color-primary":"var(--color-success)"}}>
          <div className="service__top">
            <div className="icon__container">
              <BsCodeSquare className='icon'/>
            </div>
            <h3 className="title">Software Developer</h3>
          </div>
          <div className="service__middle">
            <p className="text__muted description">On the back end, I’m proficient in server-side languages such as Node.js and C#. I have experience with databases like MySQL and MongoDB, allowing me to design efficient data structures and implement robust APIs for seamless communication between the client and server.</p>
          </div>
          {/* <div className="service__bottom">
            <button className="btn btn__primary">Read more</button>
            </div> */}
        </article>
        {/* End Web development */}

        <article className="service" style={{"--color-primary":"blueviolet"}}>
          <div className="service__top">
            <div className="icon__container">
              <TfiWrite className='icon'/>
            </div>
            <h3 className="title">DevSecOps</h3>
          </div>
          <div className="service__middle">
            <p className="text__muted description">Adopting DevSecOps services is essential for organizations looking to enhance their software development processes while ensuring robust security measures are in place. By integrating security into the development lifecycle, companies can not only protect their applications but also foster a culture of collaboration and continuous improvement across teams.</p>
          </div>
          {/* <div className="service__bottom"> 
            <button className="btn btn__primary">Read more</button>
            </div>*/}
        </article>
        {/* DevSecOps */}
      </div>
    </div>
  </section>
  )
}

export default Services