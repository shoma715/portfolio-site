"use client"; 

import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

// 
const navLinks = [
  { id: 'about', name: 'About' },
  { id: 'skills', name: 'Skills' },
  { id: 'projects', name: 'Works' },
  { id: 'contact', name: 'Contact' },
];

const Header = () => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      // 
      { rootMargin: '-30% 0px -70% 0px' }
    );

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      navLinks.forEach((link) => {
        const element = document.getElementById(link.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []); 

  return (
    <header className={styles.header}>

      {/* --- ここを修正しました --- */}
      <a 
        href="#" 
        className={styles.logo}
        onClick={() => setActiveId('')} // 
      >
        SHOMA TAKEDA
      </a>

      <nav>
        <ul className={styles.navList}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a 
                href={`#${link.id}`} 
                className={`${styles.navLink} ${
                  link.id === activeId ? styles.active : '' // 
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {/* --- ここまで修正しました --- */}

    </header>
  );
};

export default Header;