import React, { useState } from 'react';
import { FestivalEdition, Artist, GalleryImage, Story } from '../types';

interface OrganiserCMSModalProps {
  currentFestival: FestivalEdition;
  artists: Artist[];
  galleryImages: GalleryImage[];
  stories: Story[];
  vendorApplicationsOpen: boolean;
  isOpen: boolean;
  onClose: () => void;
  onUpdateFestival: (updated: FestivalEdition) => void;
  onToggleVendorApplications: (isOpen: boolean) => void;
  onAddArtist: (artist: Artist) => void;
  onAddGalleryImage: (image: GalleryImage) => void;
  onResetDefaults: () => void;
}

export const OrganiserCMSModal: React.FC<OrganiserCMSModalProps> = ({
  currentFestival,
  vendorApplicationsOpen,
  isOpen,
  onClose,
  onUpdateFestival,
  onToggleVendorApplications,
  onAddArtist,
  onResetDefaults
}) => {
  const [activeTab, setActiveTab] = useState<'festival' | 'artists' | 'vendors'>('festival');

  // Festival form state
  const [year, setYear] = useState(currentFestival.year);
  const [editionName, setEditionName] = useState(currentFestival.editionName);
  const [date, setDate] = useState(currentFestival.date);
  const [venue, setVenue] = useState(currentFestival.venue);
  const [ticketStatus, setTicketStatus] = useState(currentFestival.ticketStatus);
  const [honouree, setHonouree] = useState(currentFestival.honouree || '');

  // Artist form state
  const [newArtistName, setNewArtistName] = useState('');
  const [newArtistCategory, setNewArtistCategory] = useState<'headliner' | 'main_lineup' | 'legend' | 'featured'>('headliner');
  const [newArtistOrigin, setNewArtistOrigin] = useState('');
  const [newArtistBio, setNewArtistBio] = useState('');

  if (!isOpen) return null;

  const handleSaveFestival = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateFestival({
      ...currentFestival,
      year: Number(year),
      editionName,
      date,
      venue,
      ticketStatus,
      honouree
    });
    onClose();
  };

  const handleCreateArtist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newArtistName) return;
    const newArtist: Artist = {
      id: newArtistName.toLowerCase().replace(/\s+/g, '-'),
      name: newArtistName,
      category: newArtistCategory,
      isFeatured: newArtistCategory === 'headliner',
      yearsPerformed: [year],
      bio: newArtistBio || 'Official performer at Impucuzeko Maskandi Festival.',
      origin: newArtistOrigin || 'KwaZulu-Natal',
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80'
    };
    onAddArtist(newArtist);
    setNewArtistName('');
    setNewArtistOrigin('');
    setNewArtistBio('');
    alert(`Artist "${newArtistName}" added to official lineup.`);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white border border-[#E7E5E4] max-w-3xl w-full max-h-[90vh] overflow-y-auto text-[#1C1917] flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 sm:px-8 py-5 border-b border-[#E7E5E4] text-xs uppercase tracking-wider text-[#78716C]">
          <span className="text-[#B45309] font-semibold">Organiser CMS</span>
          <button
            onClick={onClose}
            className="text-[#78716C] hover:text-[#1C1917] transition-colors font-medium"
          >
            Close [ESC]
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#E7E5E4] px-6 sm:px-8 text-xs uppercase tracking-wider">
          <button
            onClick={() => setActiveTab('festival')}
            className={`py-4 mr-8 border-b-2 font-medium transition-colors ${
              activeTab === 'festival' ? 'border-[#E36414] text-[#B45309] font-semibold' : 'border-transparent text-[#78716C] hover:text-[#1C1917]'
            }`}
          >
            Festival Settings
          </button>
          <button
            onClick={() => setActiveTab('artists')}
            className={`py-4 mr-8 border-b-2 font-medium transition-colors ${
              activeTab === 'artists' ? 'border-[#E36414] text-[#B45309] font-semibold' : 'border-transparent text-[#78716C] hover:text-[#1C1917]'
            }`}
          >
            Add Artist
          </button>
          <button
            onClick={() => setActiveTab('vendors')}
            className={`py-4 border-b-2 font-medium transition-colors ${
              activeTab === 'vendors' ? 'border-[#E36414] text-[#B45309] font-semibold' : 'border-transparent text-[#78716C] hover:text-[#1C1917]'
            }`}
          >
            Vendors & System
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 flex-1">
          {activeTab === 'festival' && (
            <form onSubmit={handleSaveFestival} className="space-y-6">
              <div className="text-xs uppercase tracking-[0.16em] text-[#78716C] pb-2 font-medium">
                Active Festival Configuration (Xolani Mcineka & Sandile Ndlanya)
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#78716C] font-semibold block mb-1">
                    Festival Year
                  </label>
                  <input
                    type="number"
                    value={year}
                    onChange={(e) => setYear(Number(e.target.value))}
                    className="w-full bg-white border border-[#E7E5E4] px-3.5 py-2 text-xs text-[#1C1917] focus:outline-none focus:border-[#E36414]"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#78716C] font-semibold block mb-1">
                    Ticket Status
                  </label>
                  <select
                    value={ticketStatus}
                    onChange={(e) => setTicketStatus(e.target.value as any)}
                    className="w-full bg-white border border-[#E7E5E4] px-3.5 py-2 text-xs text-[#1C1917] focus:outline-none focus:border-[#E36414]"
                  >
                    <option value="sold_out">SOLD OUT</option>
                    <option value="available">ON SALE</option>
                    <option value="coming_soon">COMING SOON</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider text-[#78716C] font-semibold block mb-1">
                  Edition Name
                </label>
                <input
                  type="text"
                  value={editionName}
                  onChange={(e) => setEditionName(e.target.value)}
                  className="w-full bg-white border border-[#E7E5E4] px-3.5 py-2 text-xs text-[#1C1917] focus:outline-none focus:border-[#E36414]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#78716C] font-semibold block mb-1">
                    Date
                  </label>
                  <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-white border border-[#E7E5E4] px-3.5 py-2 text-xs text-[#1C1917] focus:outline-none focus:border-[#E36414]"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#78716C] font-semibold block mb-1">
                    Venue
                  </label>
                  <input
                    type="text"
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                    className="w-full bg-white border border-[#E7E5E4] px-3.5 py-2 text-xs text-[#1C1917] focus:outline-none focus:border-[#E36414]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider text-[#78716C] font-semibold block mb-1">
                  Honouree / Celebration Focus
                </label>
                <input
                  type="text"
                  value={honouree}
                  onChange={(e) => setHonouree(e.target.value)}
                  className="w-full bg-white border border-[#E7E5E4] px-3.5 py-2 text-xs text-[#1C1917] focus:outline-none focus:border-[#E36414]"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#E36414] hover:bg-[#BF4A04] text-white font-semibold text-xs uppercase tracking-[0.2em] transition-colors shadow-sm"
                >
                  SAVE & PUBLISH TO LIVE PLATFORM
                </button>
              </div>
            </form>
          )}

          {activeTab === 'artists' && (
            <form onSubmit={handleCreateArtist} className="space-y-6">
              <div className="text-xs uppercase tracking-[0.16em] text-[#78716C] pb-2 font-medium">
                Add Artist to Official Lineup
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider text-[#78716C] font-semibold block mb-1">
                  Artist Name *
                </label>
                <input
                  type="text"
                  required
                  value={newArtistName}
                  onChange={(e) => setNewArtistName(e.target.value)}
                  placeholder="e.g. Khuzani"
                  className="w-full bg-white border border-[#E7E5E4] px-3.5 py-2 text-xs text-[#1C1917] focus:outline-none focus:border-[#E36414]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#78716C] font-semibold block mb-1">
                    Category
                  </label>
                  <select
                    value={newArtistCategory}
                    onChange={(e) => setNewArtistCategory(e.target.value as any)}
                    className="w-full bg-white border border-[#E7E5E4] px-3.5 py-2 text-xs text-[#1C1917] focus:outline-none focus:border-[#E36414]"
                  >
                    <option value="headliner">Headliner</option>
                    <option value="main_lineup">Main Lineup</option>
                    <option value="legend">Legend</option>
                    <option value="featured">Featured</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#78716C] font-semibold block mb-1">
                    Origin / Region
                  </label>
                  <input
                    type="text"
                    value={newArtistOrigin}
                    onChange={(e) => setNewArtistOrigin(e.target.value)}
                    placeholder="e.g. Nkandla, KwaZulu-Natal"
                    className="w-full bg-white border border-[#E7E5E4] px-3.5 py-2 text-xs text-[#1C1917] focus:outline-none focus:border-[#E36414]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider text-[#78716C] font-semibold block mb-1">
                  Short Musical Bio
                </label>
                <textarea
                  rows={3}
                  value={newArtistBio}
                  onChange={(e) => setNewArtistBio(e.target.value)}
                  placeholder="Enter biography..."
                  className="w-full bg-white border border-[#E7E5E4] px-3.5 py-2 text-xs text-[#1C1917] focus:outline-none focus:border-[#E36414]"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#E36414] hover:bg-[#BF4A04] text-white font-semibold text-xs uppercase tracking-[0.2em] transition-colors shadow-sm"
                >
                  ADD ARTIST TO ROSTER
                </button>
              </div>
            </form>
          )}

          {activeTab === 'vendors' && (
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.16em] text-[#1C1917] block font-semibold">
                  Vendor Application Gate
                </span>
                <p className="text-xs text-[#57534E]">
                  Toggle whether local SMME food and attire vendors can submit applications online.
                </p>
                <button
                  onClick={() => onToggleVendorApplications(!vendorApplicationsOpen)}
                  className={`px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] transition-colors shadow-sm ${
                    vendorApplicationsOpen ? 'bg-[#E36414] text-white' : 'border border-[#E7E5E4] bg-white text-[#57534E] hover:bg-[#F5F5F4]'
                  }`}
                >
                  {vendorApplicationsOpen ? 'APPLICATIONS ARE CURRENTLY OPEN' : 'APPLICATIONS ARE CLOSED'}
                </button>
              </div>

              <div className="pt-6 border-t border-[#E7E5E4] space-y-3">
                <span className="text-xs uppercase tracking-[0.16em] text-[#78716C] block font-semibold">
                  Reset System
                </span>
                <p className="text-xs text-[#57534E]">
                  Reset local changes to official verified 2026 archive defaults.
                </p>
                <button
                  onClick={() => {
                    onResetDefaults();
                    onClose();
                  }}
                  className="px-4 py-2 border border-[#E7E5E4] bg-white text-[#57534E] hover:text-[#B45309] hover:bg-[#F5F5F4] text-xs uppercase tracking-wider shadow-xs"
                >
                  Reset to 2026 Official Archive
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
