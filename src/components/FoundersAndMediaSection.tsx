import React from 'react';
import { motion } from 'motion/react';

export const FoundersAndMediaSection: React.FC = () => {
  return (
    <section id="founders-and-media" className="relative py-12 sm:py-20 md:py-24 bg-gradient-to-b from-[#FCFAF7] via-[#FFFDF9] to-[#FAF6F0] text-[#1C1917] border-t border-amber-900/10 grain-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="border-b border-amber-900/10 pb-6 sm:pb-8 mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1917] font-display leading-[1.08]">
            Festival Founders & Media Partners
          </h2>
          <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg text-[#57534E] font-normal max-w-3xl leading-relaxed">
            Honouring the visionaries who founded the Maskandi World Cup, the promoters who staged the 13th edition, and the journalists and cultural influencers who mobilized the historic People’s Train and street parade.
          </p>
        </motion.div>

        {/* Founders Grid */}
        <div className="mb-10 sm:mb-16">
          <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-[#1C1917] font-display mb-6 pb-3 border-b border-amber-900/10">
            Festival Leadership & Founders
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-2"
            >
              <h4 className="text-base sm:text-lg font-bold text-[#1C1917] font-display">
                Xolani Mcineka
              </h4>
              <p className="text-xs font-semibold text-[#E36414]">
                Festival Founder & Director • Sikinya Media
              </p>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                Spokesperson and lead organizer who guided Impucuzeko from its formative gatherings at Curries Fountain into South Africa’s premier indigenous acoustic festival at Moses Mabhida People’s Park.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-2"
            >
              <h4 className="text-base sm:text-lg font-bold text-[#1C1917] font-display">
                Sandile Ndlanya
              </h4>
              <p className="text-xs font-semibold text-[#E36414]">
                Festival Co-Founder & Logistics Director
              </p>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                Co-organiser spearheading artist management, production infrastructure, traditional artisan inclusion, and venue operations across 13 successful editions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-2"
            >
              <h4 className="text-base sm:text-lg font-bold text-[#1C1917] font-display">
                Tshatha Ngobe
              </h4>
              <p className="text-xs font-semibold text-[#E36414]">
                Co-Director & Cultural Patron
              </p>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                Celebrated Ukhozi FM broadcaster and cultural champion whose dedication to authentic Zulu acoustic expression has elevated Maskandi into national prestige.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Promoters & Media Influencer Appreciation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 pt-8 sm:pt-12 border-t border-amber-900/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-3"
          >
            <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-[#1C1917] font-display">
              Promoters & Production Teams
            </h3>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
              Special appreciation is extended to Sikinya Media, the lead event promoters, stadium stage crew, and technical sound engineers who built a world-class platform capable of hosting 25,000+ patrons and dozens of live acoustic bands without pause.
            </p>
            <p className="text-xs text-[#78716C] leading-relaxed">
              Their coordination alongside eThekwini Municipality, Durban Metro Police, and Moses Mabhida Stadium management ensured our cultural gathering remained an enduring landmark for KwaZulu-Natal.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-3"
          >
            <h3 className="text-lg sm:text-2xl font-bold tracking-tight text-[#1C1917] font-display">
              Journalists, Broadcasters & Influencers
            </h3>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
              Our sincere gratitude goes to the journalists, regional radio broadcasters, videographers, and cultural influencers who championed the 2026 festival campaign—especially the promotion of PRASA’s historic Isitimela Sabantu train service and the Durban promenade street parade.
            </p>
            <p className="text-xs text-[#78716C] leading-relaxed">
              Through live broadcasts, community journalism, and digital storytelling, their tireless coverage united music lovers from all nine provinces and brought the vibrant rhythm of Maskandi to audiences worldwide.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
