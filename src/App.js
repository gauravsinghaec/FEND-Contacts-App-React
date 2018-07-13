import React, { Component } from 'react';
import ListContact from './ListContact';
import CreateContact from './CreateContact';
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
  state = {
    contacts : [],
    screen: 'list'
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
      <div className='app'>
        {this.state.screen === 'list' && (
          <ListContact
          onDeleteContact={this.removeContact}
          contacts={this.state.contacts}/>
        )}
        {this.state.screen === 'create' && (
          <CreateContact />
        )}
      </div>
    );
  }
}

export default App;
