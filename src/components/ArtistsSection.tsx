import React from 'react';
import { motion } from 'motion/react';
import { Artist } from '../types';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';

interface ArtistsSectionProps {
  artists: Artist[];
  onSelectArtist: (artist: Artist) => void;
  onViewAllArtists?: () => void;
}

export const ArtistsSection: React.FC<ArtistsSectionProps> = ({
  artists,
  onSelectArtist,
  onViewAllArtists,
}) => {
  const lineupArtists = artists.filter((a) => !a.id.includes('sicebi') && a.category !== 'honouree').slice(0, 12);

  return (
    <section id="artists-editorial" className="relative py-12 sm:py-20 md:py-24 bg-gradient-to-b from-[#FAF6F0] via-[#FCFAF7] to-[#F5EFEB] text-[#1C1917] border-t border-amber-900/10 grain-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="2026 Stage Masters"
          description="The headline artists and traditional acoustic icons who took to the grand stage at Moses Mabhida People's Park."
          action={onViewAllArtists ? (
            <Button variant="link" arrow onClick={onViewAllArtists}>
              View full festival roster
            </Button>
          ) : undefined}
        />

        {/* Clean photo showcase without frames */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
          {lineupArtists.map((artist, idx) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: (idx % 6) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              onClick={() => onSelectArtist(artist)}
              className="cursor-pointer group flex flex-col"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#E7E5E4]">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-sm sm:text-base font-bold tracking-tight font-display line-clamp-1 group-hover:text-amber-200 transition-colors">
                    {artist.name}
                  </h3>
                  <p className="text-[11px] text-amber-100/75 font-normal truncate mt-0.5">
                    {artist.origin || 'KwaZulu-Natal'}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
