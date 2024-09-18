import React from 'react'
import "./Contact.css"
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contact">
      <div className="section__wrapper contact__container">
        <div className="section__header">
          <h2 className="primary__title">Contact Me</h2>
          <p className="text__muted description">
            Ready to take your digital presence to the next level? Whether you're looking to launch a new website, revamp an existing one, or need expert advice on the best web technologies, I'm here to help. Reach out to discuss your project, ask questions, or just say hello.
          </p>
        </div>
        <div className="contact__group">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__icon" />
              <h3>Email</h3>
              <h5>danny.rodriguez@dandemslay.com</h5>
              <a href="mailto:danny.rodriguez@dandemslay.com" target='_blank' className='btn'>Email me</a>
            </article>
            {/* <article className="contact__option">
              <RiMessengerLine className="contact__icon" />
              <h3>Messenger</h3>
              <h5>Danny A. Rodriguez</h5>
              <a href="https://m.me/dandemslay" target='_blank' className='btn'>Send me messange</a>
            </article> */}
            <article className="contact__option">
              <BsWhatsapp className="contact__icon" />
              <h3>Whatsapp</h3>
              <h5>+506 83169016</h5>
              <a href="https://wa.me/50683169016" target='_blank' className='btn'>Send me a message</a>
            </article>
          </div>

          {/* <form>
            <input type="text" name="name" id="" placeholder='Your Full name' required />
            <input type="text" name="name" id="" placeholder='Your Email' required />
            <textarea name='message' rows={7}></textarea>
            <button className="btn btn__primary">Send Message</button>
          </form> */}
        </div>
      </div>
    </section>
  )
}

export default Contact