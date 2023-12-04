import React from 'react';

export default function Input({ id, name, type, value }) {
  return (
    <input 
      id={id} 
      name={name} 
      type={type} 
      value={value} />
  );
}