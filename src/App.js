import React, { Component } from 'react';
import ListContact from './ListContact';
import CreateContact from './CreateContact';
import * as ContactsAPI from './utils/ContactsAPI'
import { Route } from 'react-router-dom'

class App extends Component {
  state = {
    contacts : [],
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

  addContact = (contact) => {
    //API call to save new contact to server and update the state also
    ContactsAPI.create(contact).then((response) => {
      console.log(response);
      this.setState((state) => ({
        contacts: state.contacts.concat([response])
      }));
    });
  }

  render() {
    return (
      <div className='app'>
        <Route exact path='/' render={() =>(
          <ListContact
          onDeleteContact={this.removeContact}
          contacts={this.state.contacts}
          />
        )}/>
        <Route exact path='/create' render={ ({history}) => (
          <CreateContact
            onAddContact={(contact) => {
              this.addContact(contact);
              /* Once contact added , history objects is used to programmatically
               * change the current location to home using push() method
               */
              history.push('/');
            }
          }
          />
        )}/>
      </div>
    );
  }
}

export default App;
