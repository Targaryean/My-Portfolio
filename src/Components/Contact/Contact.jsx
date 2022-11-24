import React from 'react'
import './Contact.css'
import {MdEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kg4be4a', 'template_nkuf2f9', form.current, 'um4FGWwX1u1vfzIOO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


  return (
    <section id="Contact">
      <h5>Get In Touch!</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

         <article className="contact__option">
          <MdEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>utkarshs0307@gmail.com</h5>
          <a href="mailto:utkarshs0307@gmial.com" target="_blank">Send a message!</a>
         </article>

         <article className="contact__option">
          <BsLinkedin className='contact__option-icon'/>
          <h4>LinkedIn</h4>
          <h5>Utkarsh Singh</h5>
          <a href="https://www.linkedin.com/in/utkarsh-singh-17444a214/" target="_blank">Send a message!</a>
         </article>

         <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>9765491234</h5>
          <a href="https://api.whatsapp.com/send?phone=9765491234" target="_blank">Send a message!</a>
         </article>
        </div>
        {/* End of Contact Options */}
        <form ref={form} onSubmit = {sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required />
          <input type="email" name='email' placeholder='Your Message' required />
          <textarea name="message" rows="7" placeholder='Type your Message here!' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact