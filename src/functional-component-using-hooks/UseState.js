import React, { useState } from 'react';

const UseStateComponent = () => {
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');

  const handleFirstNameChange = (e)=>{
    setFirstName(e.target.value);
  }
  const handleLastNameChange = (e)=>{
    setLastName(e.target.value);
  }

  return <div className="functional-component">
    <div>
      <label>
        First Name :
        <input value={firstName} onChange={handleFirstNameChange} placeholder="First Name" />
      </label>
    </div>
    <br />
    <div>
      <label>
        Last Name :
        <input value={lastName} onChange={handleLastNameChange} placeholder="Last Name" />
      </label>
    </div>
    <br />
    <div>Display First Name : {firstName}</div>
    <div>Display First Name :  {lastName}</div>
  </div>
}

export default UseStateComponent;