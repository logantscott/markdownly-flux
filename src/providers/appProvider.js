import React from 'react';
import { MarkDownContext } from '../hooks/markdownContext';
import { useReducer } from 'react';
import reducer, { initialState } from '../reducers/markdownReducer';

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MarkDownContext.Provider value={{ state, dispatch }}>
      {children}
    </MarkDownContext.Provider>
  );
};

export default AppProvider;
