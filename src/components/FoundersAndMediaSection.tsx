import React from 'react';
import { motion } from 'motion/react';
import { SectionHeading } from './ui/SectionHeading';
import { PortraitCard } from './ui/PortraitCard';
import { FESTIVAL_ORGANISERS, FESTIVAL_PROMOTERS, FESTIVAL_INFLUENCERS } from '../data/festivalData';

export const FoundersAndMediaSection: React.FC = () => {
  return (
    <section id="founders-and-media" className="relative py-12 sm:py-20 md:py-24 bg-gradient-to-b from-[#FCFAF7] via-[#FFFDF9] to-[#FAF6F0] text-[#1C1917] border-t border-amber-900/10 grain-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Founders, Promoters & Media"
        />

        {/* Founders */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#78716C] mb-5">
            Festival Founders & Leadership
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {FESTIVAL_ORGANISERS.map((person) => (
              <PortraitCard
                key={person.name}
                name={person.name}
                role={person.role}
                note={person.note}
              />
            ))}
          </div>
        </div>

        {/* Promoters */}
        <div className="mb-12 sm:mb-16 pt-8 sm:pt-12 border-t border-amber-900/10">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#78716C] mb-5">
            Promoters
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {FESTIVAL_PROMOTERS.map((person, idx) => (
              <PortraitCard
                key={`promoter-${idx}`}
                name={person.name}
                role={person.role}
                note={person.note}
              />
            ))}
          </div>
        </div>

        {/* Influencers & Journalists */}
        <div className="pt-8 sm:pt-12 border-t border-amber-900/10">
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#78716C] mb-5">
            Influencers & Journalists
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-8">
            {FESTIVAL_INFLUENCERS.map((person, idx) => (
              <PortraitCard
                key={`influencer-${idx}`}
                name={person.name}
                role={person.role}
                note={person.note}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
