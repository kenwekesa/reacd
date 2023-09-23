// src/store/actions.js
export const ADD_NAME = 'ADD_NAME';
export const SELECT_NAME = 'SELECT_NAME';

export const addName = (name) => ({
  type: ADD_NAME,
  payload: name,
});

export const selectName = (name) => ({
  type: SELECT_NAME,
  payload: name,
});
