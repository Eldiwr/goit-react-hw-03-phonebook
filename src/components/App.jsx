import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';


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

  onHandleChange = (event) => {
        const { name,value } = event.currentTarget;
    
        this.setState({ [name]: value });
  };
  
  filterContactList = () => {

    const { contacts, filter } = this.state;
    const filterValue = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(filterValue));
  };
  

  render() {
    return (
      <>
        <ContactForm onSubmit={this.handleOnSubmit} />
        
        <h2>Contacts</h2>

        <label>
          <input
            type="text"
            name="filter"
            value={this.state.filter}
            onChange={this.onHandleChange}
          />
        </label>

        <ul>
          {this.filterContactList().map(({id, name, number} ) => {
            return (
              <li key={id}><span>{name}</span><span> { number}</span></li>
            )
          })}
        </ul>
      </>     
    )
  }
 
};