import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { FestivalEdition } from '../types';
import { SectionHeading } from './ui/SectionHeading';

interface Edition2026SectionProps {
  festival: FestivalEdition;
  onViewArchive?: () => void;
}

interface ChronicleSlide {
  id: string;
  title: string;
  caption: string;
  image: string;
  widthClass: string;
  objectPosition: string;
}

const CHRONICLE_SLIDES: ChronicleSlide[] = [
  {
    id: 'crowd-25000',
    title: 'Historic 25,000-Strong Attendance',
    caption: 'A capacity crowd of over 25,000 passionate devotees filled Moses Mabhida People’s Park, uniting music lovers from all nine provinces for an unforgettable celebration of Maskandi heritage.',
    image: 'https://i.ibb.co/nsVNtWtG/1788650356948.jpg',
    widthClass: 'w-[74vw] sm:w-[500px] md:w-[580px]',
    objectPosition: 'object-center'
  },
  {
    id: 'prasa-partnership',
    title: 'PRASA #IsitimelaSabantu Activation',
    caption: 'The landmark brand partnership with PRASA in full motion, activating dedicated passenger rail services that transported thousands of festival-goers directly into Durban.',
    image: 'https://i.ibb.co/FLGshMZc/1788652363354.jpg',
    widthClass: 'w-[74vw] sm:w-[500px] md:w-[580px]',
    objectPosition: 'object-center'
  },
  {
    id: 'shwi-nomtekhala',
    title: 'The Reunion of Shwi NoMtekhala',
    caption: 'An iconic cultural milestone: revered Maskandi legends Shwi NoMtekhala reuniting on stage after years of separation, delivering an emotional set of timeless classic anthems.',
    image: 'https://i.ibb.co/Tq1T7HW4/1788652291389.jpg',
    widthClass: 'w-[68vw] sm:w-[340px] md:w-[380px]',
    objectPosition: 'object-top'
  },
  {
    id: 'umayogurt-entrance',
    title: 'A Grand Royal Entrance by uMaYogurt',
    caption: 'Inkosi YoMaskandi uMaYogurt commanding the stadium grounds in splendid traditional Zulu regalia, welcomed by thunderous applause and ceremonial chants from the crowd.',
    image: 'https://i.ibb.co/3Yzy0fDP/1788652275301.jpg',
    widthClass: 'w-[68vw] sm:w-[300px] md:w-[340px]',
    objectPosition: 'object-top'
  },
  {
    id: 'mayor-visit',
    title: 'Civic Honour: Visit by eThekwini Mayor',
    caption: 'eThekwini leadership and the Mayor visiting the festival in person, affirming governmental patronage and celebrating the profound cultural and economic impact of Impucuzeko.',
    image: 'https://i.ibb.co/9mpxTbpT/1788652210316.jpg',
    widthClass: 'w-[68vw] sm:w-[340px] md:w-[380px]',
    objectPosition: 'object-top'
  }
];

export const Edition2026Section: React.FC<Edition2026SectionProps> = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="festival-2026-recap" className="relative py-12 sm:py-20 md:py-24 bg-gradient-to-b from-[#FAF6F0] via-[#FCFAF7] to-[#F5EFEB] text-[#1C1917] border-t border-amber-900/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeading
          title="2026 Moments"
        />

        {/* Slide track - bleeds to mobile screen edge (-mx-4 px-4) so second picture peeks distinctly */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          ref={sliderRef}
          className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 no-scrollbar select-none -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {CHRONICLE_SLIDES.map((slide, idx) => (
            <div
              key={slide.id}
              onClick={() => setLightboxIndex(idx)}
              className={`${slide.widthClass} shrink-0 snap-start space-y-3 cursor-pointer group`}
            >
              {/* Photograph container with sharp edges */}
              <div className="w-full h-[290px] sm:h-[400px] md:h-[440px] overflow-hidden bg-[#E7E5E4] relative border border-amber-900/15 group-hover:border-amber-900/40 transition-colors">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={`w-full h-full object-cover ${slide.objectPosition} group-hover:scale-105 transition-transform duration-500 ease-out`}
                  loading={idx <= 1 ? 'eager' : 'lazy'}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none" />
                <div className="absolute bottom-2.5 right-2.5 px-2 py-1 bg-black/75 text-[10px] uppercase font-semibold tracking-wider text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  View Photo
                </div>
              </div>

              {/* Caption */}
              <div className="pt-1">
                <h3 className="text-base sm:text-lg md:text-xl font-bold font-display text-[#1C1917] group-hover:text-[#E36414] transition-colors tracking-tight leading-snug">
                  {slide.title}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-[#57534E] leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {slide.caption}
                </p>
              </div>
            </div>
          ))}

          {/* End spacer for smooth mobile edge scroll */}
          <div className="w-4 sm:w-0 shrink-0" aria-hidden="true" />
        </motion.div>
      </div>

      {/* Lightbox Modal for Uncropped Full-Resolution Viewing */}
      {lightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-sm flex flex-col justify-between p-4 sm:p-6 md:p-8 animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Top Bar */}
          <div
            className="flex items-center justify-between text-white max-w-6xl mx-auto w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-[#E36414] font-semibold">
                2026 Moments • {lightboxIndex + 1} / {CHRONICLE_SLIDES.length}
              </p>
              <h4 className="text-lg sm:text-xl font-bold font-display text-white mt-0.5">
                {CHRONICLE_SLIDES[lightboxIndex].title}
              </h4>
            </div>

            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="p-2 text-stone-400 hover:text-white transition-colors cursor-pointer text-xl leading-none"
              aria-label="Close photo"
            >
              ✕
            </button>
          </div>

          {/* Full Image in Center */}
          <div
            className="flex-1 flex items-center justify-center p-2 sm:p-4 my-2 relative max-w-6xl mx-auto w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={CHRONICLE_SLIDES[lightboxIndex].image}
              alt={CHRONICLE_SLIDES[lightboxIndex].title}
              className="max-h-[68vh] sm:max-h-[72vh] max-w-full object-contain shadow-2xl"
              referrerPolicy="no-referrer"
            />

            {/* Lightbox Prev / Next */}
            {lightboxIndex > 0 && (
              <button
                type="button"
                onClick={() => setLightboxIndex(lightboxIndex - 1)}
                className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-[#E36414] text-white flex items-center justify-center transition-colors cursor-pointer text-lg"
                aria-label="Previous photo"
              >
                ‹
              </button>
            )}
            {lightboxIndex < CHRONICLE_SLIDES.length - 1 && (
              <button
                type="button"
                onClick={() => setLightboxIndex(lightboxIndex + 1)}
                className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-[#E36414] text-white flex items-center justify-center transition-colors cursor-pointer text-lg"
                aria-label="Next photo"
              >
                ›
              </button>
            )}
          </div>

          {/* Bottom Caption */}
          <div
            className="max-w-3xl mx-auto w-full text-center pb-2"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              {CHRONICLE_SLIDES[lightboxIndex].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
