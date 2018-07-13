import React, { Component } from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class ListContact extends Component{

	static propTypes = {
		contacts: PropTypes.array.isRequired,
		onDeleteContact : PropTypes.func.isRequired
	};

	state = {
		query: ''
	};

	updateQuery = (query)=> {
		this.setState({query: query.trim()});
	};

	render(){
		let showContacts = this.props.contacts;
		if(this.state.query){
			const match = new RegExp(escapeRegExp(this.state.query),'i');
			showContacts = this.props.contacts.filter((contact) => match.test(contact.name) );
		}
		showContacts.sort(sortBy('name'));

	    return (
	    	<div className='contacts'>
	    	<div className='contacts-top'>
	    		<input type='text'
	    			className='search-contacts'
	    			placeholder='Search contacts'
	    			value={this.state.query}
	    			onChange={(event)=> this.updateQuery(event.target.value)}
	    		/>
	    	</div>
			<ol className='contact-list'>
	      	{showContacts.map((contact) => (
		        <li key={contact.id} className='contact-list-item'>
		        <div className='contact-avatar'
		        	style={{ backgroundImage: `url(${contact.avatarURL})`}}>
		        </div>
		        <div className='contact-details'>
		        	<p>{contact.name}</p>
		        	<p>{contact.email}</p>
		        </div>
		        <button onClick={()=> this.props.onDeleteContact(contact)} className='contact-remove'>
		        	Remove
		        </button>
		        </li>
		    ))}
	    	</ol>
	   	</div>
	    );
	}
}

export default ListContact;