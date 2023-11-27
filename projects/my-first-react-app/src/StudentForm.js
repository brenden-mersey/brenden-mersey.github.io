import React, { useState } from "react";
import Input from "./Input.js";

const inputFactory = ( label = "", name = "", type = "text", choices = [] ) => {
  return { label, name, type, choices };
};

const formFields = [
  inputFactory( "First name", "firstName" ),
  inputFactory( "Last name", "lastName" ),
  inputFactory( "Age", "age", "number" ),
  inputFactory( "Address", "address" ),
  inputFactory( "Homeroom class number", "homeroomNumber", "number" ),
  inputFactory( "Student ID", "studentID", "number" ),
  inputFactory( "Favorite lunch", "favoriteLunch", "radio", [ "Pizza", "Hamburger", "Sandwich" ])
];

function StudentForm() {  
  
  const [ student, setStudent ] = useState({
    firstName: "",
    lastName: "",
    age: 0,
    address: "",
    homeroomNumber: 0,
    studentID: 0,
    favoriteLunch: "",
  });
  
  const updateStudent = ( key, value ) => {
    setStudent((student) => ({ ...student, [key]: value }));
    console.log(student);
  };
  
  return (
    <>
      <h2>Student Registration Form</h2>
      <p>Please add the following student informatio to register a new student.</p>
      <form>
        {formFields.map((field, index) => {
          return (
            <Input 
              key={field.name + "_" + index} 
              name={field.name} 
              type={field.type} 
              label={field.label}
              choices={field.choices}
              updateStudent={updateStudent} 
            />
          );
        })}
      </form>
      <div>
        <h3>The Current Information:</h3>
        <ul>
          {formFields.map((field, index) => {
            return (
              <li key={field.name + "_" + index}>
                {field.label}: <strong>{ student[field.name] || "" }</strong>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default StudentForm;
