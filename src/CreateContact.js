import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ImageInput from './ImageInput';

class CreateContact extends Component{
	render(){
	    return (
	    	<div className='create-contact'>
	    		<Link to='/' className='close-create-contact'>Close</Link>
	    		<form className='create-contact-form'>
					<ImageInput className='create-contact-avatar-input'
						name='avararURL'
						maxHeight={64}
					/>
					<div className='create-contact-details'>
					<input type='text' className='' name='name' placeholder='Name' value=''/>
					<input type='text' className='' name='email' placeholder='Email' value=''/>
					<button className='create-contact-button'>Add Contact</button>
					</div>
	    		</form>
	    	</div>
	    );
	}
}

export default CreateContact;