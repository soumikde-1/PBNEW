import React from 'react';
import { Award, CheckCircle2, Radio } from 'lucide-react';
import { EXPERIENCE_LIST, CERTIFICATION_LIST } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-t border-blue-950/80 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-orange-400 font-semibold mb-2">
            <span>Broadcast Practice</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span>Industry Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            Hands-On Broadcast Experience & Certified Training
          </h2>
          <p className="mt-4 text-base text-white/80 leading-relaxed">
            Proven track record behind the microphone delivering commercial and news voice tracks, combined with intensive formal coaching in live television anchoring and field reporting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Experience Cards */}
          <div className="lg:col-span-7 bg-[#080c14] rounded-2xl border border-blue-950 p-6 sm:p-8 hover:border-blue-800 transition-all">
            {EXPERIENCE_LIST.map((exp) => (
              <div key={exp.id} className="space-y-6 pb-8 border-b border-blue-950 last:border-b-0 last:pb-0">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-blue-950/80">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-1">
                      {exp.organization.includes('Aarohi') ? (
                        <span className="text-[#ff5722] flex items-center gap-1.5 font-bold">
                          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                          <span>{exp.type}</span>
                        </span>
                      ) : (
                        <span className="text-blue-400 flex items-center gap-1.5 font-semibold">
                          <Radio className="w-3.5 h-3.5" />
                          <span>{exp.type}</span>
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm sm:text-base text-orange-400 font-medium mt-0.5">
                      {exp.organization}
                    </p>
                  </div>

                  <span className={`text-xs font-mono px-3 py-1 rounded-md border ${
                    exp.organization.includes('Aarohi')
                      ? 'bg-blue-950 border-blue-600 text-orange-400 font-bold'
                      : 'bg-black border-blue-950 text-white/80'
                  }`}>
                    {exp.period}
                  </span>
                </div>

                {/* Primary Description */}
                <p className="text-sm sm:text-base text-white/90 leading-relaxed bg-black/60 p-4 rounded-xl border border-blue-950 italic">
                  "{exp.description}"
                </p>

                {/* Responsibilities list */}
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-white/60 mb-3">
                    Core Broadcast Contributions
                  </h4>
                  <div className="space-y-2.5">
                    {exp.responsibilities.map((resp, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-[#ff5722] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applied competencies */}
                <div className="pt-3 border-t border-blue-950">
                  <span className="text-xs text-white/60 font-medium block mb-2">
                    Studio Competencies Applied:
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs text-white/80">
                    {exp.skillsApplied.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded bg-black border border-blue-900/60 text-white/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certification Card (Institute: Bishal dar class) */}
          <div className="lg:col-span-5 space-y-6">
            {CERTIFICATION_LIST.map((cert) => (
              <div
                key={cert.id}
                className="bg-[#080c14] rounded-2xl border border-blue-950 p-6 sm:p-7 hover:border-blue-800 transition-all shadow-xl"
              >
                <div className="flex items-center gap-2 text-xs text-orange-400 font-semibold uppercase tracking-wider mb-2">
                  <Award className="w-4 h-4" />
                  <span>Verified Certification</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  {cert.title}
                </h3>

                <p className="text-sm font-medium text-blue-300 mb-3">
                  {cert.institution}
                </p>

                <div className="inline-block text-xs font-mono text-orange-400 bg-orange-950/40 border border-orange-500/30 px-2.5 py-1 rounded mb-4">
                  {cert.duration}
                </div>

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-5">
                  {cert.description}
                </p>

                <div className="pt-4 border-t border-blue-950">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-white/60 mb-3">
                    Curriculum & Practical Drills
                  </h4>
                  <ul className="space-y-2 text-xs text-white/80">
                    {cert.keyLearnings.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="text-blue-400 font-bold shrink-0">·</span>
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
