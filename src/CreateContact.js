import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ImageInput from './ImageInput';
import serializeForm from 'form-serialize';

class CreateContact extends Component{
	handleSubmit = (e) => {
		e.preventDefault();
		const contact_data = serializeForm(e.target, {hash: true});
		console.log(contact_data);
		if(this.props.onAddContact)
			this.props.onAddContact(contact_data);
	}
	render(){
	    return (
	    	<div className='create-contact'>
	    		<Link to='/' className='close-create-contact'>Close</Link>
	    		<form onSubmit={this.handleSubmit} className='create-contact-form'>
					<ImageInput className='create-contact-avatar-input'
						name='avatarURL'
						maxHeight={64}
					/>
					<div className='create-contact-details'>
					<input type='text' className='' name='name' placeholder='Name' />
					<input type='text' className='' name='email' placeholder='Email' />
					<button className='create-contact-button'>Add Contact</button>
					</div>
	    		</form>
	    	</div>
	    );
	}
}

export default CreateContact;