// src/store/reducers.js
import { ADD_NAME, SELECT_NAME } from './actions';

const initialState = {
  names: [],
};

const nameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAME:
      return { ...state, names: [...state.names, { name: action.payload, clicked: false }] };
    case SELECT_NAME:
      return {
        ...state,
        names: state.names.map((nameObj) =>
          nameObj.name === action.payload ? { ...nameObj, clicked: !nameObj.clicked } : nameObj
        ),
      };
    default:
      return state;
  }
};

export default nameReducer;
