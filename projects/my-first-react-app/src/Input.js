import React, { useState } from 'react';

function Input({ label, name, type, choices, updateStudent }) {

  const [ inputValue, setInputValue ] = useState("");

  const handleInputChange = ({ target }) => {
    const value = target.value;
    setInputValue(value);
    updateStudent(name, value);
  };
    
  if ( "radio" === type ) {
    return (
      <fieldset>
        <legend>Select a favourite:</legend>
        {choices.map((choice, index) => {
          const checked = index === 0;
          return (
            <div key={`choice-${index}`}>
              <label for={name}>{choice}</label>
              <input 
                type={type} 
                name={name} 
                value={choice}
                onChange={handleInputChange}
              />              
            </div>
          );
        })}
      </fieldset>
    );
  }

  return (
    <>
      <label for={name}>{label}: </label>
      <input 
        id={name} 
        type={type} 
        value={inputValue} 
        onChange={handleInputChange}
      />
    </>
  );
  
}

export default Input;