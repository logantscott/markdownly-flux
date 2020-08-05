import React from 'react';
import { MarkDownContext } from '../hooks/markdownContext';
import { useReducer } from 'react';
import reducer, { initialState } from '../reducers/markdownReducer';

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <MarkDownContext.Provider value={{ state, dispatch }}>
            {children}
        </MarkDownContext.Provider>
    );
};

export default AppProvider;
