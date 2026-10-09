import React, { useState } from 'react';
import { Mic, Tv, Radio, CheckCircle2, Globe2 } from 'lucide-react';
import { LANGUAGES_LIST, INTERESTS_LIST } from '../data/portfolioData';

export const SkillsInterests: React.FC = () => {
  const [activeLanguageIndex, setActiveLanguageIndex] = useState<number>(0);

  const getInterestIcon = (name: string) => {
    switch (name) {
      case 'Mic':
        return <Mic className="w-5 h-5 text-orange-400" />;
      case 'Tv':
        return <Tv className="w-5 h-5 text-blue-400" />;
      case 'Radio':
        return <Radio className="w-5 h-5 text-orange-400" />;
      default:
        return <Mic className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 border-t border-blue-950/80 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#ff5722] font-semibold mb-2">
            <Globe2 className="w-4 h-4 text-[#ff5722]" />
            <span>Languages & Broadcasting Disciplines</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            Multilingual Fluency & Core Media Focus
          </h2>
          <p className="mt-4 text-base text-white/80 leading-relaxed">
            Delivering high-retention news presentation and compering in Bengali, English, and Hindi, tailored for television studios, live reporting, and stage hosting.
          </p>
        </div>

        {/* Trilingual Mastery Matrix */}
        <div className="mb-16">
          <div className="flex items-center justify-between gap-4 mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Languages for Television & Voice Over
            </h3>
            <span className="text-xs text-blue-400 font-mono">
              Trilingual Presenter
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LANGUAGES_LIST.map((lang, idx) => (
              <div
                key={lang.name}
                className={`bg-[#080c14] rounded-2xl p-6 border transition-all cursor-pointer ${
                  activeLanguageIndex === idx
                    ? 'border-[#ff5722] shadow-xl shadow-orange-950/40 ring-1 ring-[#ff5722]'
                    : 'border-blue-950 hover:border-blue-800'
                }`}
                onClick={() => setActiveLanguageIndex(idx)}
              >
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-blue-950">
                  <div>
                    <h4 className="text-xl font-bold text-white">{lang.name}</h4>
                    <span className="text-xs text-orange-400 font-medium">{lang.level}</span>
                  </div>
                  <span className="text-lg font-bold font-serif-display text-blue-300">
                    {lang.script}
                  </span>
                </div>

                <p className="text-xs text-white/70 leading-relaxed mb-4">
                  {lang.notes}
                </p>

                {/* Broadcast Phrase Excerpt */}
                <div className="bg-black p-3.5 rounded-xl border border-blue-950">
                  <span className="text-[11px] text-white/50 uppercase tracking-wider block mb-1">
                    Sample Broadcast Greeting:
                  </span>
                  <p className="text-xs text-white italic">
                    "{lang.sampleGreeting}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Interests & Core Deliverables Showcase */}
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#ff5722] font-semibold mb-2">
            <span>Specialized Fields</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-8">
            Primary Hosting & Production Focus
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INTERESTS_LIST.map((interest) => (
              <div
                key={interest.id}
                className="bg-[#080c14] rounded-2xl p-6 sm:p-7 border border-blue-950 hover:border-blue-800 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center mb-5 border border-blue-900">
                    {getInterestIcon(interest.iconName)}
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2">
                    {interest.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
                    {interest.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-blue-950">
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/60 block mb-2">
                    Key Deliverables
                  </span>
                  <ul className="space-y-1.5 text-xs text-white/80">
                    {interest.keyPoints.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
