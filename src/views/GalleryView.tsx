import React, { useState, useEffect } from 'react';
import { GalleryImage } from '../types';

interface GalleryViewProps {
  images: GalleryImage[];
}

export const GalleryView: React.FC<GalleryViewProps> = ({ images }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeImage, setActiveImage] = useState<GalleryImage | null>(null);

  const categories = [
    { id: 'all', label: 'All Photographs' },
    { id: 'artists', label: 'Performances' },
    { id: 'crowd', label: 'Audience & Park' },
    { id: 'train', label: 'PRASA Mobility' },
    { id: 'venue', label: 'Moses Mabhida' }
  ];

  const filteredImages = images.filter((img) => {
    if (selectedCategory === 'all') return true;
    return img.category === selectedCategory;
  });

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
    <div className="pt-20 sm:pt-28 pb-16 sm:pb-24 bg-[#FAFAF8] text-[#1C1917] min-h-screen grain-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-[#E7E5E4] pb-5 mb-6 sm:pb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#1C1917] font-display leading-[1.05]">
            Festival Photography
          </h1>
          <p className="mt-2 sm:mt-4 text-sm sm:text-lg text-[#57534E] font-normal max-w-xl leading-[1.6]">
            A visual archive of Moses Mabhida People’s Park, traditional attire, and the defining performances of Maskandi history.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 pb-4 sm:pb-6 border-b border-[#E7E5E4] text-xs font-medium">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#1C1917] text-white'
                  : 'bg-[#E7E5E4]/60 text-[#57534E] hover:bg-[#E7E5E4] hover:text-[#1C1917]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photography Grid - NO CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8 mt-6 sm:mt-10">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setActiveImage(image)}
              className="cursor-pointer group relative overflow-hidden bg-[#E7E5E4] aspect-[4/3]"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out filter contrast-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                <div className="text-white space-y-0.5">
                  <h3 className="text-base font-bold tracking-tight font-display">
                    {image.title}
                  </h3>
                  <p className="text-xs text-white/80">
                    {image.year} • {image.category}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex flex-col justify-between p-6 sm:p-12 animate-fade-in"
          onClick={() => setActiveImage(null)}
        >
          <div className="flex justify-between items-center text-xs uppercase tracking-wider text-[#A8A29E]">
            <span>
              {activeImage.title} • {activeImage.year}
            </span>
            <button
              onClick={() => setActiveImage(null)}
              className="text-white hover:text-[#E36414] transition-colors cursor-pointer"
            >
              Close [ESC]
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

          <div className="text-center text-xs text-[#A8A29E] font-light max-w-xl mx-auto leading-[1.6]">
            {activeImage.caption}
          </div>
        </div>
      )}
    </div>
  );
};
