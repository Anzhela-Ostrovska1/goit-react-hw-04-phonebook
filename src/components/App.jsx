import { useState, useEffect } from 'react';
import ContactList from './Phonebook/Contacts-list';
import Form from './Phonebook/Form';
import { nanoid } from 'nanoid';
import Filter from './Phonebook/Filter';
import css from './Phonebook/Form.module.css';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const formSubmitHandler = ({ name, number }) => {
    const isContactExist = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isContactExist) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    let newContacts = [...contacts, contact];

    window.localStorage.setItem('contacts', JSON.stringify(newContacts));
    setContacts(newContacts);
  };

  const deleteContact = contactId => {
    let newContacts = contacts.filter(contact => contact.id !== contactId);
    window.localStorage.setItem('contacts', JSON.stringify(newContacts));
    setContacts(newContacts);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');

    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmitHandler} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}
