import React from 'react';
import sendMail from '../../../services/mailService';
import useForm from '../../../hooks/useForm';
import Form from '../Form/Form';
import Input from '../Input/Input';
import validateContactForm from './validateContactForm';

const ContactForm = ({ title }) => {
	const initialState = {
		email: '',
		subject: '',
		message: ''
	}
	
	const submitHandler = async message => {
		sendMail(message);
	}

	const { handleSubmit, handleChangeText, values, errors, isSubmitting, resetFields } = useForm(
		initialState,
		validateContactForm,
		submitHandler
	);

	return (
		<>
			{title ? <h3>{title}</h3> : <></>}
			<Form onSubmit={ handleSubmit }>
				<Input 
					 type="text"
					 name="email"
					 value={ values.email }
					 htmlId="email"
					 placeholder="Your email"
					 errorMessage={ errors.email }
					 onInput={ handleChangeText } 
				/>
				<Input
					 type="text"
					 name="subject"
					 value={ values.subject }
					 htmlId="subject"
					 placeholder="Subject"
					 errorMessage={ errors.subject }
					 onInput={ handleChangeText } 
				/>
				<Input
					 type="text"
					 name="message"
					 value={ values.message }
					 htmlId="message"
					 placeholder="Message"
					 errorMessage={ errors.message }
					 onInput={ handleChangeText } 
				/>
				<input type="submit" value="Send!" className="input-submit"/>
			</Form>
		</>
  );
}

export default ContactForm;