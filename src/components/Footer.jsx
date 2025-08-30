import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-purple-500 via-indigo-500 to-orange-400" />
            <span className="font-semibold">Advitiya Labs</span>
          </div>
          <p className="text-sm text-white/70 mt-3 max-w-sm">We are an AI-native product studio crafting voice agents, copilots, and intelligent applications for modern teams.</p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="text-sm font-semibold mb-3 text-white/90">Company</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#work" className="hover:text-white">Work</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold mb-3 text-white/90">Contact</div>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="mailto:hello@advitiyalabs.com" className="hover:text-white">hello@advitiyalabs.com</a></li>
              <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white">X (Twitter)</a></li>
            </ul>
          </div>
        </div>
        <div className="flex md:justify-end items-end">
          <div className="text-xs text-white/50">© {new Date().getFullYear()} Advitiya Labs. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
