import React from 'react';
import styles from './About.css';
import Developer from '../developers/Developers';

const About = () => {

  return (
    <main className={styles.About}>
      <Developer />
    </main>
  );
};

export default About;
