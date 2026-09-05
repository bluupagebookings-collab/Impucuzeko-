import React, { useState } from 'react';
import { FestivalEdition } from '../types';
import { EVENT_FAQS } from '../data/festivalData';

interface InformationViewProps {
  festival: FestivalEdition;
  onNavigate: (view: string) => void;
}

export const InformationView: React.FC<InformationViewProps> = ({ festival }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div id="information-view-page" className="pt-20 sm:pt-28 pb-16 sm:pb-24 bg-[#FAFAF8] text-[#1C1917] min-h-screen grain-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-[#E7E5E4] pb-5 mb-6 sm:pb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#1C1917] font-display leading-[1.05]">
            Information
          </h1>
          <p className="mt-2 sm:mt-4 text-sm sm:text-lg text-[#57534E] font-normal max-w-xl leading-[1.6]">
            Essential guidelines for Moses Mabhida People’s Park, transport partnerships, gate entry, and festival protocols.
          </p>
        </div>

        {/* Typographic Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 border-b border-[#E7E5E4] pb-8 sm:pb-14">
          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1C1917] font-display leading-snug">
              Moses Mabhida People’s Park
            </h3>
            <p className="text-base text-[#57534E] font-normal leading-[1.6]">
              Situated adjacent to Moses Mabhida Stadium in Durban, KwaZulu-Natal. The open-air manicured grounds accommodate 25,000+ patrons with unobstructed acoustic staging.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1C1917] font-display leading-snug">
              PRASA Transit Partnership
            </h3>
            <p className="text-base text-[#57534E] font-normal leading-[1.6]">
              Through the 2026 PRASA partnership, valid ticket holders traveled by commuter rail to and from the festival at no additional charge.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1C1917] font-display leading-snug">
              Strictly Pre-Sold Passes
            </h3>
            <p className="text-base text-[#57534E] font-normal leading-[1.6]">
              Impucuzeko reaches full capacity prior to event day. There are no gate ticket sales under any circumstance to ensure orderly precinct security.
            </p>
          </div>
        </div>

        {/* FAQs */}
        <div className="pt-16 sm:pt-20 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-8 text-[#1C1917] font-display leading-tight">
            Frequently Answered Questions
          </h2>

          <div className="divide-y divide-[#E7E5E4] border-y border-[#E7E5E4]">
            {EVENT_FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="py-6">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left flex justify-between items-center text-base sm:text-lg font-bold tracking-tight text-[#1C1917] hover:text-[#E36414] transition-colors font-display leading-snug"
                  >
                    <span>{faq.question}</span>
                    <span className="text-[#E36414] ml-4 text-xl font-bold">
                      {isOpen ? '—' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="mt-4 text-base text-[#57534E] font-normal leading-[1.6] animate-fade-in">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
