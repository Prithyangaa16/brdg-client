'use client';
import { useState } from 'react';
import styles from '../styles/Form.module.css';
import { motion } from 'framer-motion';
import { postWaitlist } from '@/app/api/waitlist/route';

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id.replace('waitlist', '').toLowerCase()]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    try {
      const result = await postWaitlist(formData);
      if (result.error) {
        throw new Error(result.error || 'Something went wrong');
      }

      setShowSuccess(true);
      setFormData({ name: '', email: '' });
  
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMessage(error.message || 'Failed to submit. Please try again.');
    } finally {
        setIsSubmitting(false);
    }

  };
  
  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Background particle generation
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 10
  }));
  
  return (
    <section id="waitlist" className={`${styles.section} ${styles.ctaSection}`}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Get Early Access
        </motion.h2>
        
        <motion.p 
          className={styles.sectionSubtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Be the first to experience BRDG. Join the waitlist today.
        </motion.p>
        
        {showSuccess && (
          <motion.div 
            className={styles.successMessage}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            Thanks for joining our waitlist! We'll be in touch soon.
          </motion.div>
        )}
        
        {errorMessage && (
          <motion.div 
            className={styles.errorMessage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {errorMessage}
          </motion.div>
        )}
        
        <motion.form 
          onSubmit={handleSubmit} 
          className={styles.form}
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className={styles.formGroup} variants={itemVariants}>
            <label htmlFor="waitlistName">Name</label>
            <input 
              type="text" 
              id="waitlistName" 
              value={formData.name}
              onChange={handleChange}
              required 
              placeholder="Your name"
            />
          </motion.div>
          
          <motion.div className={styles.formGroup} variants={itemVariants}>
            <label htmlFor="waitlistEmail">Email</label>
            <input 
              type="email" 
              id="waitlistEmail" 
              value={formData.email}
              onChange={handleChange}
              required 
              placeholder="your.email@example.com"
            />
          </motion.div>
          
          <motion.button 
            type="submit" 
            className={styles.btn}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : 'Join the Waitlist'}
          </motion.button>
        </motion.form>
        
        {/* Animated background particles */}
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            style={{
              position: 'absolute',
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              top: `${particle.y}%`,
              left: `${particle.x}%`,
            }}
            animate={{
              x: [
                Math.random() * 50 - 25,
                Math.random() * 50 - 25,
                Math.random() * 50 - 25
              ],
              y: [
                Math.random() * 50 - 25,
                Math.random() * 50 - 25,
                Math.random() * 50 - 25
              ],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
        ))}
      </div>
    </section>
  );
}