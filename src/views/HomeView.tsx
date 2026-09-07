import React from 'react';
import { Hero } from '../components/Hero';
import { FestivalIntro } from '../components/FestivalIntro';
import { ArtistsSection } from '../components/ArtistsSection';
import { Edition2026Section } from '../components/Edition2026Section';
import { PeoplesTrainFeature } from '../components/PeoplesTrainFeature';
import { ScebiCelebration } from '../components/ScebiCelebration';
import { GallerySection } from '../components/GallerySection';
import { LegacyTimeline } from '../components/LegacyTimeline';
import { StoriesSection } from '../components/StoriesSection';
import { FoundersAndMediaSection } from '../components/FoundersAndMediaSection';
import { PartnersSection } from '../components/PartnersSection';
import { FestivalEdition, Artist, GalleryImage, Story, Partner } from '../types';

interface HomeViewProps {
  festival: FestivalEdition;
  historicalEditions: FestivalEdition[];
  artists: Artist[];
  galleryImages: GalleryImage[];
  stories: Story[];
  partners: Partner[];
  onNavigate: (view: string) => void;
  onOpenTickets: () => void;
  onSelectArtist?: (artist: Artist) => void;
  onSelectStory: (story: Story) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  festival,
  historicalEditions,
  artists,
  galleryImages,
  stories,
  partners,
  onNavigate,
  onOpenTickets,
  onSelectStory
}) => {
  return (
    <div className="bg-[#FAFAF8] text-[#1C1917] selection:bg-[#E36414] selection:text-white grain-bg">
      {/* 1. Hero: Welcome & Post-Festival Gratitude */}
      <Hero
        festival={festival}
        onExploreCurrent={() => onNavigate('archive-2026')}
        onNextFestivalClick={onOpenTickets}
      />

      {/* 2. Festival Intro: The Maskandi World Cup Concept */}
      <FestivalIntro />

      {/* 3. In Memoriam & Dedication: Honouring Sicebi "Inkosi Yamagcokama" Dlamini */}
      <ScebiCelebration />

      {/* 4. The 2026 Festival In Review: How Durban Celebrated (How Things Went Down) */}
      <Edition2026Section
        festival={festival}
        onViewArchive={() => onNavigate('archive-2026')}
      />

      {/* 5. 2026 Visual Chronicle: Photographic Moments from People's Park */}
      <GallerySection
        images={galleryImages}
        onViewAllGallery={() => onNavigate('gallery')}
      />

      {/* 6. The 2026 Stage Masters: Artists & Performers */}
      <ArtistsSection
        artists={artists}
        onViewAllArtists={() => onNavigate('artists')}
      />

      {/* 7. Landmark Transit Feature: The People's Train (Isitimela Sabantu) */}
      <PeoplesTrainFeature />

      {/* 8. Historic Chronicle: 13 Editions Since 2012 */}
      <LegacyTimeline
        historicalEditions={historicalEditions}
        onSelectEdition={() => onNavigate('archive')}
      />

      {/* 9. Founders, Promoters, Journalists & Influencer Appreciation */}
      <FoundersAndMediaSection />

      {/* 10. Official Partners & Patronage */}
      <PartnersSection partners={partners} />

      {/* 11. Editorial Dispatches, Stories & Latest News */}
      <StoriesSection
        stories={stories}
        onViewAllStories={() => onNavigate('stories')}
        onSelectStory={onSelectStory}
      />
    </div>
  );
};
