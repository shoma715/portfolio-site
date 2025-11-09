import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      {/* 左側のロゴ（お名前） */}
      <a href="#" className={styles.logo}>
        SHOMA TAKEDA
      </a>

      {/* 右側のナビゲーション */}
      <nav>
        <ul className={styles.navList}>
          <li><a href="#about" className={styles.navLink}>About</a></li>
          <li><a href="#skills" className={styles.navLink}>Skills</a></li>
          <li><a href="#projects" className={styles.navLink}>Works</a></li>
          <li><a href="#contact" className={styles.navLink}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;