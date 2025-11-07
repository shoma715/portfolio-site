import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.aboutContainer}>
      <h2 className={styles.title}>About Me</h2>

      <p className={styles.text}>
        同志社大学理工学部インテリジェント情報工学科の4年生、竹田翔真です。
      </p>
      <p className={styles.text}>
        大学ではJavaを用いたオブジェクト指向プログラミングやデータ構造など、情報工学の基盤を学んでいます。
        私は、その学びを活かして「アイデアを形にする」Web開発に強い魅力を感じ、ReactやNode.jsを用いたWebアプリ開発、PHPやGASによるSNS・CMSの自動化ツール開発などを個人で行ってきました。
      </p>
      <p className={styles.text}>
        技術の力で「あったら便利」なものを生み出し、課題を解決するプロセスに、なによりやりがいを感じています。
      </p>

    </section>
  );
};

export default About;