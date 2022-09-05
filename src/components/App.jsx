import { nanoid } from 'nanoid';
import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Box } from './ContactForm/ContactForm.styled';

export class App extends Component {
  
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    
    filter: ''
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem("saved_contacts");
    const parsedContacts = JSON.parse(savedContacts);
    if (parsedContacts) {
      this.setState({contacts: parsedContacts})
    };
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("saved_contacts", JSON.stringify(this.state.contacts));
    };
    console.log(this.state.contacts);
  };

  handleOnSubmit = (data) => {
    console.log(data);
    data.id = nanoid();

    const sameName = this.state.contacts.find(contact => contact.name === data.name.trim());
    if (!sameName) {
      this.setState(({contacts}) => ({
      contacts: [data, ...contacts]
    }));
    } else {
      return alert(`${sameName.name} is already in contacts.`);
    };  
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
        <Box>
          <h1>Name contacts</h1>

          <ContactForm onSubmit={this.handleOnSubmit} />
        
          <h2>Contacts</h2>

          <Filter filterValue={this.state.filter} onChange={ this.onHandleFilterChange } />

          <ContactList onFilter={this.filterContactList()} onDelete={this.handleDeleteContact}/>
        </Box>
      </>     
    )
  }
 
};