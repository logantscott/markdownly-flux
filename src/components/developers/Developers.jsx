import React from 'react';
import styles from './Developers.css';

const Developers = () => {
  const developers = [
    {
      name: 'Nikki Kiga',
      title: 'Software Developer',
      image: 'nikki.jfif',
      github: 'nikki-kiga'
    },
    {
      name: 'Max Lamb',
      title: 'Software Developer',
      image: 'max.jfif',
      github: 'MaximusLamb'
    },
    {
      name: 'Logan Scott',
      title: 'Full-Stack Developer',
      image: 'logan.jfif',
      github: 'logantscott'
    }
  ];

  const devElements = developers.map(({ name, title, image, github }) => (
    <figure key={name}>
      <img alt={name} src={`..\\..\\public\\images\\${image}`} />
      <figcaption>
        <p className={styles.name}>{name}</p>
        <p>{title}</p>
        <a href={`https://github.com/${github}`}>Github</a>
      </figcaption>
    </figure>
  ));

  return (
    <section className={styles.Developers}>
      {devElements}
    </section>
  );
};

export default Developers;
