/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import List from '../markdown/List';
import { useDispatch } from '../../hooks/markdownContext';
import { saveMarkdown, updateCurrentFileID } from '../../actions/markdownActions';
import shortid from 'shortid';


const Create = ({ history }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    const id = shortid.generate();
    dispatch(saveMarkdown(id, title, ''));
    dispatch(updateCurrentFileID(id));
    history.push('/editor');
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>Create New Markdown</legend>
          <label>
            Title:
            <input type='text' name='title' value={title} onChange={({ target }) => setTitle(target.value)} required/>
          </label>
          <button type='submit'>Create</button>
        </fieldset>
      </form>
      <List />
    </>
  );
};

export default Create;
