import React, { useContext } from 'react';


export const MarkDownContext = React.createContext();

export const useMarkdownContext = () => useContext(MarkDownContext);

export const useDispatch = () => {
  const { dispatch } = useMarkdownContext(MarkDownContext);
  return dispatch;
};

export const useSelector = selectorFn => {
  const { state } = useMarkdownContext(MarkDownContext);
  return selectorFn(state);
};
  
