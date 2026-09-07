import React from 'react';
import { Partner } from '../types';
import { PARTNER_LOGOS } from '../data/festivalData';

interface PartnersSectionProps {
  partners?: Partner[];
}

export const PartnersSection: React.FC<PartnersSectionProps> = () => {
  // Dual tracks for continuous sliding marquee
  const trackOne = [...PARTNER_LOGOS, ...PARTNER_LOGOS];
  const trackTwoLogos = [...PARTNER_LOGOS].reverse();
  const trackTwo = [...trackTwoLogos, ...trackTwoLogos];

  return (
    <section
      id="partners"
      className="relative pt-2 pb-8 sm:pt-4 sm:pb-12 bg-[#FAF6F0] text-[#1C1917] grain-bg overflow-hidden"
    >
      {/* Seamless header without any separation lines or oversized padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 sm:mb-6 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#1C1917] font-display">
          Official Partners
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-[#78716C] max-w-2xl mx-auto">
          In proud partnership with governmental, transit, civic, and broadcast custodians.
        </p>
      </div>

      {/* Marquee Container with Left & Right Gradient Fades */}
      <div className="relative w-full overflow-hidden space-y-4 sm:space-y-5">
        {/* Soft edge blur / gradient fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 sm:w-24 bg-gradient-to-r from-[#FAF6F0] via-[#FAF6F0]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 sm:w-24 bg-gradient-to-l from-[#FAF6F0] via-[#FAF6F0]/80 to-transparent z-10" />

        {/* Track 1: Sliding Left - Large plain logos that slide uninterrupted */}
        <div className="flex overflow-hidden py-1 pointer-events-none select-none">
          <div className="animate-marquee-left flex items-center">
            {trackOne.map((logo, idx) => (
              <div
                key={`track-1-${logo.id}-${idx}`}
                className="mx-4 sm:mx-7 md:mx-9 flex items-center justify-center shrink-0"
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="h-14 sm:h-18 md:h-20 w-auto max-w-[150px] sm:max-w-[210px] md:max-w-[250px] object-contain filter contrast-105 opacity-90 pointer-events-none select-none"
                  loading="lazy"
                  draggable={false}
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Track 2: Sliding Right - Large plain logos that slide uninterrupted */}
        <div className="flex overflow-hidden py-1 pointer-events-none select-none">
          <div className="animate-marquee-right flex items-center">
            {trackTwo.map((logo, idx) => (
              <div
                key={`track-2-${logo.id}-${idx}`}
                className="mx-4 sm:mx-7 md:mx-9 flex items-center justify-center shrink-0"
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="h-14 sm:h-18 md:h-20 w-auto max-w-[150px] sm:max-w-[210px] md:max-w-[250px] object-contain filter contrast-105 opacity-90 pointer-events-none select-none"
                  loading="lazy"
                  draggable={false}
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
