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

	clearStateQuery = () => {
		this.setState({ query: ''});
	};

	render(){
		const { contacts,onDeleteContact } = this.props;
		const { query } = this.state;

		let showContacts = contacts;
		if(query){
			const match = new RegExp(escapeRegExp(query),'i');
			showContacts = contacts.filter((contact) => match.test(contact.name) );
		}
		showContacts.sort(sortBy('name'));

	    return (
	    	<div className='list-contacts'>
	    	<div className='list-contacts-top'>
	    		<input type='text'
	    			className='search-contacts'
	    			placeholder='Search contacts'
	    			value={query}
	    			onChange={(event)=> this.updateQuery(event.target.value)}
	    		/>
	    		<a href='#create'
	    			className='add-contact'
	    			onClick={()=> {}}>
	    			Add Contact
	    		</a>
	    	</div>
	    	{contacts.length !== showContacts.length && (
				<div className="showing-contacts">
				<span>Showing contacts {showContacts.length} of {contacts.length} total.</span>
				<button onClick={()=> this.clearStateQuery()}>Show all
				</button>
				</div>
	    	)}
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
		        <button onClick={()=> onDeleteContact(contact)} className='contact-remove'>
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