import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ImpucuzekoLogo } from './ImpucuzekoLogo';
import { FestivalEdition } from '../types';

interface NavbarProps {
  currentFestival: FestivalEdition;
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenTickets: () => void;
  onOpenCMS: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentFestival,
  currentView,
  onNavigate,
  onOpenTickets,
  onOpenCMS
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  const navItems = [
    { id: 'home', label: 'Festival' },
    { id: 'artists', label: 'Lineup' },
    { id: 'archive', label: 'Archive' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'stories', label: 'Chronicle' },
    { id: 'information', label: 'Info' },
    { id: 'vendors', label: 'Vendors' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FCFAF7]/95 backdrop-blur-md border-b border-amber-900/10 text-[#1C1917] transition-all shadow-[0_2px_12px_rgba(28,25,23,0.03)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Crest & Logo */}
        <div
          onClick={() => onNavigate('home')}
          className="cursor-pointer flex items-center py-2 group"
          role="button"
          tabIndex={0}
          aria-label="Go to homepage"
        >
          <ImpucuzekoLogo variant="header-big" />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs uppercase tracking-wider font-semibold text-[#57534E]">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`py-2 transition-colors hover:text-[#1C1917] cursor-pointer ${
                  isActive ? 'text-[#E36414] font-bold border-b-2 border-[#E36414]' : ''
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTAs */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('archive-2026')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#1C1917] hover:bg-[#E36414] text-white transition-colors cursor-pointer"
          >
            2026 Recap
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1C1917] hover:text-[#E36414] focus:outline-none transition-colors border border-[#E7E5E4] flex items-center justify-center cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`h-0.5 w-full bg-current transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              />
              <span
                className={`h-0.5 w-full bg-current transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`h-0.5 w-full bg-current transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Animated Scroll Progress Bar (Logo Gradient) */}
      <motion.div
        style={{ scaleX }}
        className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#B45309] via-[#E36414] to-[#F59E0B] origin-left z-50 shadow-[0_1px_8px_rgba(227,100,20,0.6)]"
      />

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-40 bg-white/98 backdrop-blur-md px-6 sm:px-12 py-8 overflow-y-auto border-t border-[#E7E5E4] animate-fade-in">
          <div className="max-w-xl mx-auto space-y-6">
            <div className="flex flex-col space-y-3 font-display">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left text-2xl sm:text-3xl font-bold tracking-tight py-2 transition-colors cursor-pointer ${
                    currentView === item.id ? 'text-[#E36414]' : 'text-[#1C1917] hover:text-[#E36414]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-6 border-t border-[#E7E5E4] space-y-3">
              <button
                onClick={() => {
                  onOpenTickets();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 bg-[#1C1917] hover:bg-[#E36414] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                {currentFestival.ticketStatus === 'sold_out' ? 'Tickets Sold Out' : 'Get Passes'}
              </button>
              <button
                onClick={() => {
                  onOpenCMS();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 border border-[#E7E5E4] hover:border-[#1C1917] text-[#1C1917] text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer"
              >
                Organiser Portal
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
