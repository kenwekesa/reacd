// src/components/NameList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectName } from '../store/actions';
import { useParams } from 'react-router-dom';

const NameList = () => {
  const names = useSelector((state) => state.names);
  const dispatch = useDispatch();

  const handleNameClick = (name) => {
    dispatch(selectName(name));
  };


  const parameters = useParams()

  return (
    <div>
      <h2>{parameters.surname}'s</h2>
      <ul>
        {names.map((nameObj, index) => (
          <li
            key={index}
            onClick={() => handleNameClick(nameObj.name)}
            style={{
              backgroundColor: nameObj.clicked ? 'red' : 'transparent',
              color: nameObj.clicked ? 'white' : 'black',
              cursor: 'pointer',
            }}
          >
            {nameObj.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NameList;
