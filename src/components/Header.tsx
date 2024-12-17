import React from 'react';
import { Music2 } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white py-4 px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Music2 className="h-8 w-8" />
          <h1 className="text-2xl font-bold">LiveRequest</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-purple-200 transition-colors">Home</a>
          <a href="#" className="hover:text-purple-200 transition-colors">Live Now</a>
          <a href="#" className="hover:text-purple-200 transition-colors">My Requests</a>
        </nav>
      </div>
    </header>
  );
}