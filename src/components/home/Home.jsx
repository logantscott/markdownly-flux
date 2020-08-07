import React from 'react';
import styles from './Home.css';

const Home = () => {

  return (
    <main className={styles.Home}>
      <h2>A markdown editor that allows our customers to edit markdown
      files and see a preview.</h2>
      <img src='/images/example.jpg' />
    </main>
  );
};

export default Home;
