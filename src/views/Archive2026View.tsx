import React from 'react';
import { FestivalEdition, Artist, GalleryImage, Story, Partner } from '../types';
import { PeoplesTrainFeature } from '../components/PeoplesTrainFeature';
import { ScebiCelebration } from '../components/ScebiCelebration';
import { Edition2026Section } from '../components/Edition2026Section';
import { GallerySection } from '../components/GallerySection';
import { FoundersAndMediaSection } from '../components/FoundersAndMediaSection';
import { PartnersSection } from '../components/PartnersSection';

interface Archive2026ViewProps {
  festival: FestivalEdition;
  artists: Artist[];
  galleryImages: GalleryImage[];
  stories: Story[];
  partners: Partner[];
  onSelectArtist?: (artist: Artist) => void;
  onNavigate: (view: string) => void;
}

export const Archive2026View: React.FC<Archive2026ViewProps> = ({
  festival,
  artists,
  galleryImages,
  partners,
}) => {
  const images2026 = galleryImages.filter((img) => img.year === 2026);

  return (
    <div id="archive-2026-view" className="pt-20 sm:pt-28 pb-16 sm:pb-24 bg-[#FAFAF8] text-[#1C1917] min-h-screen grain-bg">
      {/* 2026 Editorial Header */}
      <section className="border-b border-[#E7E5E4] pb-6 sm:pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 pb-6 sm:pb-8">
            <div className="space-y-2 sm:space-y-4 max-w-3xl">
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#1C1917] font-display leading-[1.05]">
                2026 • 13th Annual
              </h1>
              <p className="text-sm sm:text-lg text-[#57534E] font-normal leading-[1.6]">
                The definitive historical record of the 13th Annual Impucuzeko Maskandi Festival, celebrated at Moses Mabhida People’s Park on Saturday 29 August 2026.
              </p>
            </div>

            <div className="space-y-0.5 sm:space-y-1 text-xs text-[#78716C] lg:text-right shrink-0">
              <div className="text-[#1C1917] font-semibold text-xs sm:text-sm">29 August 2026</div>
              <div className="font-normal">Moses Mabhida People’s Park, Durban</div>
              <div className="text-[#E36414] font-semibold pt-0.5 sm:pt-1">25,000+ Capacity Assembly</div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-[#E7E5E4]">
            <div className="space-y-1.5 sm:space-y-2">
              <h3 className="text-base sm:text-lg font-bold font-display text-[#1C1917]">Street Parade</h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                Thousands dressed in vibrant Zulu traditional regalia paraded in song along Durban&apos;s promenade directly into People&apos;s Park.
              </p>
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <h3 className="text-base sm:text-lg font-bold font-display text-[#1C1917]">The People&apos;s Train</h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                PRASA provided complimentary chartered passenger rail transit across KwaZulu-Natal to Durban Station for ticket holders.
              </p>
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <h3 className="text-base sm:text-lg font-bold font-display text-[#1C1917]">25,000 Capacity</h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                Devotees from all nine provinces joined together under the Moses Mabhida arch for 14 hours of non-stop Maskandi poetry and guitar solos.
              </p>
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <h3 className="text-base sm:text-lg font-bold font-display text-[#1C1917]">Economic Boost</h3>
              <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                Empowered local indigenous artisans, seamstresses, Durban taxi associations, and over 50 local SMME food and craft vendors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scebi Celebration */}
      <ScebiCelebration />

      {/* People's Train Feature */}
      <PeoplesTrainFeature />

      {/* Official 2026 Lineup Roster - NO CARDS */}
      <section className="py-10 sm:py-16 md:py-20 border-t border-[#E7E5E4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-5 sm:mb-8 pb-4 sm:pb-6 border-b border-[#E7E5E4]">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1917] font-display leading-tight">
              2026 Performing Roster
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
            {artists.map((artist) => (
              <div
                key={artist.id}
                className="group flex flex-col select-none"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#E7E5E4]">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover object-top filter contrast-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-85" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-sm sm:text-base font-bold tracking-tight font-display line-clamp-1">
                      {artist.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2026 Slideable Photographic Chronicle */}
      <Edition2026Section festival={festival} />

      {/* 2026 Gallery */}
      <GallerySection images={images2026} />

      {/* Founders, Promoters & Media Acknowledgement */}
      <FoundersAndMediaSection />

      {/* Partners */}
      <PartnersSection partners={partners} />
    </div>
  );
};
