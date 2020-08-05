import React from 'react';
import marked from 'marked';
import styles from 'github-markdown-css/github-markdown.css';
import { getMarkdown } from '../../selectors/markdownSelectors';
import { useSelector } from '../../hooks/markdownContext';

const Preview = () => {
  const markdown = useSelector(getMarkdown);
  const __html = marked(markdown);

  return (
    <div className={styles['markdown-body']} dangerouslySetInnerHTML={{ __html }}></div>
  );
};

export default Preview;
