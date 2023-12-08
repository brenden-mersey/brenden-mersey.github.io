import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {

  const [ contacts, setContact ] = useState([]);
  const [ appointments, setAppointments ] = useState([]);

  function addNewContact( name, phone, email ) {
    setContact([ ...contacts, { name, phone, email } ]);
  }

  function addNewAppointment( name, date, time, title ) {
    setAppointments([ ...appointments, { name, date, time, title } ]);
  }

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={ <Root/> }>
      <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
      <Route path={ROUTES.CONTACTS} element={ <ContactsPage contacts={contacts} addContact={addNewContact} /> }/>
      <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addNewAppointment} /> }/>
    </Route>
  ));

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
