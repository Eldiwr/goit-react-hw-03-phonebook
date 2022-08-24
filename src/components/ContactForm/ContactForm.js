import PropTypes from 'prop-types';
import { Component } from 'react';
import { Form, Label, Button, Input } from './ContactForm.styled';

export class ContactForm extends Component {

  static PropType = {
    onSubmit: PropTypes.func.isRequired,
  };

    state = {
        name: '',
        number: '',
    };

    onHandleChange = (event) => {
        const { name,value } = event.currentTarget;
    
        this.setState({ [name]: value });
    };
    
    handleSubmit = (event) => {
    
        event.preventDefault();

        this.props.onSubmit(this.state);

        this.reset();
    };
    

    reset = () => {
        this.setState({name: '', number: '' });
    };
  
  render() {
        return (
            <Form onSubmit={this.handleSubmit}>
        <Label>Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.onHandleChange}
          />    
        </Label>
        
        <Label>Tel
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.onHandleChange}
          />
        </Label>

            <Button type='submit'>Add contact</Button>

        </Form>
        )
    }
}
