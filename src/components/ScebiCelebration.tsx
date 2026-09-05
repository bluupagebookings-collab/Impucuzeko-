import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import { SectionHeading } from './ui/SectionHeading';

interface ScebiCelebrationProps {
  onSelectArtist?: () => void;
}

export const ScebiCelebration: React.FC<ScebiCelebrationProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="honouring-scebi" className="relative py-12 sm:py-20 md:py-24 bg-gradient-to-br from-[#1C1917] via-[#26201B] to-[#141210] text-white border-t border-amber-900/30 overflow-hidden">
      {/* Warm amber radial glow in background */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-[#E36414]/15 via-transparent to-transparent pointer-events-none blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 order-2 lg:order-1 space-y-3 sm:space-y-5"
          >
            <div className="flex items-center gap-3">
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="block h-px w-8 origin-left bg-[#E36414]"
              />
              <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[#E36414]">
                In Memoriam
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] font-display text-white">
              Honouring Sicebi &ldquo;Inkosi Yamagcokama&rdquo; Dlamini
            </h2>

            <div className="space-y-3 text-sm sm:text-base text-stone-300 font-normal leading-[1.6]">
              <p>
                The 13th Annual Impucuzeko Maskandi Festival dedicated this edition to celebrating the life, memory, and musical spirit of Sicebi &ldquo;Inkosi Yamagcokama&rdquo; Dlamini.
              </p>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                Artists, peers, and members of his community from Msinga stepped onto the grand stage to celebrate him the way he lived—uniting in rhythm, song, and traditional dance to bring his beloved music to life before the thousands gathered at People&apos;s Park.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-stone-400">
              <span>Moses Mabhida People&apos;s Park</span>
              <span className="text-[#E36414] font-semibold tracking-wider uppercase">Memorial Celebration</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 25 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <div className="w-full aspect-video sm:aspect-auto sm:h-[40vh] md:h-[48vh] overflow-hidden bg-black relative flex items-center justify-center group">
              {!isPlaying ? (
                <div className="relative w-full h-full flex items-center justify-center bg-black">
                  <img
                    src="https://i.ibb.co/5hN1ymJk/1bca19808986dae7d39f89c2e3f1009c84ab7615-w700.webp"
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover filter blur-xl opacity-30 scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    src="https://i.ibb.co/5hN1ymJk/1bca19808986dae7d39f89c2e3f1009c84ab7615-w700.webp"
                    alt='Video thumbnail - Sicebi "Inkosi Yamagcokama" Dlamini tribute'
                    className="relative z-0 max-w-full max-h-full object-contain filter brightness-95 group-hover:brightness-100 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <button
                    onClick={() => setIsPlaying(true)}
                    aria-label='Play video honouring Sicebi "Inkosi Yamagcokama" Dlamini'
                    className="relative z-10 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#E36414] hover:bg-[#c9540e] text-white transition-all focus:outline-none cursor-pointer"
                  >
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current ml-1" />
                  </button>
                </div>
              ) : (
                <iframe
                  src="https://www.youtube-nocookie.com/embed/G57WzHjUb7w?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1"
                  title='Honouring Sicebi "Inkosi Yamagcokama" Dlamini - Impucuzeko Maskandi Festival'
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
