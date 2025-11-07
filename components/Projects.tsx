import React from 'react';
import styles from './Projects.module.css';

// プロジェクトのデータをここで定義
const projectsData = [
  {
    title: 'シフト提出Webアプリ',
    description: 'ReactとNode.jsで開発した、フルスタックのWebアプリケーションです。アルバイトやサークル活動での「いつシフトに入れるか」の収集と管理を自動化・効率化します。',
    tech: ['React', 'Node.js', 'MySQL', 'JavaScript'],
  },
  {
    title: 'X (旧Twitter) 自動投稿ボット',
    description: 'PHPとMySQLを使用し、設定したキーワードや時間に基づき、Xへの投稿を自動化するシステムを構築しました。',
    tech: ['PHP', 'MySQL'],
  },
  {
    title: 'Instagram & WordPress 自動投稿ツール',
    description: 'Google Apps Script (GAS) を活用し、スプレッドシートや外部データを元に、Instagramへの投稿やWordPressの記事投稿を自動化するツールを開発しました。',
    tech: ['Google Apps Script (GAS)'],
  },
];

const Projects = () => {
  return (
    <section className={styles.projectsContainer}>
      <h2 className={styles.title}>Projects</h2>

      <div>
        {/* projectsData配列をmap関数で回して、各プロジェクトをカードとして表示 */}
        {projectsData.map((project) => (
          <div key={project.title} className={styles.projectCard}>

            {/* プロジェクトタイトル */}
            <h3 className={styles.projectTitle}>{project.title}</h3>

            {/* プロジェクト概要 */}
            <p className={styles.projectDescription}>{project.description}</p>

            {/* 使用技術タグ */}
            <ul className={styles.techList}>
              {project.tech.map((techName) => (
                <li key={techName} className={styles.techItem}>
                  {techName}
                </li>
              ))}
            </ul>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;