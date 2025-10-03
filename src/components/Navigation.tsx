import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    'Menu',
    'Reservations',
    'Contact',
    'Hours',
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: '#2A364A' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-white text-lg font-light tracking-wider" style={{ fontFamily: 'Libre Baskerville, serif' }}>
              BAINBRIDGE BISTRO
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-20 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={item === 'Menu' ? '#menu' : item === 'Reservations' ? '#contact' : `#${item.toLowerCase()}`}
                  className="text-white hover:text-gray-300 px-3 py-2 text-xs font-light tracking-wider transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" style={{ backgroundColor: '#2A364A' }}>
            {menuItems.map((item) => (
              <a
                key={item}
                href={item === 'Menu' ? '#menu' : item === 'Reservations' ? '#contact' : `#${item.toLowerCase()}`}
                className="text-white hover:text-gray-300 block px-3 py-2 text-sm font-light tracking-wider transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;