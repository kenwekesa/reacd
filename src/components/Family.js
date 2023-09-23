// src/components/Family.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addName } from '../store/actions';
import { useParams } from 'react-router-dom';

const Family = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  const parameters = useParams()
  const handleAddName = () => {
    if (name.trim() !== '') {
      dispatch(addName(name+" "+parameters.surname));
      setName('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddName}>Add Name</button>
    </div>
  );
};

export default Family;
