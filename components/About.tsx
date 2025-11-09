import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.aboutContainer}>
      <h2 className={styles.title}>About Me</h2>

      {/* プロフィールリスト */}
      <dl className={styles.profileList}>
        <dt className={styles.profileTerm}>名前</dt>
        <dd className={styles.profileDescription}>
          竹田 翔真 (Shoma Takeda)
        </dd>

        <dt className={styles.profileTerm}>生年月日</dt>
        <dd className={styles.profileDescription}>
          {/* ↓ここに生年月日を記入してください */}
          2002年 7月 15日
        </dd>

        <dt className={styles.profileTerm}>経歴</dt>
        <dd className={styles.profileDescription}>
          {/* ↓ここに経歴を記入してください (改行は <br /> を使います) */}
          2021年 3月 大阪府立高津高等学校 卒業<br />
          2022年 4月 同志社大学 理工学部 インテリジェント情報工学科 入学<br />
          2026年 3月 同志社大学 理工学部 インテリジェント情報工学科 卒業予定<br />
          2026年 4月 アクセンチュア株式会社 入社予定<br />
        </dd>
      </dl>

      <hr className={styles.divider} />

      {/* 挨拶文・自己PR */}
      <p className={styles.text}>
        {/* ↓ここに挨拶文・自己PRを記入してください */}
        ご覧いただきありがとうございます。同志社大学理工学部で情報工学の基盤を学んでいます。
        私は、その学びを活かして「アイデアを形にする」Web開発に強い魅力を感じ、ReactやNode.jsを用いたWebアプリ開発、PHPやGASによるSNS・CMSの自動化ツール開発などを個人で行ってきました。
      </p>
      <p className={styles.text}>
        技術の力で「あったら便利」なものを生み出し、課題を解決するプロセスに、なによりやりがいを感じています。
      </p>

    </section>
  );
};

export default About;