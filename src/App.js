import React, { Component } from 'react';
import ListContact from './ListContact';
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
  state = {
    contacts : []
  }

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
