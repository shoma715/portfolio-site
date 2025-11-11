import React from 'react';
import styles from './Skills.module.css';

// react-iconsライブラリから、より安全な Font Awesome (Fa) のアイコンを主にインポートします
import { 
  FaReact, 
  FaNodeJs, 
  FaJava, 
  FaGitAlt, 
  FaGithub, 
  FaNpm,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaDatabase,
  FaPython,
  FaFileCode // 
} from 'react-icons/fa';

const Skills = () => {
  return (
    <section id="skills" className={styles.skillsContainer}>
      <h2 className={styles.title}>Skills</h2>

      <div className={styles.grid}>

        {/* フロントエンド */}
        <div>
          <h3 className={styles.categoryTitle}>フロントエンド</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}><FaReact className={styles.icon} /> React</li>
            <li className={styles.listItem}><FaReact className={styles.icon} /> Next.js</li>
            <li className={styles.listItem}><FaFileCode className={styles.icon} /> TypeScript</li>
            <li className={styles.listItem}><FaFileCode className={styles.icon} /> JavaScript</li>
            <li className={styles.listItem}><FaHtml5 className={styles.icon} /> HTML</li>
            <li className={styles.listItem}><FaCss3Alt className={styles.icon} /> CSS</li>
            <li className={styles.listItem}><FaCss3Alt className={styles.icon} /> CSS Modules</li>
          </ul>
        </div>

        {/* バックエンド */}
        <div>
          <h3 className={styles.categoryTitle}>バックエンド</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}><FaNodeJs className={styles.icon} /> Node.js</li>
            <li className={styles.listItem}><FaPhp className={styles.icon} /> PHP</li>
          </ul>
        </div>

        {/* データベース */}
        <div>
          <h3 className={styles.categoryTitle}>データベース</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}><FaDatabase className={styles.icon} /> MySQL</li>
          </ul>
        </div>

        {/* 自動化・スクリプティング */}
        <div>
          <h3 className={styles.categoryTitle}>自動化・スクリプティング</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}><FaPython className={styles.icon} /> Python</li>
            <li className={styles.listItem}><FaFileCode className={styles.icon} /> Google Apps Script</li>
            <li className={styles.listItem}><FaFileCode className={styles.icon} /> VBA</li>
          </ul>
        </div>

        
        {/* その他・ツール */}
        <div>
          <h3 className={styles.categoryTitle}>その他・ツール</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}><FaFileCode className={styles.icon} /> C言語</li>
            <li className={styles.listItem}><FaGitAlt className={styles.icon} /> Git / GitHub</li>
            <li className={styles.listItem}><FaFileCode className={styles.icon} /> VS Code</li>
            <li className={styles.listItem}><FaFileCode className={styles.icon} /> Eclipse</li>
            <li className={styles.listItem}><FaNpm className={styles.icon} /> npm</li>
          </ul>
        </div>

      </div> {/* .grid の終わり */}
    </section>
  );
};

export default Skills;