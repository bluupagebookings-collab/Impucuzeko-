import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './ui/SectionHeading';

export const FestivalIntro: React.FC = () => {
  return (
    <section className="relative py-12 sm:py-20 md:py-24 bg-gradient-to-b from-[#FAF6F0] via-[#FCFAF7] to-[#F7F2EA] text-[#1C1917] grain-bg border-t border-amber-900/10 overflow-hidden">
      {/* Subtle ambient warm radial glow inspired by the logo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/12 via-orange-500/5 to-transparent pointer-events-none blur-2xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6">
        <SectionHeading
          title="The Maskandi World Cup"
          description="Impucuzeko Maskandi Festival is South Africa&apos;s premier indigenous music gathering, celebrated across Africa. Founded in Durban in 2012, it has evolved into the definitive stage for acoustic guitar virtuosity, poetic Zulu heritage, and cultural unity."
          align="center"
          className="border-b-0 mb-0 pb-0"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 sm:mt-10 w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden group"
        >
          <img
            src="https://i.ibb.co/gMzfW3Yh/1788559418746.jpg"
            alt="Impucuzeko Maskandi Festival - The Maskandi World Cup"
            className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
};
