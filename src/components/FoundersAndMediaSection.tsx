import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './ui/SectionHeading';
import { FESTIVAL_ORGANISERS, FESTIVAL_INFLUENCERS } from '../data/festivalData';

export const FoundersAndMediaSection: React.FC = () => {
  return (
    <section id="founders" className="relative py-12 sm:py-20 bg-gradient-to-b from-[#FCFAF7] via-[#FFFDF9] to-[#FAF6F0] text-[#1C1917] border-t border-amber-900/10 grain-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Founders Block */}
        <div className="mb-14 sm:mb-20">
          <SectionHeading
            title="Founders"
            description="The visionaries and cultural custodians who founded and direct the Impucuzeko Maskandi Festival."
          />

          {/* Two Founders - Compact and Side-by-Side on Mobile */}
          <div className="max-w-xl sm:max-w-2xl mx-auto grid grid-cols-2 gap-3 sm:gap-6 md:gap-8">
            {FESTIVAL_ORGANISERS.map((founder, idx) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.45, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center group"
              >
                {/* Smaller, clean frame - compact on mobile */}
                <div className="relative aspect-[3/4] w-full max-w-[170px] sm:max-w-[220px] overflow-hidden bg-[#E7E5E4] border border-amber-900/15 group-hover:border-amber-900/35 transition-colors">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                </div>

                {/* Founder Name & Designation */}
                <div className="mt-3 px-1 w-full">
                  <h3 className="text-sm sm:text-base font-bold tracking-tight text-[#1C1917] font-display line-clamp-1 group-hover:text-[#E36414] transition-colors">
                    {founder.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs font-semibold text-[#E36414] mt-0.5">
                    {founder.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Special Thank You to Influencers & Journalists */}
        <div className="pt-10 sm:pt-14 border-t border-amber-900/10">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917] font-display">
              Special Thank You to Influencers & Journalists
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#78716C] leading-relaxed">
              We extend our deepest gratitude to the journalists and digital influencers who championed Maskandi culture and covered the historic 13th edition.
            </p>
          </div>

          {/* 3 Recognized Figures - Side-by-side on mobile, compact and clean */}
          <div className="grid grid-cols-3 gap-2.5 sm:gap-6 max-w-2xl sm:max-w-3xl mx-auto">
            {FESTIVAL_INFLUENCERS.map((person, idx) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center group"
              >
                {/* Compact, clean portrait frame */}
                <div className="relative aspect-[3/4] w-full max-w-[150px] sm:max-w-[190px] overflow-hidden bg-[#E7E5E4] border border-amber-900/15 group-hover:border-amber-900/35 transition-colors">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50 group-hover:opacity-75 transition-opacity" />
                </div>

                {/* Name & Role */}
                <div className="mt-2.5 px-0.5 w-full">
                  <h4 className="text-xs sm:text-sm font-bold text-[#1C1917] font-display leading-tight line-clamp-1 group-hover:text-[#E36414] transition-colors">
                    {person.name}
                  </h4>
                  <p className="text-[10px] sm:text-xs font-semibold text-[#E36414] mt-0.5 line-clamp-1">
                    {person.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
