import React, { useState } from 'react';
import { FestivalEdition } from '../types';

interface ArchiveIndexViewProps {
  historicalEditions: FestivalEdition[];
  onNavigate: (view: string) => void;
}

export const ArchiveIndexView: React.FC<ArchiveIndexViewProps> = ({
  historicalEditions
}) => {
  const [selectedEdition, setSelectedEdition] = useState<FestivalEdition>(historicalEditions[0]);

  return (
    <div className="pt-20 sm:pt-28 pb-16 sm:pb-24 bg-[#FAFAF8] text-[#1C1917] min-h-screen grain-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-[#E7E5E4] pb-5 mb-6 sm:pb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#1C1917] font-display leading-[1.05]">
            Festival Archive
          </h1>
          <p className="mt-2 sm:mt-4 text-sm sm:text-lg text-[#57534E] font-normal max-w-xl leading-[1.6]">
            Chronicling 13 editions of the premier Maskandi assembly since its 2012 inauguration at Moses Mabhida People’s Park.
          </p>
        </div>

        {/* Timeline & Selected Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-16 items-start">
          {/* Editions List with Horizontal Rules */}
          <div className="lg:col-span-6 divide-y divide-[#E7E5E4] border-y border-[#E7E5E4]">
            {historicalEditions.map((edition) => {
              const isSelected = selectedEdition.year === edition.year;
              return (
                <div
                  key={`${edition.year}-${edition.editionNumber}`}
                  onClick={() => setSelectedEdition(edition)}
                  className="cursor-pointer py-3.5 sm:py-6 flex items-baseline justify-between transition-colors group"
                >
                  <div className="space-y-0.5 sm:space-y-1">
                    <span className={`text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-none transition-colors font-display ${
                      isSelected ? 'text-[#E36414]' : 'text-[#78716C] group-hover:text-[#1C1917]'
                    }`}>
                      {edition.year}
                    </span>
                    <p className="text-xs sm:text-sm text-[#1C1917] font-semibold group-hover:text-[#E36414] transition-colors">
                      {edition.editionName}
                    </p>
                  </div>

                  <div className="text-right space-y-1">
                    <span className="text-xs text-[#78716C] font-normal block">{edition.venue}</span>
                    <span className={`text-xs uppercase tracking-wider font-semibold block ${
                      isSelected ? 'text-[#E36414]' : 'text-[#78716C]'
                    }`}>
                      {edition.status === 'completed' ? 'Completed' : 'Upcoming'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Edition Details - NO CARD */}
          <div className="lg:col-span-6 sticky top-32 space-y-6 pt-2">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1917] font-display leading-tight">
                {selectedEdition.year}
              </h2>
              <p className="text-xs uppercase tracking-wider text-[#B45309] font-semibold mt-1">
                {selectedEdition.editionName}
              </p>
            </div>

            <div className="space-y-3 text-xs text-[#78716C]">
              <div className="flex justify-between border-b border-[#E7E5E4] pb-3">
                <span className="uppercase tracking-wider">Date</span>
                <span className="text-[#1C1917] font-medium">{selectedEdition.date}</span>
              </div>
              <div className="flex justify-between border-b border-[#E7E5E4] pb-3">
                <span className="uppercase tracking-wider">Venue</span>
                <span className="text-[#1C1917] font-medium">{selectedEdition.venue}</span>
              </div>
              <div className="flex justify-between border-b border-[#E7E5E4] pb-3">
                <span className="uppercase tracking-wider">Audience</span>
                <span className="text-[#1C1917] font-medium">{selectedEdition.crowdEstimate}</span>
              </div>
              {selectedEdition.honouree && (
                <div className="flex justify-between border-b border-[#E7E5E4] pb-3">
                  <span className="uppercase tracking-wider">Honouree</span>
                  <span className="text-[#E36414] font-semibold">{selectedEdition.honouree}</span>
                </div>
              )}
            </div>

            <div className="pt-2">
              <p className="text-base text-[#57534E] font-normal leading-[1.6]">
                {selectedEdition.highlightSummary}
              </p>
            </div>

            {selectedEdition.keyMoments && selectedEdition.keyMoments.length > 0 && (
              <div className="space-y-2 pt-4 border-t border-[#E7E5E4]">
                <span className="text-xs uppercase tracking-wider text-[#B45309] font-semibold block">Key Historic Moments</span>
                <ul className="space-y-1.5 text-sm text-[#57534E] font-normal">
                  {selectedEdition.keyMoments.map((m, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#E36414] font-bold">—</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
