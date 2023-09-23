// src/App.js
import React from 'react';
import Family from '../components/Family';
import NameList from '../components/NameList';


function Familia() {
  return (
    <div className="App">
      <h1>Names App</h1>
      
      <Family />
      <NameList />
      
    </div>
  );
}

export default Familia;
