"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Footer.module.css';
import Link from 'next/link';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  
  const handlePrivacyClick = (e) => {
    e.preventDefault();
    setShowPrivacyPolicy(true);
  };
  
  const handleTermsClick = (e) => {
    e.preventDefault();
    setShowTermsOfService(true);
  };
  
  const handleFAQClick = (e) => {
    e.preventDefault();
    setShowFAQ(true);
  };
  
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWave}></div>
      
      <div className={styles.container}>
        <motion.div 
          className={styles.footerLogo}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          BRDG
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Bridging talent with opportunity in the evolving landscape of work.
        </motion.p>
        
        <motion.div 
          className={styles.footerLinks}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="#" className={styles.footerLink} onClick={handlePrivacyClick}>
            <motion.span whileHover={{ color: "var(--primary-color)" }}>
              Privacy Policy
            </motion.span>
          </a>
          
          <a href="#" className={styles.footerLink} onClick={handleTermsClick}>
            <motion.span whileHover={{ color: "var(--primary-color)" }}>
              Terms of Service
            </motion.span>
          </a>
          
          <a href="#" className={styles.footerLink} onClick={handleFAQClick}>
            <motion.span whileHover={{ color: "var(--primary-color)" }}>
              FAQ
            </motion.span>
          </a>
          
          <Link href="#contact" className={styles.footerLink}>
            <motion.span whileHover={{ color: "var(--primary-color)" }}>
              Contact
            </motion.span>
          </Link>
        </motion.div>
        
        <motion.p 
          className={styles.copyrightText}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {currentYear} BRDG. All rights reserved. 
        </motion.p>
      </div>

      {/* Privacy Policy Popup */}
      {showPrivacyPolicy && (
        <div className={styles.modalOverlay} onClick={() => setShowPrivacyPolicy(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <a href="#" onClick={(e) => {e.preventDefault(); setShowPrivacyPolicy(false);}} className={styles.closeButton}>×</a>
            <h2>Privacy Policy</h2>
            <div className={styles.policyContent}>
              <p><strong>Effective Date:</strong> 12th March 2025<br />
              <strong>Last Updated:</strong> 12th March 2025</p>

              <h3>1. Introduction</h3>
              <p>Welcome to brdgthegap. We are committed to protecting your privacy and ensuring that your personal data is handled responsibly. This Privacy Policy outlines how we collect, use, store, and protect your information when you visit our website, sign up for our platform, or engage with our services.</p>

              <h3>2. Information We Collect</h3>
              <p>We may collect certain types of information necessary to provide and improve our services, including:</p>
              <ul>
                <li>Personal Information: Name, email address, and any details you voluntarily provide when signing up or interacting with the platform.</li>
                <li>Usage Data: General analytics on how users engage with our platform.</li>
                <li>Cookies and Tracking Technologies: Used to improve user experience and platform performance.</li>
              </ul>

              <h3>3. How We Use Your Information</h3>
              <p>Your information may be used to:</p>
              <ul>
                <li>Provide and operate our services.</li>
                <li>Send updates and platform-related communications.</li>
                <li>Improve user experience through analytics and performance enhancements.</li>
                <li>Ensure platform security and compliance with regulations.</li>
              </ul>

              <h3>4. Data Sharing and Disclosure</h3>
              <p>We do not sell or trade user data. Your information may be shared only under the following circumstances:</p>
              <ul>
                <li>With Service Providers: Third-party tools that help us operate the platform securely.</li>
                <li>For Legal Compliance: When required by law or regulatory authorities.</li>
              </ul>

              <h3>5. Data Security</h3>
              <p>We implement industry-standard security measures to protect your data from unauthorized access, alteration, disclosure, or misuse.</p>

              <h3>6. Your Rights</h3>
              <p>Users have the right to:</p>
              <ul>
                <li>Access or update their personal data.</li>
                <li>Opt out of non-essential communications.</li>
                <li>Request information about the data stored about them.</li>
              </ul>

              <h3>7. Contact Information</h3>
              <p>For inquiries regarding this Privacy Policy, contact us at contact@brdgthegap.com.</p>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Service Popup */}
      {showTermsOfService && (
        <div className={styles.modalOverlay} onClick={() => setShowTermsOfService(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <a href="#" onClick={(e) => {e.preventDefault(); setShowTermsOfService(false);}} className={styles.closeButton}>×</a>
            <h2>Terms of Service</h2>
            <div className={styles.policyContent}>
              <p><strong>Effective Date:</strong> 12th March 2025<br />
              <strong>Last Updated:</strong> 12th March 2025</p>

              <h3>1. Acceptance of Terms</h3>
              <p>By accessing or using brdgthegap, you agree to these Terms of Service ("Terms"). If you do not agree, you may not use the platform.</p>

              <h3>2. Free Access to Services</h3>
              <p>brdgthegap is completely free to use. There are no sign-up fees, no membership costs, and no hidden charges. Our goal is to provide an accessible platform for individuals and businesses without financial barriers.</p>

              <h3>3. User Conduct</h3>
              <p>Users must not:</p>
              <ul>
                <li>Provide false information or impersonate others.</li>
                <li>Engage in unlawful, abusive, or disruptive behavior.</li>
                <li>Attempt to manipulate or misuse the platform.</li>
              </ul>

              <h3>4. Service Availability</h3>
              <p>We strive to ensure a seamless experience but do not guarantee uninterrupted service. We may update, modify, or suspend services as needed.</p>

              <h3>5. Limitation of Liability</h3>
              <p>brdgthegap is not liable for any indirect or incidental damages arising from the use of the platform, including but not limited to data loss, service interruptions, or unauthorized access.</p>

              <h3>6. Changes to Terms</h3>
              <p>We reserve the right to update these Terms. Continued use of the platform after changes take effect constitutes acceptance of the revised Terms.</p>

              <h3>7. Contact Information</h3>
              <p>For questions regarding these Terms, contact contact@brdgthegap.com.</p>
            </div>
          </div>
        </div>
      )}

      {/* FAQ Popup */}
      {showFAQ && (
        <div className={styles.modalOverlay} onClick={() => setShowFAQ(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <a href="#" onClick={(e) => {e.preventDefault(); setShowFAQ(false);}} className={styles.closeButton}>×</a>
            <h2>Frequently Asked Questions (FAQs)</h2>
            <div className={styles.policyContent}>
              <h3>1. What is brdgthegap?</h3>
              <p>brdgthegap is a free to use platform designed to connect skilled individuals with opportunities in a seamless and efficient way.</p>

              <h3>2. How much does it cost to use brdgthegap?</h3>
              <p>There are no costs, fees, or subscriptions. brdgthegap is completely free to use.</p>

              <h3>3. How do I sign up?</h3>
              <p>You can sign up by filling out the pre-launch waiting list form available on our website.</p>

              <h3>4. What happens after I sign up?</h3>
              <p>Once you join the waiting list, you will receive updates and early access information before the platform officially launches.</p>

              <h3>5. How does brdgthegap verify users?</h3>
              <p>We implement measures to ensure trust and reliability on our platform, but further details will be provided closer to launch.</p>

              <h3>6. Can businesses use brdgthegap?</h3>
              <p>Yes, businesses will be able to engage with skilled individuals through the platform. Additional details will be shared upon launch.</p>

              <h3>7. How can I contact support?</h3>
              <p>For inquiries, please email contact@brdgthegap.com.</p>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}