import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from '../../hooks/markdownContext';
import { getFiles } from '../../selectors/markdownSelectors';
import { updateCurrentFileID } from '../../actions/markdownActions';


const List = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleEdit = ({ target }) => {
    dispatch(updateCurrentFileID(target.value));
    history.push('/editor');
  };

  const files = Object.values(useSelector(getFiles));

  const fileElements = files.map(({ title, body, id }) => (
    <li key={id}>
      <button onClick={handleEdit} value={id}>Edit {title}</button>
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
