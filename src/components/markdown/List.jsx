import React from 'react';
import { useSelector } from '../../hooks/markdownContext';
import { getFiles } from '../../selectors/markdownSelectors';


const List = () => {
  const files = useSelector(getFiles);

  const fileElements = files.map(({ title, body, id }) => (
    <li key={id}>
      <h2>{title}</h2>
      <pre>{body.substring(0, 150)}</pre>
    </li>
  ));
  return (
    <ul>
      {fileElements}   
    </ul>
  );
};


export default List;
