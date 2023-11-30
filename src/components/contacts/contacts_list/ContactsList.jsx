import {
  ContactsListContainer,
  ContactsListTitle,
  ContactList,
  ContactsLi,
  ContactsListButton
} from '../contacts_list/ContactsList.styled';

const ContactsList = ({ contacts, deleteContact }) => (
  <ContactsListContainer>
    <ContactsListTitle>Contacts</ContactsListTitle>
    <ContactList>
      {contacts.map((el) => (
          <ContactsLi id={el.id} key={el.id}>{el.name}:  { el.number}<ContactsListButton onClick={()=>deleteContact(el.id)}>delete</ContactsListButton></ContactsLi>
      ))}
    </ContactList>
  </ContactsListContainer>
);

export default ContactsList