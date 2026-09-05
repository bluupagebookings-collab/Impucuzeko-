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
}

const CHRONICLE_SLIDES: ChronicleSlide[] = [
  {
    id: 'crowd-25000',
    title: '25,000 at Moses Mabhida',
    caption: 'A capacity crowd gathered under the stadium arch for 14 hours of non-stop Maskandi music.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=85'
  },
  {
    id: 'street-parade',
    title: 'Traditional Street Parade',
    caption: 'Devotees in traditional Zulu dress sang their way along the Durban promenade to the park gates.',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1400&q=85'
  },
  {
    id: 'peoples-train',
    title: "Isitimela Sabantu (The People's Train)",
    caption: 'PRASA chartered free passenger trains to bring supporters from across KwaZulu-Natal to Durban Station.',
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1400&q=85'
  },
  {
    id: 'main-stage',
    title: 'Main Stage Performance',
    caption: 'Headline artists and competitive guitarists played back-to-back under stadium floodlights.',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1400&q=85'
  },
  {
    id: 'guitar-mastery',
    title: 'Acoustic Virtuosity',
    caption: 'The lightning-fast fingerpicking and clan praises that define the authentic Maskandi sound.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1400&q=85'
  },
  {
    id: 'zulu-regalia',
    title: 'Zulu Heritage & Regalia',
    caption: 'Handcrafted beadwork, headbands, and traditional attire celebrated throughout the grounds.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1400&q=85'
  }
];

export const Edition2026Section: React.FC<Edition2026SectionProps> = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const scrollLeft = container.scrollLeft;
    const slideElements = container.children;
    if (slideElements.length === 0) return;

    let closestIndex = 0;
    let minDiff = Infinity;

    for (let i = 0; i < slideElements.length; i++) {
      const el = slideElements[i] as HTMLElement;
      const diff = Math.abs(el.offsetLeft - container.offsetLeft - scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = i;
      }
    }

    setCurrentIndex(closestIndex);
  };

  const scrollToIndex = (index: number) => {
    if (!sliderRef.current) return;
    const targetIndex = Math.max(0, Math.min(index, CHRONICLE_SLIDES.length - 1));
    const container = sliderRef.current;
    const targetChild = container.children[targetIndex] as HTMLElement;
    if (targetChild) {
      container.scrollTo({
        left: targetChild.offsetLeft - container.offsetLeft,
        behavior: 'smooth'
      });
      setCurrentIndex(targetIndex);
    }
  };

  return (
    <section id="festival-2026-recap" className="relative py-12 sm:py-20 md:py-24 bg-gradient-to-b from-[#FAF6F0] via-[#FCFAF7] to-[#F5EFEB] text-[#1C1917] border-t border-amber-900/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <SectionHeading
          eyebrow="2026 In Review"
          title="2026 Moments"
          description="Saturday 29 August 2026 • Moses Mabhida People's Park"
        />

        {/* Slide track */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex gap-6 sm:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 no-scrollbar select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {CHRONICLE_SLIDES.map((slide, idx) => (
            <div
              key={slide.id}
              onClick={() => scrollToIndex(idx)}
              className="w-[82vw] sm:w-[500px] md:w-[600px] shrink-0 snap-start space-y-3 cursor-pointer group"
            >
              {/* Photograph alone without frame or card border */}
              <div className="w-full aspect-[16/10] overflow-hidden bg-[#E7E5E4]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading={idx <= 1 ? 'eager' : 'lazy'}
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Caption */}
              <div className="pt-1">
                <h3 className="text-lg sm:text-xl font-bold font-display text-[#1C1917] group-hover:text-[#E36414] transition-colors tracking-tight">
                  {slide.title}
                </h3>
                <p className="mt-1 text-sm text-[#57534E] leading-relaxed">
                  {slide.caption}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Clean track dashes */}
        <div className="flex items-center gap-2 pt-4">
          {CHRONICLE_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => scrollToIndex(idx)}
              className={`transition-all duration-200 cursor-pointer ${
                currentIndex === idx
                  ? 'w-6 h-0.5 bg-[#1C1917]'
                  : 'w-2 h-0.5 bg-[#1C1917]/25 hover:bg-[#1C1917]/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
