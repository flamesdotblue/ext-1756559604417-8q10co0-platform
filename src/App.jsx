import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
      </main>
      <Footer />
    </div>
  );
}
