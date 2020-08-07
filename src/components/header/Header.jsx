import React from 'react';
import styles from './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header className={styles.Header}>
      <h1>Markdownly</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/files'>Markdown Files</Link>
        <Link to='/editor'>Editor</Link>
        <Link to='/about'>About</Link>
      </nav>
    </header>
  );
};

export default Header;
