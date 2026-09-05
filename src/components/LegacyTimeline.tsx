import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FestivalEdition } from '../types';

interface LegacyTimelineProps {
  historicalEditions: FestivalEdition[];
  onSelectEdition: (edition: FestivalEdition) => void;
}

export const LegacyTimeline: React.FC<LegacyTimelineProps> = ({
  historicalEditions,
  onSelectEdition
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

  const editionImages = [
    'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80'
  ];

  const activeImage = editionImages[hoveredIndex % editionImages.length];

  return (
    <section id="archive-editorial" className="relative py-12 sm:py-20 md:py-24 bg-gradient-to-b from-[#FAF6F0] via-[#FCFAF7] to-[#F5EFEB] text-[#1C1917] border-t border-amber-900/10 grain-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-10 pb-4 sm:pb-6 border-b border-amber-900/10"
        >
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1917] font-display">
              Festival History
            </h2>
          </div>
          <span className="text-xs text-[#78716C]">
            13 Editions • Since 2012
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 divide-y divide-amber-900/10 border-y border-amber-900/10"
          >
            {historicalEditions.map((edition, idx) => {
              const isHovered = hoveredIndex === idx;
              return (
                <div
                  key={`${edition.year}-${idx}`}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onClick={() => onSelectEdition(edition)}
                  className={`cursor-pointer group py-4 sm:py-6 flex items-baseline justify-between transition-all px-2 rounded-lg ${
                    isHovered ? 'bg-amber-500/5' : 'hover:bg-amber-500/3'
                  }`}
                >
                  <div className="space-y-0.5 sm:space-y-1">
                    <span className={`text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-none transition-all font-display ${
                      isHovered
                        ? 'bg-gradient-to-r from-[#E36414] to-[#D97706] bg-clip-text text-transparent scale-105 inline-block'
                        : 'text-[#78716C]'
                    }`}>
                      {edition.year}
                    </span>
                    <p className={`text-xs sm:text-sm font-semibold transition-colors ${
                      isHovered ? 'text-[#E36414]' : 'text-[#1C1917]'
                    }`}>
                      {edition.editionName}
                    </p>
                  </div>

                  <div className="text-right space-y-1">
                    <span className="text-xs text-[#78716C] font-normal block">
                      {edition.venue}
                    </span>
                    <span className={`text-xs uppercase tracking-wider font-semibold block ${
                      edition.status === 'completed' ? 'text-amber-800' : 'text-[#E36414]'
                    }`}>
                      {edition.status === 'completed' ? 'Completed' : 'Upcoming'}
                    </span>
                  </div>
                </div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block lg:col-span-5 sticky top-32"
          >
            <div className="aspect-[3/4] overflow-hidden bg-white relative group">
              <img
                src={activeImage}
                alt={`Archive Edition ${historicalEditions[hoveredIndex]?.year}`}
                className="w-full h-full object-cover object-center filter contrast-105 transition-all duration-700 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-white p-4 bg-black/75">
                <span className="text-[#E36414] font-bold uppercase tracking-wider block mb-1">
                  Edition {historicalEditions[hoveredIndex]?.year}
                </span>
                <p className="text-amber-50/90 leading-relaxed">
                  {historicalEditions[hoveredIndex]?.highlightSummary || 'Historic Impucuzeko Archive Record'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
