import React from 'react';
import Image from 'next/image'; // Next.jsのImageコンポーネントをインポート
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contactContainer}>
      <h2 className={styles.title}>Contact</h2>

      <div className={styles.grid}>

        {/* 連絡先情報（メール） */}
        <div className={styles.contactInfo}>
          <h3 className={styles.subtitle}>Email</h3>
          <a 
            href="mailto:jagariko0302@gmail.com" 
            className={styles.emailLink}
          >
            jagariko0302@gmail.com
          </a>
        </div>

        {/* 連絡先情報（LINE） */}
        <div className={styles.qrCodeContainer}>
          <h3 className={styles.subtitle}>LINE</h3>
          {/* ここにLINEのQRコード画像を表示します。
            'public' フォルダに 'line-qr-code.png' という名前で
            画像ファイルを配置してください。
          */}
          <Image
            src="/line-qr-code.png" // publicフォルダからのパス
            alt="LINE QRコード"
            width={150} // 画像の幅
            height={150} // 画像の高さ
            className={styles.qrCodeImage}
          />
        </div>

      </div>
    </section>
  );
};

export default Contact;