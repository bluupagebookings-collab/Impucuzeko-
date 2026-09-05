import React from 'react';
import { motion } from 'motion/react';
import { FestivalEdition } from '../types';
import { Button } from './ui/Button';

interface HeroProps {
  festival: FestivalEdition;
  onExploreCurrent: () => void;
  onNextFestivalClick: () => void;
}

export const HERO_IMAGE_URL = 'https://i.ibb.co/cc9X30Gt/1788559418746.jpg';

export const Hero: React.FC<HeroProps> = ({ festival, onExploreCurrent }) => {
  return (
    <section className="relative w-full h-[88vh] min-h-[520px] sm:min-h-[660px] max-h-[1080px] flex items-center justify-center overflow-hidden bg-[#141210] text-white">
      {/* Full Viewport Festival Stage & Crowd Photograph with Motion Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          src={HERO_IMAGE_URL}
          alt="Impucuzeko Maskandi Festival Experience"
          className="w-full h-full object-cover object-center filter brightness-[0.76] contrast-110"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Deep Zulu Onyx + Sunset Amber & Orange Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#141210]/75 via-[#141210]/35 to-[#141210]/95 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E36414]/22 via-amber-600/10 to-transparent pointer-events-none" />
      </div>

      {/* Centered Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-12 sm:pt-16 flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white font-display leading-[1.08] drop-shadow-md"
        >
          Impucuzeko Maskandi Festival
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 sm:mt-5 text-sm sm:text-xl md:text-2xl text-amber-50/90 font-normal max-w-2xl leading-relaxed"
        >
          {festival.heroTagline || "The Maskandi World Cup at Moses Mabhida People's Park, Durban."}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 sm:mt-8"
        >
          <Button variant="primary" arrow onClick={onExploreCurrent}>
            Explore 2026 Archive
          </Button>
        </motion.div>
      </div>

      {/* Subtle indicator dashes at the bottom */}
      <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center items-center gap-2">
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-2 h-0.5 bg-white/40"></span>
        <span className="w-2 h-0.5 bg-white/40"></span>
        <span className="w-2 h-0.5 bg-white/40"></span>
      </div>
    </section>
  );
};
