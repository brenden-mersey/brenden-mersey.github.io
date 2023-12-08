import React from "react";

export const ContactPicker = ({ contact, contacts, setContact }) => {

  const handleChange = (e) => {
    setContact(e.target.value);
  };

  if ( contacts.length > 0 ) {
    return (
      <select value={ contact || contacts[0].name } onChange={handleChange}>
        { contacts.map((contact, index) => {
          return <option key={index} value={contact.name}>{contact.name}</option>
        })}
      </select>
    );
  }

  return <p>No contacts available for selection.</p>

};
