import validator from 'validator';

const validateContactForm = values => {
  const { email, name, message } = values;
  const errors = {};
  if (email === '') { errors.email = 'Email address missing'; }
  else if (!validator.isEmail(email)) { errors.email = 'Invalid email address'; }
  
  if(name === '') { errors.name = 'Name missing'; }

  if(message === '') { errors.message = 'Message missing'; }

  return errors;
};

export default validateContactForm;