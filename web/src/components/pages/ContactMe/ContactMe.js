import React from 'react';
import ContactForm from '../../form/ContactForm/ContactForm';

const ContactMe = () => {
  return (
    <div className='contact-me'>
      <h3>Wanna get in touch?</h3>
      <p>Drop me a line and I'll be sure to hit you back</p>
      <ContactForm />
    </div>
  )
}

export default ContactMe;