import React from 'react';
import styles from './About.css';

const About = () => {

  return (
    <main className={styles.About}>
      <figure>
        <img alt='nikki' src='..\..\public\images\nikki.jfif' />
        <figcaption>
          <p className={styles.name}>Nikki Kiga</p>
          <p>Software Developer</p>
          <a href='https://github.com/nikki-kiga'>Github</a>
        </figcaption>
      </figure>
      <figure>
        <img alt='max' src='..\..\public\images\max.jfif' />
        <figcaption>
          <p className={styles.name}>Max Lamb</p>
          <p>Software Developer</p>
          <a href='https://github.com/MaximusLamb'>Github</a>
        </figcaption>
      </figure>
      <figure>
        <img alt='logan' src='..\..\public\images\logan.jfif' />
        <figcaption>
          <p className={styles.name}>Logan Scott</p>
          <p>Full-Stack Developer</p>
          <a href='https://github.com/logantscott'>Github</a>
        </figcaption>
      </figure>
    </main>
  );
};

export default About;
