'use client';
import { useState } from 'react';

export default function Waitlist() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
    console.log('Waitlist submission:', formData);
    
    // Simulate API call
    setTimeout(() => {
      setMessage('Thanks for joining our waitlist! We will be in touch soon.');
      setShowMessage(true);
      setFormData({ name: '', email: '' });
      setIsSubmitting(false);
      
      // Hide message after 3 seconds
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="waitlist" className="section bg-[#00AFFF] text-white">
      <div className="container">
        <h2 className="heading text-center text-white">Get Early Access</h2>
        <p className="text-center text-xl mb-8">
          Be the first to experience BRDG. Join the waitlist today.
        </p>
        
        {showMessage && (
          <div className="bg-white text-[#172A3B] rounded-lg p-4 max-w-md mx-auto mb-6 text-center">
            {message}
          </div>
        )}
        
        <form 
          onSubmit={handleSubmit} 
          className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto"
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
          
          <div className="mb-6">
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
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#172A3B] text-white py-2 rounded-md font-semibold hover:bg-[#172A3B]/90 transition-colors"
          >
            {isSubmitting ? 'Processing...' : 'Join the Waitlist'}
          </button>
        </form>
      </div>
    </section>
  );
}