import React from 'react';


// eslint-disable-next-line react/prop-types
const List = ({ files }) => {

  // eslint-disable-next-line react/prop-types
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
