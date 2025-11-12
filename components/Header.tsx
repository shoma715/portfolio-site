"use client"; 

import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';
// 
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { id: 'about', name: 'About' },
  { id: 'skills', name: 'Skills' },
  { id: 'projects', name: 'Works' },
  { id: 'contact', name: 'Contact' },
];

const Header = () => {
  const [activeId, setActiveId] = useState('');
  // 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // 
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -70% 0px' }
    );

    navLinks.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) {
        observer.observe(element);
      }
    });

    // 
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto'; // 
      navLinks.forEach((link) => {
        const element = document.getElementById(link.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [isMobileMenuOpen]); // 

  // 
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // 
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={styles.header}>
        {/* Logo */}
        <a 
          href="#" 
          className={styles.logo}
          onClick={() => {
            setActiveId('');
            handleMobileLinkClick(); // 
          }}
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
                    link.id === activeId ? styles.active : ''
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

         <button 
          className={styles.hamburgerButton} 
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

       <div 
        className={`${styles.mobileNavOverlay} ${
          isMobileMenuOpen ? styles.open : ''
        }`}
      >
        <ul className={styles.mobileNavList}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a 
                href={`#${link.id}`} 
                className={styles.mobileNavLink}
                onClick={() => {
                  setActiveId(link.id);
                  handleMobileLinkClick(); // 
                }}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;