import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { TicketModal } from './components/TicketModal';
import { OrganiserCMSModal } from './components/OrganiserCMSModal';
import { HomeView } from './views/HomeView';
import { Archive2026View } from './views/Archive2026View';
import { ArchiveIndexView } from './views/ArchiveIndexView';
import { ArtistsView } from './views/ArtistsView';
import { GalleryView } from './views/GalleryView';
import { StoriesView } from './views/StoriesView';
import { InformationView } from './views/InformationView';
import { VendorsView } from './views/VendorsView';
import { ContactView } from './views/ContactView';

import {
  INITIAL_CURRENT_FESTIVAL,
  HISTORICAL_EDITIONS,
  INITIAL_ARTISTS,
  GALLERY_IMAGES,
  EDITORIAL_STORIES,
  VERIFIED_PARTNERS
} from './data/festivalData';

import { FestivalEdition, Artist, GalleryImage, Story } from './types';

export default function App() {
  // Current Festival state with localStorage persistence
  const [currentFestival, setCurrentFestival] = useState<FestivalEdition>(() => {
    const saved = localStorage.getItem('impucuzeko_current_festival_v2');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return INITIAL_CURRENT_FESTIVAL;
  });

  // Historical editions chronicle
  const [historicalEditions, setHistoricalEditions] = useState<FestivalEdition[]>(() => {
    const saved = localStorage.getItem('impucuzeko_historical_editions_v2');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return HISTORICAL_EDITIONS;
  });

  // Artists repository
  const [artists, setArtists] = useState<Artist[]>(() => {
    try {
      const saved = localStorage.getItem('impucuzeko_artists_v7');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const jaiva = parsed.find((a: Artist) => a.id === 'jaiva-zimnike');
          const gatsheni = parsed.find((a: Artist) => a.id === 'gatsheni');
          const dumakahle = parsed.find((a: Artist) => a.id === 'dumakahle');
          const mdumazi = parsed.find((a: Artist) => a.id === 'mdumazi');
          const imfezi = parsed.find((a: Artist) => a.id === 'imfezi');
          const shwi = parsed.find((a: Artist) => a.id === 'shwi-nomtekhala');
          if (
            !jaiva ||
            !gatsheni ||
            !dumakahle ||
            !mdumazi ||
            !imfezi ||
            !shwi ||
            jaiva.image.includes('unsplash') ||
            gatsheni.image.includes('unsplash') ||
            dumakahle.image.includes('unsplash') ||
            shwi.image.includes('unsplash') ||
            !shwi.image.includes('1788652291389') ||
            mdumazi.category !== 'legend' ||
            imfezi.category !== 'legend'
          ) {
            return INITIAL_ARTISTS;
          }
          return parsed;
        }
      }
    } catch (e) {
      console.error(e);
    }
    return INITIAL_ARTISTS;
  });

  // Gallery repository
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>(() => {
    try {
      const saved = localStorage.getItem('impucuzeko_gallery_v5');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (
          Array.isArray(parsed) &&
          parsed.length > 0 &&
          !parsed.some((img: GalleryImage) =>
            img.url?.includes('unsplash') ||
            img.url?.includes('XfcLjMH4') ||
            img.url?.includes('LDw1Pfk4')
          )
        ) {
          return parsed;
        }
      }
    } catch (e) {
      console.error(e);
    }
    return GALLERY_IMAGES;
  });

  // Stories repository
  const [stories] = useState<Story[]>(EDITORIAL_STORIES);

  // Partners repository
  const partners = VERIFIED_PARTNERS;

  // Vendor applications toggle
  const [vendorApplicationsOpen, setVendorApplicationsOpen] = useState<boolean>(() => {
    const saved = localStorage.getItem('impucuzeko_vendor_applications_open');
    return saved === 'true';
  });

  // Active View router
  const [currentView, setCurrentView] = useState<string>('home');
  const [selectedStoryId, setSelectedStoryId] = useState<string | null>(null);

  // Modals
  const [isTicketModalOpen, setIsTicketModalOpen] = useState<boolean>(false);
  const [isCMSModalOpen, setIsCMSModalOpen] = useState<boolean>(false);

  // Sync to local storage
  useEffect(() => {
    localStorage.setItem('impucuzeko_current_festival_v2', JSON.stringify(currentFestival));
  }, [currentFestival]);

  useEffect(() => {
    localStorage.setItem('impucuzeko_historical_editions_v2', JSON.stringify(historicalEditions));
  }, [historicalEditions]);

  useEffect(() => {
    localStorage.setItem('impucuzeko_artists_v7', JSON.stringify(artists));
  }, [artists]);

  useEffect(() => {
    localStorage.setItem('impucuzeko_gallery_v5', JSON.stringify(galleryImages));
  }, [galleryImages]);

  useEffect(() => {
    localStorage.setItem('impucuzeko_vendor_applications_open', String(vendorApplicationsOpen));
  }, [vendorApplicationsOpen]);

  // Handler to update active festival
  const handleUpdateFestival = (updated: FestivalEdition) => {
    setCurrentFestival(updated);

    // If new year, add/update in historical editions list
    setHistoricalEditions((prev) => {
      const existsIndex = prev.findIndex((e) => e.year === updated.year);
      if (existsIndex >= 0) {
        const next = [...prev];
        next[existsIndex] = updated;
        return next;
      } else {
        return [updated, ...prev];
      }
    });
  };

  // Add artist to active lineup
  const handleAddArtist = (newArtist: Artist) => {
    setArtists((prev) => [newArtist, ...prev]);
  };

  // Add gallery image
  const handleAddGalleryImage = (newImage: GalleryImage) => {
    setGalleryImages((prev) => [newImage, ...prev]);
  };

  // Reset to verified 2026 archive
  const handleResetDefaults = () => {
    localStorage.removeItem('impucuzeko_current_festival');
    localStorage.removeItem('impucuzeko_current_festival_v2');
    localStorage.removeItem('impucuzeko_historical_editions');
    localStorage.removeItem('impucuzeko_historical_editions_v2');
    localStorage.removeItem('impucuzeko_artists');
    localStorage.removeItem('impucuzeko_artists_v2');
    localStorage.removeItem('impucuzeko_artists_v3');
    localStorage.removeItem('impucuzeko_artists_v4');
    localStorage.removeItem('impucuzeko_artists_v5');
    localStorage.removeItem('impucuzeko_artists_v6');
    localStorage.removeItem('impucuzeko_artists_v7');
    localStorage.removeItem('impucuzeko_gallery');
    localStorage.removeItem('impucuzeko_gallery_v2');
    localStorage.removeItem('impucuzeko_gallery_v3');
    localStorage.removeItem('impucuzeko_gallery_v4');
    localStorage.removeItem('impucuzeko_gallery_v5');
    localStorage.removeItem('impucuzeko_vendor_applications_open');
    setCurrentFestival(INITIAL_CURRENT_FESTIVAL);
    setHistoricalEditions(HISTORICAL_EDITIONS);
    setArtists(INITIAL_ARTISTS);
    setGalleryImages(GALLERY_IMAGES);
    setVendorApplicationsOpen(false);
  };

  const navigateTo = (view: string, storyId?: string) => {
    if (view !== 'stories') {
      setSelectedStoryId(null);
    } else if (storyId) {
      setSelectedStoryId(storyId);
    }
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="impucuzeko-app-root" className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#1C1917] grain-bg selection:bg-[#E36414] selection:text-white">
      {/* Fixed Editorial Navigation */}
      <Navbar
        currentFestival={currentFestival}
        currentView={currentView}
        onNavigate={navigateTo}
        onOpenTickets={() => setIsTicketModalOpen(true)}
        onOpenCMS={() => setIsCMSModalOpen(true)}
      />

      {/* Main Viewport Content */}
      <main id="main-content-area" className="flex-1">
        {currentView === 'home' && (
          <HomeView
            festival={currentFestival}
            historicalEditions={historicalEditions}
            artists={artists}
            galleryImages={galleryImages}
            stories={stories}
            partners={partners}
            onNavigate={navigateTo}
            onOpenTickets={() => setIsTicketModalOpen(true)}
            onSelectStory={(story) => {
              setSelectedStoryId(story.id);
              setCurrentView('stories');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentView === 'archive-2026' && (
          <Archive2026View
            festival={currentFestival}
            artists={artists}
            galleryImages={galleryImages}
            stories={stories}
            partners={partners}
            onNavigate={navigateTo}
          />
        )}

        {currentView === 'archive' && (
          <ArchiveIndexView
            historicalEditions={historicalEditions}
            onNavigate={navigateTo}
          />
        )}

        {currentView === 'artists' && (
          <ArtistsView
            artists={artists}
          />
        )}

        {currentView === 'gallery' && (
          <GalleryView images={galleryImages} />
        )}

        {currentView === 'stories' && (
          <StoriesView
            stories={stories}
            selectedStoryId={selectedStoryId}
            onSelectStory={(story) => {
              setSelectedStoryId(story ? story.id : null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateHome={() => navigateTo('home')}
          />
        )}

        {currentView === 'information' && (
          <InformationView
            festival={currentFestival}
            onNavigate={navigateTo}
          />
        )}

        {currentView === 'vendors' && (
          <VendorsView applicationsOpen={vendorApplicationsOpen} />
        )}

        {currentView === 'contact' && (
          <ContactView />
        )}
      </main>

      {/* Site Footer */}
      <Footer onNavigate={navigateTo} onOpenCMS={() => setIsCMSModalOpen(true)} />

      {/* Global Modals */}
      <TicketModal
        festival={currentFestival}
        isOpen={isTicketModalOpen}
        onClose={() => setIsTicketModalOpen(false)}
      />

      <OrganiserCMSModal
        currentFestival={currentFestival}
        artists={artists}
        galleryImages={galleryImages}
        stories={stories}
        vendorApplicationsOpen={vendorApplicationsOpen}
        isOpen={isCMSModalOpen}
        onClose={() => setIsCMSModalOpen(false)}
        onUpdateFestival={handleUpdateFestival}
        onToggleVendorApplications={setVendorApplicationsOpen}
        onAddArtist={handleAddArtist}
        onAddGalleryImage={handleAddGalleryImage}
        onResetDefaults={handleResetDefaults}
      />
    </div>
  );
}
