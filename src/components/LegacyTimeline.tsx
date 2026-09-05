import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FestivalEdition } from '../types';
import { SectionHeading } from './ui/SectionHeading';

interface LegacyTimelineProps {
  historicalEditions: FestivalEdition[];
  onSelectEdition: (edition: FestivalEdition) => void;
}

export const LegacyTimeline: React.FC<LegacyTimelineProps> = ({
  historicalEditions,
  onSelectEdition
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section id="archive-editorial" className="relative py-12 sm:py-20 md:py-24 bg-gradient-to-b from-[#FAF6F0] via-[#FCFAF7] to-[#F5EFEB] text-[#1C1917] border-t border-amber-900/10 grain-bg overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Historic Chronicle"
          title="Festival History"
          action={<span className="text-xs text-[#78716C]">13 Editions • Since 2012</span>}
        />

        {/* Vertical timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-[3px] sm:left-[5px] top-2 bottom-2 w-px bg-amber-900/15" />

          <div className="space-y-1">
            {historicalEditions.map((edition, idx) => {
              const isActive = activeIndex === idx;
              return (
                <motion.div
                  key={`${edition.year}-${idx}`}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => {
                    setActiveIndex(idx);
                    onSelectEdition(edition);
                  }}
                  className="relative pl-8 sm:pl-12 py-4 sm:py-5 cursor-pointer group"
                >
                  {/* Node */}
                  <span
                    className={`absolute left-0 top-5 sm:top-6 w-1.5 h-1.5 rounded-full border-2 transition-all duration-300 ${
                      isActive
                        ? 'bg-[#E36414] border-[#E36414] scale-125'
                        : 'bg-[#FAFAF8] border-amber-900/30 group-hover:border-[#E36414]'
                    }`}
                  />

                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
                    <span
                      className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-none font-display transition-colors duration-300 ${
                        isActive ? 'text-[#E36414]' : 'text-[#78716C] group-hover:text-[#1C1917]'
                      }`}
                    >
                      {edition.year}
                    </span>
                    <div className="mt-1.5 sm:mt-0 flex-1">
                      <p className="text-sm sm:text-base font-semibold text-[#1C1917]">
                        Edition {edition.editionNumber}
                      </p>
                      <p className="text-xs text-[#78716C] mt-0.5">
                        {edition.venue} · {edition.crowdEstimate}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
