import React from "react";

const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => onRemoveContact(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
