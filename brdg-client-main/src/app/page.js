'use client'

import Hero from '../components/Hero';
import About from '../components/About';
import WaitlistForm from '../components/WaitlistForm';
import ContactForm from '../components/ContactForm';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WaitlistForm />
      <ContactForm />
    </>
  );
}