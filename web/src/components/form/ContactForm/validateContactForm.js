import validator from 'validator';

const validateContactForm = values => {
  const { email, subject, message } = values;
  const errors = {};
  if (email === '') { errors.email = 'Email address missing'; }
  else if (!validator.isEmail(email)) { errors.email = 'Invalid email address'; }
  
  if(subject === '') { errors.subject = 'Subject missing'; }

  if(message === '') { errors.message = 'Message missing'; }

  return errors;
};

export default validateContactForm;