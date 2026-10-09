import React from 'react';
import { GraduationCap, Award, BookOpen, Compass, CheckCircle } from 'lucide-react';
import { EDUCATION_LIST } from '../data/portfolioData';

export const AboutEducation: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-blue-950/80 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-orange-400 font-semibold mb-2">
            <span>Profile & Foundation</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            Passionate About The Power of Voice, Camera & News Connection
          </h2>
          <p className="mt-4 text-base text-white/80 leading-relaxed">
            From vibrant cultural heartlands to bustling media landscapes, I have focused my development on the craft of broadcast journalism, vocal nuance, and engaging public discourse.
          </p>
        </div>

        {/* Narrative & Pillars Grid with News Studio Visual Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-start">
          {/* Biography Narrative */}
          <div className="lg:col-span-7 space-y-5 text-white/80 text-sm sm:text-base leading-relaxed">
            <p>
              I am a Television Anchor and Voice Over Artist driven by a commitment to truthful communication, polished stage etiquette, and dynamic on-air storytelling. My objective is to contribute to a forward-thinking media or broadcast team where I can deploy my vocal training, linguistic versatility in Bengali, English, and Hindi, and natural on-camera poise.
            </p>
            <p>
              My academic pursuits in Journalism and Mass Communication have equipped me with a deep respect for newsroom ethics, electronic media workflows, and audience psychology. Whether presenting breaking headlines, moderating live panels, or narrating documentary content, I prioritize clarity of thought, crisp phonetic articulation, and genuine rapport with the audience.
            </p>

            {/* Visual Newsroom Production Card */}
            <div className="pt-2 rounded-2xl overflow-hidden border border-blue-950 bg-black relative group shadow-xl">
              <div className="h-44 sm:h-52 w-full overflow-hidden relative">
                <img
                  src="./news_anchor_desk.jpg"
                  alt="Television News Studio Anchor Desk"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('unsplash')) {
                      target.src = 'https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?auto=format&fit=crop&w=1200&q=80';
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="font-semibold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    <span>Broadcast Newsroom & Anchor Production Desk</span>
                  </span>
                  <span className="font-mono text-orange-400 font-bold text-[11px] bg-black/80 px-2.5 py-0.5 rounded border border-orange-500/30">
                    Live Studio
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#080c14] p-4 rounded-xl border border-blue-950">
                <div className="flex items-center gap-2.5 mb-2 text-white font-semibold text-sm">
                  <Compass className="w-4 h-4 text-orange-400" />
                  <span>On-Camera Poise</span>
                </div>
                <p className="text-xs text-white/70 leading-normal">
                  Natural eye contact, composed teleprompter delivery, and responsive adaptability during live broadcasts.
                </p>
              </div>

              <div className="bg-[#080c14] p-4 rounded-xl border border-blue-950">
                <div className="flex items-center gap-2.5 mb-2 text-white font-semibold text-sm">
                  <BookOpen className="w-4 h-4 text-blue-400" />
                  <span>Editorial Insight</span>
                </div>
                <p className="text-xs text-white/70 leading-normal">
                  Academic training in mass communication, news structure, script flow, and objective reporting.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Factsheet Box (Strictly Orange, Blue, Black, White) */}
          <div className="lg:col-span-5 bg-[#080c14] border border-blue-900/60 rounded-2xl p-6 sm:p-7 shadow-xl">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-orange-400 mb-5">
              Profile Summary & Credentials
            </h3>

            <div className="space-y-4 text-sm divide-y divide-blue-950">
              <div className="flex justify-between items-start pt-3 first:pt-0">
                <span className="text-white/60">Current Anchor Role</span>
                <span className="text-[#ff5722] font-bold text-right flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  <span>Aarohi News Bangla</span>
                </span>
              </div>
              <div className="flex justify-between items-start pt-3">
                <span className="text-white/60">Current Base</span>
                <span className="text-white font-medium text-right">Kolkata, West Bengal</span>
              </div>
              <div className="flex justify-between items-start pt-3">
                <span className="text-white/60">Hometown</span>
                <span className="text-white font-medium text-right">Siliguri, West Bengal</span>
              </div>
              <div className="flex justify-between items-start pt-3">
                <span className="text-white/60">Primary Languages</span>
                <span className="text-white font-medium text-right">Bengali · English · Hindi</span>
              </div>
              <div className="flex justify-between items-start pt-3">
                <span className="text-white/60">Voice Over Experience</span>
                <span className="text-blue-400 font-medium text-right">Durgapur 24 X 7</span>
              </div>
              <div className="flex justify-between items-start pt-3">
                <span className="text-white/60">Professional Training</span>
                <span className="text-white font-medium text-right">Bishal dar class (Anchoring)</span>
              </div>
              <div className="flex justify-between items-start pt-3">
                <span className="text-white/60">Core Disciplines</span>
                <span className="text-white font-medium text-right">News Anchoring · Voice Over · Reporting</span>
              </div>
            </div>
          </div>
        </div>

        {/* Education Timeline Section */}
        <div id="education" className="pt-8">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-orange-400 font-semibold mb-2">
            <GraduationCap className="w-4 h-4 text-orange-400" />
            <span>Academic Milestones</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-8">
            Education & Mass Communication Qualifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EDUCATION_LIST.map((edu) => (
              <div
                key={edu.id}
                className="bg-[#080c14] rounded-2xl p-6 border border-blue-950 hover:border-blue-800 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-mono text-orange-400 font-medium">
                      {edu.period}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white mb-1.5 leading-snug">
                    {edu.degree}
                  </h4>

                  <p className="text-xs text-blue-300 font-medium mb-3">
                    {edu.institution}
                  </p>

                  <p className="text-xs text-white/70 leading-relaxed mb-4">
                    {edu.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-blue-950">
                  <span className="text-[11px] font-semibold text-white/60 uppercase tracking-wider block mb-2">
                    Key Highlights
                  </span>
                  <ul className="space-y-1.5 text-xs text-white/80">
                    {edu.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
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
