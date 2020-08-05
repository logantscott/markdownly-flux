import React from 'react';
import Preview from '../markdown/Preview';
import Editor from '../markdown/Editor';
import styles from './Document.css';

const Document = () => {

  return (
    <>
      <div className={styles.Document}>
        <Editor />
        <Preview />
      </div>
    </>
  );
};

export default Document;
