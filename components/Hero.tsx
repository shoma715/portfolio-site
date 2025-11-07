import React from 'react';
import styles from './Hero.module.css'; // CSSモジュールをインポート

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <h1 className={styles.title}>
        竹田 翔真 / Shoma Takeda
      </h1>
      <p className={styles.subtitle}>
        Web Developer
      </p>
    </section>
  );
};

export default Hero;