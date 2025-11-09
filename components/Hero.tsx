import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroContainer}>

      {/* 左カラム：テキスト */}
      <div className={styles.leftColumn}>
        <h1 className={styles.title}>SHOMA</h1>
        <h1 className={styles.title}>TAKEDA</h1>
        <h2 className={styles.outlineTitle}>PORTFOLIO</h2>
      </div>

      {/* 右カラム：画像 */}
      <div className={styles.rightColumn}>
        {/* ステップ3：
          ここに自分の写真を配置します。
          'public' フォルダに 'my-photo.png' などの名前で
          画像ファイルを配置してください。
        */}
        <Image
          src="/me.png" // 
          alt="竹田 翔真のポートレート"
          width={350}
          height={450}
          className={styles.image}
          priority // 
        />
      </div>

      {/* 下部のスクロール文字 */}
      <div className={styles.marqueeContainer}>
        <span className={styles.marqueeText}>
          THANK YOU FOR VISITING. SCROLL DOWN. &nbsp;
          THANK YOU FOR VISITING. SCROLL DOWN. &nbsp;
        </span>
      </div>

    </section>
  );
};

export default Hero;