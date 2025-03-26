'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // In a real app, send this data to your API or database
    console.log('Contact submission:', formData);
    
    // Simulate API call
    setTimeout(() => {
      setMessage('Thanks for reaching out! We will get back to you shortly.');
      setShowMessage(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      
      // Hide message after 3 seconds
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="text-center text-lg mb-8">
          Have questions? Want to collaborate? We'd love to hear from you.
        </p>
        
        {showMessage && (
          <div className="bg-[#00AFFF] text-white rounded-lg p-4 max-w-md mx-auto mb-6 text-center">
            {message}
          </div>
        )}
        
        <form 
          onSubmit={handleSubmit} 
          className="bg-[#D0D8DC] rounded-lg shadow-lg p-6 max-w-md mx-auto"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-[#172A3B] font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-[#ADBFC5] rounded-md focus:outline-none focus:border-[#00AFFF]"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-[#172A3B] font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-[#ADBFC5] rounded-md focus:outline-none focus:border-[#00AFFF]"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="subject" className="block text-[#172A3B] font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-[#ADBFC5] rounded-md focus:outline-none focus:border-[#00AFFF]"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-[#172A3B] font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 border border-[#ADBFC5] rounded-md focus:outline-none focus:border-[#00AFFF]"
            ></textarea>
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#00AFFF] text-white py-2 rounded-md font-semibold hover:bg-[#00AFFF]/90 transition-colors"
          >
            {isSubmitting ? 'Sending...' : 'Get in Touch'}
          </button>
        </form>
      </div>
    </section>
  );
}