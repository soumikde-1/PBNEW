import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-blue-950 text-white/70 text-xs pt-12 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newsroom Professional Media Strip Banner */}
        <div className="mb-12 rounded-3xl overflow-hidden border border-blue-950 bg-[#080c14] relative group shadow-2xl">
          <div className="h-40 sm:h-52 w-full relative overflow-hidden">
            <img
              src="/news_studio_banner.jpg"
              alt="Live Television Broadcast Newsroom Studio"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
            <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-center max-w-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-orange-400 font-bold">
                  Live Television Newsroom
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                Aarohi News Bangla Broadcast Operations
              </h3>
              <p className="text-xs text-white/80 mt-1.5 leading-relaxed">
                Studio news bulletins, teleprompter mastery, and daily broadcast reporting in Kolkata.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-blue-950">
          <div>
            <span className="text-base font-bold text-white tracking-tight uppercase">
              {PERSONAL_INFO.name}
            </span>
            <p className="text-xs text-orange-400 mt-0.5 font-medium">
              Television News Anchor at Aarohi News Bangla · Kolkata & Siliguri
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-white/70">
            <a href="#hero" className="hover:text-white transition-colors">
              Home
            </a>
            <a href="#broadcasts" className="hover:text-white transition-colors">
              Broadcasts & Shows
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About & Education
            </a>
            <a href="#experience" className="hover:text-white transition-colors">
              Experience & Credentials
            </a>
            <a href="#skills" className="hover:text-white transition-colors">
              Languages & Focus
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact & Bookings
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#080c14] hover:bg-blue-950 text-white/80 hover:text-white border border-blue-900 transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-white/50">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Direct: {PERSONAL_INFO.contact.phoneFormatted}</span>
            <span aria-hidden="true">·</span>
            <span>{PERSONAL_INFO.contact.email}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
