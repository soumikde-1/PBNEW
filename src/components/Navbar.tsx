import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Broadcasts', href: '#broadcasts' },
    { name: 'Experience', href: '#experience' },
    { name: 'Languages', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-blue-950/80 shadow-lg shadow-black/60 py-3.5'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Strictly Orange, Blue, Black, White) */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 text-white font-extrabold tracking-tight hover:text-orange-400 transition-colors whitespace-nowrap shrink-0 group"
          >
            <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#ff5722] to-blue-600 text-white font-black flex items-center justify-center text-xs tracking-wider shadow-sm group-hover:scale-105 transition-transform border border-white/20">
              PB
            </span>
            <span className="text-base sm:text-lg tracking-wide uppercase font-bold text-white">
              {PERSONAL_INFO.name}
            </span>
          </a>

          {/* Zone 2: Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs tracking-wider uppercase font-medium">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 ${
                    isActive
                      ? 'text-[#ff5722] border-[#ff5722] font-bold'
                      : 'border-transparent text-white/80 hover:text-white hover:border-blue-500'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Direct Contact CTA (Resume completely removed) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold text-black bg-white hover:bg-orange-500 hover:text-white rounded-full shadow-md transition-all whitespace-nowrap shrink-0"
            >
              <span>Get in touch</span>
              <span className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[10px]">
                &rarr;
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white bg-black/80 hover:bg-blue-950 rounded-lg border border-blue-900/60"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-b border-blue-950 bg-black/98 backdrop-blur-xl px-5 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-white/80 hover:text-orange-400 py-1.5 border-b border-white/10"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-white bg-orange-600 hover:bg-orange-500 rounded-xl shadow-md"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
