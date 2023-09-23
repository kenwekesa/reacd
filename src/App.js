// src/App.js
import React from 'react';
import './App.css';
import NameList from './components/NameList';
import Family from './components/Family';
import Familia from './pages/Familia';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='/familia/:surname' element={<Familia/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
