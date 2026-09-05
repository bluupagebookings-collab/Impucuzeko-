import React, { useState } from 'react';
import { Artist } from '../types';

interface ArtistsViewProps {
  artists: Artist[];
  onSelectArtist: (artist: Artist) => void;
}

export const ArtistsView: React.FC<ArtistsViewProps> = ({ artists, onSelectArtist }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [search, setSearch] = useState('');

  const filteredArtists = artists.filter((artist) => {
    const matchCat = selectedCategory === 'all' || artist.category === selectedCategory;
    const matchSearch = artist.name.toLowerCase().includes(search.toLowerCase()) ||
      (artist.origin && artist.origin.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div className="pt-20 sm:pt-28 pb-16 sm:pb-24 bg-[#FAFAF8] text-[#1C1917] min-h-screen grain-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="border-b border-[#E7E5E4] pb-5 mb-6 sm:pb-8 sm:mb-10 space-y-2 sm:space-y-3">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#1C1917] font-display leading-[1.05]">
            Artists & Lineup
          </h1>
          <p className="text-sm sm:text-lg text-[#57534E] font-normal max-w-2xl leading-[1.6]">
            The definitive gathering of headliners, living legends, and master acoustic guitarists performing on South Africa&apos;s greatest cultural stage.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 sm:gap-6 sm:pb-8 border-b border-[#E7E5E4] text-xs font-medium">
          <div className="flex flex-wrap gap-2">
            {['all', 'headliner', 'main_lineup', 'legend', 'honouree'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#1C1917] text-white'
                    : 'bg-[#E7E5E4]/60 text-[#57534E] hover:bg-[#E7E5E4] hover:text-[#1C1917]'
                }`}
              >
                {cat === 'all' ? 'All Masters' : cat === 'honouree' ? 'Honouree' : cat.replace('_', ' ')}
              </button>
            ))}
          </div>

          <div className="w-full md:w-72">
            <input
              type="text"
              placeholder="Search artist or region..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white border border-[#E7E5E4] px-4 py-2 text-xs text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:border-[#1C1917] rounded-full"
            />
          </div>
        </div>

        {/* Borderless Artist Showcase - NO CARDS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6 md:gap-8 mt-6 sm:mt-10">
          {filteredArtists.map((artist) => (
            <div
              key={artist.id}
              onClick={() => onSelectArtist(artist)}
              className="cursor-pointer group flex flex-col space-y-3"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#E7E5E4]">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="text-base sm:text-lg font-bold tracking-tight font-display line-clamp-1">
                    {artist.name}
                  </h3>
                  <p className="text-xs text-white/80 font-normal truncate mt-0.5">
                    {artist.origin || 'KwaZulu-Natal'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
