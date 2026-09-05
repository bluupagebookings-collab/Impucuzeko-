import React, { useState } from 'react';
import { VENDOR_CATEGORIES } from '../data/festivalData';

interface VendorsViewProps {
  applicationsOpen: boolean;
}

export const VendorsView: React.FC<VendorsViewProps> = ({ applicationsOpen }) => {
  const [businessName, setBusinessName] = useState('');
  const [traderName, setTraderName] = useState('');
  const [category, setCategory] = useState('food');
  const [contactPhone, setContactPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !traderName) return;
    setSubmitted(true);
  };

  return (
    <div id="vendors-view-page" className="pt-20 sm:pt-28 pb-16 sm:pb-24 bg-[#FAFAF8] text-[#1C1917] min-h-screen grain-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-[#E7E5E4] pb-5 mb-6 sm:pb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#1C1917] font-display leading-[1.05]">
            Vendors & Traders
          </h1>
          <p className="mt-2 sm:mt-4 text-sm sm:text-lg text-[#57534E] font-normal max-w-xl leading-[1.6]">
            Impucuzeko hosts an economic marketplace for over 50 registered independent businesses, artisans, caterers, and traditional fashion makers at Moses Mabhida People’s Park.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 border-b border-[#E7E5E4] pb-8 sm:pb-14">
          {VENDOR_CATEGORIES.map((cat) => (
            <div key={cat.id} className="space-y-2.5">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1C1917] font-display leading-snug">
                {cat.title}
              </h3>
              <p className="text-base text-[#57534E] font-normal leading-[1.6]">
                {cat.description}
              </p>
              <div className="pt-2 text-xs uppercase tracking-wider text-[#B45309] font-semibold">
                {cat.examples.join(', ')}
              </div>
            </div>
          ))}
        </div>

        {/* Application Portal */}
        <div className="pt-16 sm:pt-20 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-6 text-[#1C1917] font-display leading-tight">
            Vendor Registration
          </h2>

          {applicationsOpen ? (
            <div className="space-y-6">
              {submitted ? (
                <div className="space-y-3 py-6">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917] font-display leading-tight">
                    Application Received
                  </h3>
                  <p className="text-base text-[#57534E] font-normal max-w-md leading-[1.6]">
                    The festival logistics desk will review your trade profile and contact you regarding bay allocation and health compliance.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#78716C] font-semibold block mb-1.5">
                      Business or Stall Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      className="w-full bg-white border border-[#E7E5E4] px-3.5 py-2.5 text-sm text-[#1C1917] focus:outline-none focus:border-[#E36414]"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-[#78716C] font-semibold block mb-1.5">
                      Principal Trader Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={traderName}
                      onChange={(e) => setTraderName(e.target.value)}
                      className="w-full bg-white border border-[#E7E5E4] px-3.5 py-2.5 text-sm text-[#1C1917] focus:outline-none focus:border-[#E36414]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs uppercase tracking-wider text-[#78716C] font-semibold block mb-1.5">
                        Category
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full bg-white border border-[#E7E5E4] px-3.5 py-2.5 text-sm text-[#1C1917] focus:outline-none focus:border-[#E36414]"
                      >
                        <option value="food">Traditional Cuisine & Braai</option>
                        <option value="attire">Traditional Attire & Beads</option>
                        <option value="crafts">Music Craft & Accessories</option>
                        <option value="services">Mobile Support Services</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-wider text-[#78716C] font-semibold block mb-1.5">
                        Contact Phone
                      </label>
                      <input
                        type="tel"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                        className="w-full bg-white border border-[#E7E5E4] px-3.5 py-2.5 text-sm text-[#1C1917] focus:outline-none focus:border-[#E36414]"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#E36414] hover:bg-[#BF4A04] text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm"
                    >
                      Submit Vendor Registration
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            <div className="space-y-2">
              <h3 className="text-xl font-bold tracking-tight text-[#1C1917] font-display">
                Applications Closed
              </h3>
              <p className="text-base text-[#57534E] font-normal leading-[1.6]">
                Trading stall allocations for the 13th Annual gathering have closed. Details for the next registration cycle will be published ahead of the upcoming festival season.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
