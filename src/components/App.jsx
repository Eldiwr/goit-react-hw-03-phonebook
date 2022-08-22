import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export class App extends Component {
  
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    
    filter:''
  }

  handleOnSubmit = (data) => {
    console.log(data);
    
    data.id = nanoid();

    this.setState(({contacts}) => ({
      contacts: [data, ...contacts]
    }));
  };

  onHandleFilterChange = (event) => {
        const { value } = event.currentTarget;
    
        this.setState({ filter: value });
  };
  
  filterContactList = () => {

    const { contacts, filter } = this.state;
    const filterValue = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(filterValue));
  };

  handleDeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  

  render() {

    return (
      <>
        <ContactForm onSubmit={this.handleOnSubmit} />
        
        <h2>Contacts</h2>

        <Filter filterValue={this.state.filter} onChange={ this.onHandleFilterChange } />

        <ContactList onFilter={this.filterContactList()} onDelete={this.handleDeleteContact}/>
      </>     
    )
  }
 
};