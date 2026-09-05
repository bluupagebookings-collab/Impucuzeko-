import React, { useEffect } from 'react';
import { Artist } from '../types';

interface ArtistModalProps {
  artist: Artist | null;
  onClose: () => void;
}

export const ArtistModal: React.FC<ArtistModalProps> = ({ artist, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (artist) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [artist, onClose]);

  if (!artist) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white border border-[#E7E5E4] max-w-4xl w-full max-h-[90vh] overflow-y-auto text-[#1C1917] shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex justify-between items-center px-6 sm:px-8 py-5 border-b border-[#E7E5E4] text-xs uppercase tracking-wider text-[#78716C]">
          <span>Official Artist Profile</span>
          <button
            onClick={onClose}
            className="text-[#1C1917] hover:text-[#E36414] transition-colors cursor-pointer"
          >
            Close [ESC]
          </button>
        </div>

        {/* Editorial Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-6 sm:p-10 items-start">
          {/* Portrait Image */}
          <div className="md:col-span-5 aspect-[3/4] overflow-hidden bg-[#FAFAF8] border border-[#E7E5E4] relative flex items-center justify-center">
            <img
              src={artist.image}
              alt={artist.name}
              className="w-full h-full object-cover object-top filter contrast-105"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Details */}
          <div className="md:col-span-7 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#1C1917] font-display leading-[1.08]">
                {artist.name}
              </h2>
              <p className="text-xs uppercase tracking-wider text-[#B45309] font-semibold mt-1">
                {artist.category.replace('_', ' ')} • {artist.origin || 'KwaZulu-Natal, South Africa'}
              </p>
            </div>

            {artist.soundDescription && (
              <div className="space-y-1.5 pt-4 border-t border-[#E7E5E4]">
                <span className="text-xs uppercase tracking-wider text-[#E36414] block font-semibold">
                  Sound & Style
                </span>
                <p className="text-base text-[#1C1917] font-medium leading-[1.6]">
                  {artist.soundDescription}
                </p>
              </div>
            )}

            <div className="space-y-2 pt-4 border-t border-[#E7E5E4]">
              <span className="text-xs uppercase tracking-wider text-[#E36414] block font-semibold">
                Biography
              </span>
              <p className="text-sm sm:text-base text-[#57534E] font-normal leading-[1.65]">
                {artist.bio}
              </p>
            </div>

            {artist.knownFor && (
              <div className="space-y-1 pt-4 border-t border-[#E7E5E4]">
                <span className="text-xs uppercase tracking-wider text-[#E36414] block font-semibold">
                  Known For
                </span>
                <p className="text-sm text-[#78716C] font-normal leading-[1.5]">
                  {artist.knownFor}
                </p>
              </div>
            )}

            {artist.yearsPerformed && artist.yearsPerformed.length > 0 && (
              <div className="space-y-1.5 pt-4 border-t border-[#E7E5E4]">
                <span className="text-xs uppercase tracking-wider text-[#E36414] block font-semibold">
                  Festival Editions
                </span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {artist.yearsPerformed.map((yr) => (
                    <span
                      key={yr}
                      className="px-2.5 py-1 text-xs font-semibold bg-[#FAFAF8] border border-[#E7E5E4] text-[#1C1917]"
                    >
                      {yr}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
