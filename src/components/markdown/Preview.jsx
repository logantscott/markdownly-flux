import React from 'react';
import styles from 'github-markdown-css/github-markdown.css';
import { getMarkdownPreview } from '../../selectors/markdownSelectors';
import { useSelector } from '../../hooks/markdownContext';

const Preview = () => {
  const __html = useSelector(getMarkdownPreview);

  return (
    <div className={styles['markdown-body']} dangerouslySetInnerHTML={{ __html }}></div>
  );
};

export default Preview;
