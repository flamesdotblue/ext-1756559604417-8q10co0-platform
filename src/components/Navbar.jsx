import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-gray-950/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-purple-500 via-indigo-500 to-orange-400 shadow-lg shadow-purple-500/30" />
          <span className="text-lg font-semibold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80">Advitiya Labs</span>
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
        <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-white text-gray-900 hover:bg-white/90 transition">
          Get in touch
        </a>
      </div>
    </header>
  );
}
