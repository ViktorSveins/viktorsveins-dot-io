import React from 'react';
import ContactForm from '../../form/ContactForm/ContactForm';
import './contactme-style.scss';

const ContactMe = () => {
  return (
    <div className='contact-me'>
      <h1>Wanna get in touch?</h1>
      <p>Drop me a line and I'll be sure to hit you back</p>
      <ContactForm />
    </div>
  )
}

export default ContactMe;