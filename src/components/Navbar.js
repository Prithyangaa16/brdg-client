"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`} id="top">
      <motion.div 
        className={styles.logo}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          whileHover={{ scale: 1.05, color: "#fff" }}
          transition={{ duration: 0.2 }}
        >
          BRDG
        </motion.h2>
      </motion.div>
      
      <nav>
        <motion.ul 
          className={`${styles.navList} ${isMobileMenuOpen ? styles.show : ''}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2, staggerChildren: 0.1 }}
        >
          {[
            { href: "/#top", text: "Home" },
            { href: "/#about", text: "About" },
            { href: "/#contact", text: "Contact" }
          ].map((item, index) => (
            <motion.li 
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              whileHover={{ y: -3 }}
            >
              <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
                {item.text}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
        
        <motion.button 
          className={styles.mobileMenuToggle}
          onClick={toggleMobileMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </motion.button>
      </nav>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className={styles.mobileMenuBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </header>
  );
}