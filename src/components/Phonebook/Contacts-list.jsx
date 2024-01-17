import React from 'react';
import css from './Form.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.formList}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contactList} key={id}>
          <p>• {name}:</p>
          <p>{number}</p>
          <button
            onClick={() => onDeleteContact(id)}
            className={css.contactBtn}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
