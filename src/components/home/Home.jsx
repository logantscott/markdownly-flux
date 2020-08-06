import React from 'react';
import styles from './Home.css';

const Home = () => {

  return (
    <main className={styles.Home}>
      <h1>Home!</h1>
      <p>A markdown editor that allows our customers to edit markdown
      files and see a preview.</p>
      <img src='..\..\public\images\example.jpg' />
    </main>
  );
};

export default Home;
