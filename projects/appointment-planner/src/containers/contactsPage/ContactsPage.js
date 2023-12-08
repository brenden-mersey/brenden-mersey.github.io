import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {

  const [ email, setEmail ] = useState("");
  const [ name, setName ] = useState("");
  const [ phone, setPhone ] = useState("");
  const [ duplicate, setDuplicate ] = useState(false);

  const resetForm = () => {
    setEmail("");
    setName("");
    setPhone("");
  };

  const emptyFields = () => {
    return email.trim() === "" || name.trim() === "" || phone.trim() === "";
  };

  const isDuplicate = () => {
    return contacts.some((contact) => {
      return contact.name === name;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ( !duplicate && !emptyFields() ) {
      addContact( name, phone, email );
      resetForm();
    }
  };

  useEffect(() => {
    setDuplicate(isDuplicate());
  }, [ name ] );

  const formProps = {
    email,
    setEmail,
    name,
    setName,
    phone,
    setPhone,
    handleSubmit
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm {...formProps} />
      </section>
      { duplicate ? <h2 style={{ marginTop: 20 }}>Oops! Contact already in contacts list.</h2> : "" }
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList list={contacts} />
      </section>
    </div>
  );

};
