import React from 'react';
import { ArrowUpRight, Radio, Play } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  customAvatar: string | null;
  onSelectBroadcast: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ customAvatar, onSelectBroadcast }) => {
  return (
    <section id="hero" className="relative pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 overflow-hidden">
      {/* Background Studio Lighting Glow (Strictly Orange, Blue, Black, White) */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-[850px] h-[500px] bg-gradient-to-b from-orange-600/15 via-blue-600/15 to-transparent blur-[140px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Main Curved Hero Canvas Card with News Studio Backdrop */}
        <div className="relative rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] overflow-hidden bg-gradient-to-b from-[#ff5722] via-[#111827] to-black text-white p-5 sm:p-8 lg:p-12 border border-blue-900/40 shadow-2xl shadow-black/90 transition-all duration-500">
          
          {/* Authentic Television Newsroom Studio Photo Backdrop with Gradient Overlay */}
          <div className="absolute inset-0 z-0 opacity-20 mix-blend-luminosity pointer-events-none">
            <img
              src="./news_studio_banner.jpg"
              alt="Television News Broadcast Studio"
              onError={(e) => {
                const target = e.currentTarget;
                if (!target.src.includes('unsplash')) {
                  target.src = 'https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=1400&q=80';
                }
              }}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Color Atmosphere: Orange & Blue Accents */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-[radial-gradient(ellipse_at_top,_rgba(255,87,34,0.4)_0%,_rgba(37,99,235,0.25)_50%,_transparent_80%)] pointer-events-none z-0" />
          <div className="absolute -top-24 -right-24 w-80 sm:w-96 h-80 sm:h-96 bg-blue-600/20 blur-[100px] pointer-events-none rounded-full z-0" />
          <div className="absolute top-1/2 -left-20 w-72 sm:w-80 h-72 sm:h-80 bg-orange-600/20 blur-[90px] pointer-events-none rounded-full z-0" />

          {/* Current Channel Live Banner in Hero */}
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 sm:mb-10 pb-4 border-b border-white/15">
            <div className="flex items-center gap-2 text-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse shrink-0" />
              <span className="font-semibold text-white tracking-wide">
                Currently Anchoring at <span className="text-orange-400 font-bold">Aarohi News Bangla</span>
              </span>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
              <a
                href={PERSONAL_INFO.currentWork.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-600/70 hover:bg-blue-600 border border-white/20 text-xs font-semibold text-white transition-all backdrop-blur-sm"
              >
                <span>Aarohi Portal</span>
                <span className="text-orange-400">&rarr;</span>
              </a>
            </div>
          </div>

          {/* 3-Column Hero Layout (Responsive across phones, tablets, and desktops) */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            
            {/* Left Column: Executive Broadcast Anchor Branding */}
            <div className="lg:col-span-5 flex flex-col justify-center order-1 text-center lg:text-left">
              
              {/* Broadcast Header Tag / Live Indicator */}
              <div className="inline-flex items-center justify-center lg:justify-start gap-2.5 mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase text-slate-300">
                  On-Air Broadcast Profile
                </span>
                <span className="h-px w-6 sm:w-10 bg-slate-700 hidden sm:inline-block"></span>
              </div>

              {/* Presenter Name - Executive, Bold & Timeless */}
              <div className="mb-4">
                <p className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-orange-400 mb-1">
                  Television Presenter
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-black tracking-tight text-white leading-[1.05]">
                  Purbasha Basu
                </h1>
              </div>

              {/* Roles & Specialization Bar - Executive Newsroom Typography */}
              <div className="mb-6">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1 text-sm sm:text-base md:text-lg font-bold tracking-wide uppercase text-slate-200">
                  <span className="text-orange-400">Reporter</span>
                  <span className="text-slate-600 font-light">•</span>
                  <span className="text-white">Anchor</span>
                  <span className="text-slate-600 font-light">•</span>
                  <span className="text-blue-400">Voice Artist</span>
                </div>

                <div className="mt-3 flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-slate-400">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                  <span>Prime Time Anchor at <strong className="text-white font-medium">Aarohi News Bangla</strong></span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-normal max-w-md mx-auto lg:mx-0 leading-relaxed mb-6">
                Specialized in live broadcast bulletins, political and cultural ground reporting, and commercial voiceovers. Dedicated to bringing on-the-ground realities to life.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <a
                  href="#broadcasts"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm transition-all shadow-lg shadow-orange-500/25 group"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Watch Broadcast Videos</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-xs sm:text-sm font-semibold text-white transition-all backdrop-blur-sm"
                >
                  Book / Contact
                </a>
              </div>
            </div>

            {/* Center Column: Frameless Natural Portrait Standing on a Luminous Broadcast Baseline */}
            <div className="lg:col-span-4 flex flex-col items-center justify-end order-2 my-2 lg:my-0 self-end">
              <div className="relative w-full max-w-[310px] xs:max-w-[330px] sm:max-w-[360px] md:max-w-[380px] flex flex-col items-center">
                
                {/* Main Frameless Photo Container - Completely Fixed, No Scroll Movement, No Top/Side Fade Borders */}
                <div className="relative w-full z-10">
                  {/* Photo: Balanced Anchor Framing - Zoomed out comfortably so face and head are completely visible, crisp edges without top or side fade borders */}
                  <div className="relative overflow-hidden rounded-b-none h-[390px] sm:h-[445px] md:h-[475px] flex items-end justify-center pt-2">
                    <img
                      src={customAvatar || PERSONAL_INFO.photoUrl}
                      alt="Purbasha Basu - News Presenter & Voice Over Artist"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (target.src !== PERSONAL_INFO.photoFallbackUrl) {
                          target.src = PERSONAL_INFO.photoFallbackUrl;
                        }
                      }}
                      className="w-full h-full object-cover object-[center_top] scale-100 filter contrast-[1.02]"
                    />
                    
                    {/* Natural Soft Fade at Base so it seamlessly merges with the baseline */}
                    <div className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Luminous Ground/Base Line for the Portrait to Stand On - Preserved exactly as requested */}
                <div className="relative w-full flex flex-col items-center -mt-0.5 z-20">
                  {/* Primary Neon Baseline */}
                  <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent shadow-[0_0_14px_rgba(255,87,34,0.9)]" />
                  {/* Secondary Reflection Line */}
                  <div className="w-3/4 h-[1px] mt-[2px] bg-gradient-to-r from-transparent via-blue-400/70 to-transparent shadow-[0_0_8px_rgba(96,165,250,0.6)]" />

                  {/* Clean Broadcast Identity Ribbon Resting on the Baseline */}
                  <div className="mt-2.5 flex items-center gap-2 px-3 py-1 rounded-full bg-black/80 border border-white/10 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                    <span className="text-[11px] font-semibold text-white tracking-wider uppercase">
                      Purbasha Basu
                    </span>
                    <span className="text-slate-500 text-[10px]">•</span>
                    <span className="text-[10px] font-mono text-blue-300">
                      Aarohi News Bangla
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Quote & Channel Highlight */}
            <div className="lg:col-span-3 flex flex-col justify-center order-3 text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-2.5">
                Great presentation should feel effortless.
              </h3>
              <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed mb-5">
                "Connecting truth with emotion. From live breaking news bulletins to compelling voice-overs, I bring clarity, energy, and poise to every broadcast."
              </p>

              {/* Current Role Card inside Hero with Direct Click Here Link */}
              <div className="bg-black/70 border border-blue-900/60 rounded-2xl p-4 sm:p-5 backdrop-blur-md text-left transition-transform duration-300 hover:border-blue-700/60">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-orange-400 font-semibold uppercase tracking-wider text-[10px]">
                    Current Anchor Assignment
                  </span>
                  <span className="text-blue-300 font-mono text-[10px] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Active On-Air
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white">
                  Aarohi News Bangla (আরোহী নিউজ বাংলা)
                </h4>
                <p className="text-xs text-white/70 mt-1 leading-relaxed">
                  Studio News Anchor & Daily Bulletin Presenter.
                </p>

                {/* Direct Channel Discovery Links */}
                <div className="mt-3.5 pt-3 border-t border-white/15 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/90 font-medium text-[11px] sm:text-xs">
                      আরোহী নিউজ বাংলা সম্পর্কে জানতে চান?
                    </span>
                    <a
                      href={PERSONAL_INFO.currentWork.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#ff5722] hover:bg-white text-white hover:text-black font-bold text-[11px] transition-all shadow-sm shrink-0"
                    >
                      <span>Click Here</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-white/70">
                    <span>অফিসিয়াল ফেসবুক পেজ:</span>
                    <a
                      href={PERSONAL_INFO.currentWork.facebookPageUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-white font-semibold flex items-center gap-1 underline underline-offset-2 transition-colors shrink-0"
                    >
                      <span>Facebook Page</span>
                      <ArrowUpRight className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row Inside Hero: 4 Numbered Capabilities */}
          <div className="relative z-10 mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="flex flex-col">
              <span className="text-xs font-mono text-orange-400 font-bold mb-0.5">#01</span>
              <span className="text-xs sm:text-sm font-bold text-white">News Anchoring</span>
              <span className="text-[11px] sm:text-xs text-white/70 mt-0.5">Live Studio Bulletins</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-mono text-blue-400 font-bold mb-0.5">#02</span>
              <span className="text-xs sm:text-sm font-bold text-white">Voice Over Narration</span>
              <span className="text-[11px] sm:text-xs text-white/70 mt-0.5">Media & Commercials</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-mono text-orange-400 font-bold mb-0.5">#03</span>
              <span className="text-xs sm:text-sm font-bold text-white">Event Compering</span>
              <span className="text-[11px] sm:text-xs text-white/70 mt-0.5">Stage & Conclaves</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-mono text-blue-400 font-bold mb-0.5">#04</span>
              <span className="text-xs sm:text-sm font-bold text-white">Field Reporting</span>
              <span className="text-[11px] sm:text-xs text-white/70 mt-0.5">P2C Standups & Interviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
