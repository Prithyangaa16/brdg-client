"use client";
import styles from '../styles/About.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [refText, inViewText] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [refImage, inViewImage] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          What is BRDG?
        </motion.h2>
        
        <div className={styles.aboutContent}>
          <motion.div 
            className={styles.aboutText}
            ref={refText}
            initial="hidden"
            animate={inViewText ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: {
                  duration: 0.6
                }
              }
            }}
          >
            <motion.h3
              initial={{ opacity: 0 }}
              animate={inViewText ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Bridging Talent With Opportunity
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={inViewText ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              BRDG is a community-owned platform built for the next generation of independent workers. We connect microbusinesses, students, and freelancers in a fully gamified ecosystem—where every task you complete builds your reputation and unlocks influence.

            </motion.p>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={inViewText ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Unlike traditional platforms, BRDG doesn’t sell visibility or power. Instead, we reward contribution through Player Tokens and Governance Tokens, both stored on-chain with no gas fees.

            </motion.p>
            
            <motion.ul
              variants={listVariants}
              initial="hidden"
              animate={inViewText ? "visible" : "hidden"}
            >
              <motion.li variants={itemVariants}>
                <strong>Work</strong> - Access flexible, meaningful projects that match your skills and schedule
              </motion.li>
              <motion.li variants={itemVariants}>
                <strong>Bank</strong> - Get paid quickly and transparently, with robust financial tools to manage your earnings
              </motion.li>
              <motion.li variants={itemVariants}>
                <strong>Play</strong> - Enjoy the freedom to pursue your passions while maintaining financial security
              </motion.li>
            </motion.ul>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={inViewText ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Earn trust. Stake your support. Help govern the future of work. Welcome to BRDG—where you don’t just work, you build the bridge to what comes next.

            </motion.p>
          </motion.div>
          
          <motion.div 
            className={styles.aboutImage}
            ref={refImage}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inViewImage ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className={styles.imageContainer}
              whileHover={{ 
                scale: 1.03,
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)' 
              }}
              transition={{ duration: 0.3 }}
            >
              <Image 
                src="/aboutImg.png" 
                alt="BRDG Platform"
                width={400}
                height={300}
                layout="responsive"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
