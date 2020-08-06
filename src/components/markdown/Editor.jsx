import React from 'react';
import styles from './Editor.css';
import { useSelector, useDispatch } from '../../hooks/markdownContext';
import { updateMarkdown } from '../../actions/markdownActions';
import { getCurrentMarkdown, getCurrentFileID } from '../../selectors/markdownSelectors';

const Editor = () => {
  const dispatch = useDispatch();
  const id = useSelector(getCurrentFileID);
  const markdown = useSelector(getCurrentMarkdown);

  const handleMarkdown = ({ target }) => {
    dispatch(updateMarkdown(id, markdown.title, target.value));
  };

  return (
    <textarea className={styles.Editor} value={markdown.body} onChange={handleMarkdown} />
  );
};

export default Editor;
