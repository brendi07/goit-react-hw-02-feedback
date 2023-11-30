import { Component } from 'react';
import Feedback from './feedback/Feedback';
import ContactsList from './contacts/contacts_list/ContactsList';
import Phonebook from './contacts/phonebook/PhonebookForm';
import Filter from './contacts/filter/Filter';

import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = newContact => {
    const contactObj = {
      ...newContact,
      id: nanoid(),
    };

    let isExist = this.state.contacts.find(
      item => item.name === newContact.name
    );
    if (isExist) {
      alert(`${isExist.name} is already in contacts.`);
      return
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contactObj],
      }));
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  deleteButton = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  render() {
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <div>
        <Feedback />
        <h2>Phonebook</h2>
        <Phonebook addNewContact={this.handleSubmit} />

        <Filter filter={this.state.filter} handleChange={this.handleChange} />
        <ContactsList
          contacts={visibleContacts}
          deleteContact={this.deleteButton}
        />
      </div>
    );
  }
}

export default App