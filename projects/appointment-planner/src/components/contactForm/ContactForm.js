import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input value={name} name="name" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input value={email} name="email" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input value={phone} name="phone" type="tel" placeholder="Phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" onChange={(e) => setPhone(e.target.value)} />
      <button type="submit">Add Contact</button>
    </form>
  );
};

