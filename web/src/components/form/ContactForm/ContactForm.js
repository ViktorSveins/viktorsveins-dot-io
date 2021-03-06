import React from 'react';
import sendMail from '../../../services/mailService';
import useForm from '../../../hooks/useForm';
import Form from '../Form/Form';
import Input from '../Input/Input';
import validateContactForm from './validateContactForm';
import './contactform-style.scss';

const ContactForm = ({ title }) => {
	const initialState = {
		email: '',
		name: '',
		message: ''
	}
	
 	const submitHandler = async message => {
		sendMail(message).then(success => {
			if(success) { 
				resetFields();
				setResponse('Success');
			}
			else {
				setResponse('Failure');
			}
		});
	}

	const { handleSubmit, handleChangeText, values, errors, isSubmitting, response, setResponse, resetFields } = useForm(
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
					 name="name"
					 value={ values.name }
					 htmlId="name"
					 placeholder="Your name"
					 errorMessage={ errors.name }
					 onInput={ handleChangeText } 
				/>
				<Input
					 type="textarea"
					 name="message"
					 value={ values.message }
					 htmlId="message"
					 placeholder="Message"
					 errorMessage={ errors.message }
					 onInput={ handleChangeText } 
				/>
				<input 
					type="submit" 
					value="Send!" 
					className="input-submit"
					disabled={isSubmitting}
				/>
			</Form>
			{response === 'Success' ? <p className='submit'>Message sent</p> : <></>}
			{response === 'Failure'? <p className='submit'>An error occured, try again later</p>: <></>}
		</>
  );
}

export default ContactForm;