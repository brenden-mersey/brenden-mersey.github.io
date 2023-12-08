import React from "react";
import { ContactPicker } from "../../components/contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <ContactPicker contact={contact} contacts={contacts} setContact={setContact} />
      <input value={title} name="title" type="text" placeholder="Appointment" onChange={(e) => setTitle(e.target.value)} />
      <input value={date} name="date" type="date" min={getTodayString()} onChange={(e) => setDate(e.target.value)} />
      <input value={time} name="time" type="time" min="09:00" max="18:00" onChange={(e) => setTime(e.target.value)} />
      <button type="submit">Add Appointment</button>
    </form>
  );
};
