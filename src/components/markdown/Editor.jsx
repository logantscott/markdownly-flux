import React from 'react';
import styles from './Editor.css';
import { useSelector, useDispatch } from '../../hooks/markdownContext';
import { updateMarkdown } from '../../actions/markdownActions';
import { getMarkdown } from '../../selectors/markdownSelectors';

const Editor = () => {
  const dispatch = useDispatch();
  const markdown = useSelector(getMarkdown);

  const handleMarkdown = ({ target }) => {
    dispatch(updateMarkdown(target.value));
  };

  return (
    <textarea className={styles.Editor} value={markdown} onChange={handleMarkdown} />
  );
};

export default Editor;
