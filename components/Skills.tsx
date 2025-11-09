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
            <li className={styles.listItem}>Next.js</li>
            <li className={styles.listItem}>TypeScript</li>
            <li className={styles.listItem}>JavaScript</li>
            <li className={styles.listItem}>HTML / CSS</li>
            <li className={styles.listItem}>CSS Modules</li>
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

        {/* その他・ツール */}
        <div>
          <h3 className={styles.categoryTitle}>その他・ツール</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>C言語</li>
            <li className={styles.listItem}>Git / GitHub</li>
            <li className={styles.listItem}>VS Code</li>
            <li className={styles.listItem}>Eclipse</li>
            <li className={styles.listItem}>npm</li>
          </ul>
        </div>

      </div> {/* .grid の終わり */}
    </section>
  );
};

export default Skills;