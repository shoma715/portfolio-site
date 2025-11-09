import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  return (
    <section id="skills" className={styles.skillsContainer}>
      <h2 className={styles.title}>Skills</h2>

      <div className={styles.grid}>

        {/* フロントエンド */}
        <div>
          <h3 className={styles.categoryTitle}>フロントエンド</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>React</li>
            <li className={styles.listItem}>JavaScript</li>
            <li className={styles.listItem}>HTML / CSS</li>
          </ul>
        </div>

        {/* バックエンド */}
        <div>
          <h3 className={styles.categoryTitle}>バックエンド</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>Node.js</li>
            <li className={styles.listItem}>PHP</li>
          </ul>
        </div>

        {/* データベース */}
        <div>
          <h3 className={styles.categoryTitle}>データベース</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>MySQL</li>
          </ul>
        </div>

        {/* 自動化・スクリプティング */}
        <div>
          <h3 className={styles.categoryTitle}>自動化・スクリプティング</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>Python</li>
            <li className={styles.listItem}>Google Apps Script (GAS)</li>
            <li className={styles.listItem}>VBA</li>
          </ul>
        </div>

        {/* 基礎・その他 */}
        <div>
          <h3 className={styles.categoryTitle}>基礎・その他</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>Java</li>
            <li className={styles.listItem}>C言語</li>
            <li className={styles.listItem}>Git / GitHub</li>
          </ul>
        </div>

      </div> {/* .grid の終わり */}
    </section>
  );
};

export default Skills;