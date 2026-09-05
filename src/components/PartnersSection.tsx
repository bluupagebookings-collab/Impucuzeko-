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
        <SectionHeading eyebrow="Patronage" title="Official Partners" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {partners.map((partner, idx) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-1.5 sm:space-y-2 py-3 sm:py-4 border-t border-amber-900/15"
            >
              <h3 className="text-base sm:text-lg font-bold tracking-tight text-[#1C1917] font-display">
                {partner.name}
              </h3>
              <p className="text-xs text-[#E36414] font-bold">
                {partner.role}
              </p>
              <p className="text-xs text-[#78716C] font-normal leading-[1.5]">
                {partner.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
