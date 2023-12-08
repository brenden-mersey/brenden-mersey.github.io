import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({ appointments, addAppointment, contacts }) => {

  const [ title, setTitle ] = useState("");
  const [ contact, setContact ] = useState("");
  const [ date, setDate ] = useState("");
  const [ time, setTime ] = useState("");

  const resetForm = () => {
    setTitle("");
    setContact("");
    setDate("");
    setTime("");
  };

  const emptyFields = () => {
    return title.trim() === "" || contact.trim() === "" || date.trim() === "" || time.trim() === "" ;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('AppointmentsPage handleSubmit', { contact, date, time, title })
    if ( !emptyFields() ) {
      addAppointment( contact, date, time, title );
      resetForm();
    }
  };

  const formProps = {
    title,
    setTitle,
    contact,
    setContact,
    date,
    setDate,
    time,
    setTime,
    contacts,
    handleSubmit
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm {...formProps} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList list={appointments} />
      </section>
    </div>
  );
};
