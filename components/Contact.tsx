"use client";

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './Contact.module.css';

const Contact = () => {
  // ↓↓↓ ステップ1でコピーした "xxxxxxxx" の部分に書き換えてください
  const [state, handleSubmit] = useForm('xrbrzwng');

  // 送信完了した場合
  if (state.succeeded) {
    return (
      <section id="contact" className={styles.contactContainer}>
        <h2 className={styles.title}>Contact</h2>
        <p className={styles.successMessage}>
          お問い合わせありがとうございます。メッセージは正常に送信されました。
        </p>
      </section>
    );
  }

  // フォーム表示
  return (
    <section id="contact" className={styles.contactContainer}>
      <h2 className={styles.title}>Contact</h2>

      <form onSubmit={handleSubmit}>

        {/* 会社名 */}
        <div className={styles.formGroup}>
          <label htmlFor="company" className={styles.label}>
            会社名（もしあれば）
          </label>
          <input
            id="company"
            type="text"
            name="company"
            className={styles.input}
          />
        </div>

        {/* お名前 */}
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            お名前
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className={styles.input}
            required
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          />
        </div>

        {/* メールアドレス */}
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>
            メールアドレス
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className={styles.input}
            required
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </div>

        {/* お問い合わせ内容 */}
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.label}>
            お問い合わせ内容
          </label>
          <textarea
            id="message"
            name="message"
            className={styles.textarea}
            required
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>

        {/* 送信ボタン */}
        <div>
          <button 
            type="submit" 
            className={styles.submitButton} 
            disabled={state.submitting}
          >
            {state.submitting ? '送信中...' : '送信する'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;