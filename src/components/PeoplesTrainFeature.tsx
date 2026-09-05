import React from 'react';
import { motion } from 'motion/react';

export const PeoplesTrainFeature: React.FC = () => {
  return (
    <section id="peoples-train-feature" className="relative py-12 sm:py-20 md:py-24 border-t border-amber-900/10 bg-gradient-to-r from-[#FAF5EE] via-[#FFFDF9] to-[#F7EFE5] text-[#1C1917] grain-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Photograph: clean without frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 aspect-[16/10] overflow-hidden bg-[#E7E5E4]"
          >
            <img
              src="https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1800&q=85"
              alt="Passenger train arriving in Durban"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Simple explanation with motion entrance */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-4 sm:space-y-5"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="block h-px w-8 origin-left bg-[#E36414]"
                />
                <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E36414]">
                  Landmark Transit
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold font-display text-[#1C1917] tracking-tight">
                The People&apos;s Train
              </h2>
              <p className="text-sm text-[#78716C] flex items-center gap-2">
                <span className="font-semibold text-amber-900">Isitimela Sabantu</span>
                <span>•</span>
                <span>Durban Station</span>
              </p>
            </div>

            <p className="text-base text-[#57534E] leading-relaxed">
              PRASA partnered with the festival to provide free passenger trains for ticket holders traveling into Durban.
            </p>

            <p className="text-sm text-[#78716C] leading-relaxed">
              Supporters from across KwaZulu-Natal rode together in song, arriving straight at Durban Station with connecting shuttles to People&apos;s Park.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
