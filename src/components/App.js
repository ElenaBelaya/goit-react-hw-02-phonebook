import { Component } from "react";
import ContactForm from "./contactForm";
import { Container, Title } from './contactForm/ContactForm.styled';
import ContactsList from './contactsList';
import Filter from './filter';


class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    
      }  

handleAddContact = data => {
    const found = this.state.contacts.some(function (contact) {
      return contact.name === data.name;
    });
    if(!found) {
  this.setState(prevState => ({
  contacts: [data, ...prevState.contacts],
  })) 
  } else {
    alert(`${data.name} is already in contacts`)
  }
 
      }
    
handleDeleteContact = (id) => {
this.setState(prevState => ({
  contacts: prevState.contacts.filter(contact => contact.id !== id) 
}))

}
handleFilterContacts = event => {
  this.setState({
      filter: event.currentTarget.value, 
    })
   }

   getVisibleContacts =() => {
     const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter) 
       ) 
   }
 

  render() {
    return (      
        <Container>
        <Title>Phonebook</Title>   
        <ContactForm
        onAddContact={this.handleAddContact}
        />
        <Title>Contacts</Title>
      <Filter
      filter={this.filter}
      onFilterContacts={this.handleFilterContacts}
      />
       {this.state.contacts !== [] &&
        <ContactsList
        contacts={this.getVisibleContacts()}
        onDeleteContact={this.handleDeleteContact}
        />
       }        
        </Container> 
     
    );
  };
  }
 
export default App;