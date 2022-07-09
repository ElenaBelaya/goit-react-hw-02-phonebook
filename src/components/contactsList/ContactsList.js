import PropTypes from 'prop-types';
import { DeleteButton, Li } from './ContactsList.Styled';

const ContactsList = ({contacts, onDeleteContact}) => (
        <ul>
        {contacts.map(({id, name, number}) => (
        <Li key={id}>{name}: {number}
        <DeleteButton onClick={() => onDeleteContact(id)}>Delete</DeleteButton>
        </Li> 
           
        )) }      
      
       </ul>      
   )

 
export default ContactsList;

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            onDeleteContact: PropTypes.func,

        
        })
    )   
}

