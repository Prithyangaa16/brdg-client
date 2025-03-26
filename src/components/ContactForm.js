import { useState } from 'react';
import styles from '../styles/Form.module.css';
import { motion } from 'framer-motion';

import { postContact } from '@/app/api/contact/route';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id.replace('contact', '').toLowerCase()]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    try {
      const result = await postContact(formData);
      if (result.error) {
        throw new Error(result.error || 'Something went wrong');
      }
      
      setShowSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
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
  
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h2>
        
        <motion.p 
          className={styles.sectionSubtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Have questions? Want to collaborate? We'd love to hear from you.
        </motion.p>
        
        {showSuccess && (
          <motion.div 
            className={styles.successMessage}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            Thanks for reaching out! We'll get back to you shortly.
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
            <label htmlFor="contactName">Name</label>
            <input 
              type="text" 
              id="contactName" 
              value={formData.name}
              onChange={handleChange}
              required 
              placeholder="Your name"
            />
          </motion.div>
          
          <motion.div className={styles.formGroup} variants={itemVariants}>
            <label htmlFor="contactEmail">Email</label>
            <input 
              type="email" 
              id="contactEmail" 
              value={formData.email}
              onChange={handleChange}
              required 
              placeholder="your.email@example.com"
            />
          </motion.div>
          
          <motion.div className={styles.formGroup} variants={itemVariants}>
            <label htmlFor="contactSubject">Subject</label>
            <input 
              type="text" 
              id="contactSubject" 
              value={formData.subject}
              onChange={handleChange}
              required 
              placeholder="What's this about?"
            />
          </motion.div>
          
          <motion.div className={styles.formGroup} variants={itemVariants}>
            <label htmlFor="contactMessage">Message</label>
            <textarea 
              id="contactMessage" 
              value={formData.message}
              onChange={handleChange}
              required 
              placeholder="Tell us more..."
              rows="4"
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
            {isSubmitting ? 'Sending...' : 'Get in Touch'}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}