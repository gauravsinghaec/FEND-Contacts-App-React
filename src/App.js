import React, { Component } from 'react';
import ListContact from './ListContact';
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
  state = {
    contacts : []
  }
  //Fetch contacts from server
  componentDidMount(){
    ContactsAPI.getAll()
    .then((contacts)=> {
      this.setState({contacts})
    })
  }

  removeContact = (contact) => {
    this.setState((state)=>({
      contacts : state.contacts.filter((c)=> c.id !== contact.id)
    }))
    //Remove contact from server
    ContactsAPI.remove(contact);
  }
  render() {
    return (
      <ListContact
      onDeleteContact={this.removeContact}
      contacts={this.state.contacts}/>
    );
  }
}

export default App;
