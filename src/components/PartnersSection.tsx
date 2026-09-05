import React from 'react';
import { motion } from 'motion/react';
import { Partner } from '../types';
import { SectionHeading } from './ui/SectionHeading';

interface PartnersSectionProps {
  partners: Partner[];
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({ partners }) => {
  return (
    <section id="partners-editorial" className="relative py-12 sm:py-20 md:py-24 bg-gradient-to-b from-[#FAF6F0] via-[#FCFAF7] to-[#F5EFEB] text-[#1C1917] border-t border-amber-900/10 grain-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Official Partners" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-amber-900/10 border border-amber-900/10">
          {partners.map((partner, idx) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#FCFAF7] p-6 sm:p-8 flex flex-col"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E36414] mb-2">
                {partner.role}
              </span>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#1C1917] font-display leading-tight">
                {partner.name}
              </h3>
              <p className="text-xs text-[#78716C] leading-relaxed mt-2">
                {partner.category}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
