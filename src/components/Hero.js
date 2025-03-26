"use client";
import styles from '../styles/Hero.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';


export default function Hero() {
  return (
    <section className={styles.hero}>
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        BRDG
      </motion.h1>
      
      <motion.p 
        className={styles.subtitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Work. Bank. Play.
      </motion.p>
      
      <motion.p 
        className={styles.description}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        A decentralized, gamified platform where microbusinesses, students, and freelancers build real value through proof of work—not pay-to-play. Earn trust. Unlock governance. Shape your future.

      <div style={{ marginTop: '1.5rem' }}>
        <Link href="#waitlist">
          <button className={styles.btn}>Join the Waitlist</button>
        </Link>
      </div>

      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
       
      </motion.div>
      
      {/* Add animated background particles */}
      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            initial={{ 
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
              opacity: Math.random() * 0.5 + 0.3
            }}
            animate={{ 
              x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
              y: [Math.random() * 100 - 50, Math.random() * 100 - 50],
              opacity: [Math.random() * 0.5 + 0.3, Math.random() * 0.5 + 0.3]
            }}
            transition={{ 
              repeat: Infinity,
              repeatType: "reverse",
              duration: Math.random() * 10 + 10
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`
            }}
          />
        ))}
      </div>
    </section>
  );
}
