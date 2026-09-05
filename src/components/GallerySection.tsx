import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { GalleryImage } from '../types';

interface GallerySectionProps {
  images: GalleryImage[];
  onViewAllGallery?: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({
  images,
  onViewAllGallery
}) => {
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  // Focus on festival atmosphere, crowd, stage, and regalia for the overview
  const displayImages = images.filter((img) => !img.id.includes('sicebi')).length >= 3
    ? images.filter((img) => !img.id.includes('sicebi'))
    : images;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveImage(null);
    };
    if (activeImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeImage]);

  return (
    <section id="gallery-editorial" className="relative py-12 sm:py-20 md:py-24 bg-gradient-to-b from-[#FCFAF7] via-[#FFFDF9] to-[#FAF6F0] text-[#1C1917] border-t border-amber-900/10 overflow-hidden">
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
              Festival Gallery
            </h2>
          </div>

          {onViewAllGallery && (
            <button
              onClick={onViewAllGallery}
              className="text-xs font-semibold text-[#E36414] hover:underline self-start md:self-auto cursor-pointer"
            >
              Full Archive Photography →
            </button>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4 sm:space-y-6 md:space-y-8"
        >
          {displayImages[0] && (
            <div
              onClick={() => setActiveImage(displayImages[0])}
              className="cursor-pointer group relative overflow-hidden bg-[#FAFAF8] h-56 sm:h-80 md:h-[55vh]"
            >
              <img
                src={displayImages[0].url}
                alt={displayImages[0].title}
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out filter contrast-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 sm:p-8">
                <div className="text-white text-xs">
                  <span className="font-semibold text-amber-200">{displayImages[0].title}</span> • {displayImages[0].year}
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-8 items-start">
            {displayImages[1] && (
              <div
                onClick={() => setActiveImage(displayImages[1])}
                className="md:col-span-7 cursor-pointer group relative overflow-hidden bg-[#FAFAF8] h-48 sm:h-64 md:h-[45vh]"
              >
                <img
                  src={displayImages[1].url}
                  alt={displayImages[1].title}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out filter contrast-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 sm:p-6">
                  <div className="text-white text-xs">
                    <span className="font-semibold text-amber-200">{displayImages[1].title}</span> • {displayImages[1].year}
                  </div>
                </div>
              </div>
            )}

            {displayImages[2] && (
              <div
                onClick={() => setActiveImage(displayImages[2])}
                className="md:col-span-5 cursor-pointer group relative overflow-hidden bg-[#FAFAF8] h-48 sm:h-64 md:h-[45vh]"
              >
                <img
                  src={displayImages[2].url}
                  alt={displayImages[2].title}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out filter contrast-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 sm:p-6">
                  <div className="text-white text-xs">
                    <span className="font-semibold text-amber-200">{displayImages[2].title}</span> • {displayImages[2].year}
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex flex-col justify-between p-6 sm:p-12 animate-fade-in"
          onClick={() => setActiveImage(null)}
        >
          <div className="flex justify-between items-center text-xs uppercase tracking-wider text-[#A8A29E]">
            <span>{activeImage.title} • {activeImage.year}</span>
            <button
              onClick={() => setActiveImage(null)}
              className="text-white hover:text-[#E36414] transition-colors cursor-pointer"
            >
              CLOSE [ESC]
            </button>
          </div>

          <div
            className="flex-1 flex items-center justify-center py-6"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage.url}
              alt={activeImage.title}
              className="max-h-[80vh] max-w-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="text-center text-xs text-[#A8A29E] font-light max-w-xl mx-auto">
            {activeImage.caption || 'Official Impucuzeko Photographic Archive'}
          </div>
        </div>
      )}
    </section>
  );
};
