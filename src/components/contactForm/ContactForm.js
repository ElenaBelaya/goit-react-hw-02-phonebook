import PropTypes from 'prop-types';
import shortid from "shortid";
import { Component } from "react";
import { Input, FormBox, Button, TitleInput} from './ContactForm.styled';


class ContactForm extends Component {
state = {
    name: '', 
    number: '',  

  }    
handleChange = event => {
const {name, number, value} = event.currentTarget;
this.setState({
    id: shortid.generate(), 
    [name]: value,
    [number]: value,
       })
}

handleSubmit = event => {
    event.preventDefault();
    this.props.onAddContact(this.state);  
    this.reset();
}

reset =() => {
    this.setState({
        name: '', 
        number: '',  

    })
}
render() {
    return (
<FormBox onSubmit={this.handleSubmit}>
<TitleInput>Name</TitleInput>    
<Input type="text" name="name"
pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
value={this.state.name}
onChange={this.handleChange}
required
/>
<TitleInput>Number</TitleInput>  
<Input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  value={this.state.number}
  onChange={this.handleChange}
  required
/>
<Button type='submit'>Add contact</Button>
</FormBox>
    )}
}

export default ContactForm;


ContactForm.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,

    
};
