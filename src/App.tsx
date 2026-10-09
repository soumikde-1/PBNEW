/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutEducation } from './components/AboutEducation';
import { Experience } from './components/Experience';
import { BroadcastShowcase } from './components/BroadcastShowcase';
import { SkillsInterests } from './components/SkillsInterests';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  // ScrollSpy to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'broadcasts', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans-display selection:bg-orange-600/40 selection:text-white scroll-smooth">
      {/* Sticky Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections (Strictly Orange, Blue, Black, White) */}
      <main>
        <Hero
          customAvatar={null}
          onSelectBroadcast={(id) => {
            const el = document.getElementById('broadcasts');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
        <BroadcastShowcase />
        <AboutEducation />
        <Experience />
        <SkillsInterests />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
