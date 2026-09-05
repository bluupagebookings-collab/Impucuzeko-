import React from 'react';
import { ImpucuzekoLogo } from './ImpucuzekoLogo';

interface FooterProps {
  onNavigate: (view: string) => void;
  onOpenCMS: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCMS }) => {
  return (
    <footer className="bg-[#1C1917] text-white border-t border-[#292524] py-10 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-14 border-b border-[#292524]">
          <div className="lg:col-span-5 space-y-4">
            <div className="cursor-pointer" onClick={() => onNavigate('home')}>
              <ImpucuzekoLogo variant="compact" />
            </div>
            <p className="text-sm text-[#A8A29E] font-normal max-w-md leading-[1.6]">
              The official digital sanctuary and archive of Impucuzeko Maskandi Festival — &ldquo;The Maskandi World Cup&rdquo;. Moses Mabhida People’s Park, Durban, KwaZulu-Natal.
            </p>
            <div className="space-y-1 pt-2">
              <span className="text-xs uppercase tracking-wider text-[#E36414] font-semibold block">
                Executive Festival Direction
              </span>
              <p className="text-xs text-[#78716C]">
                Xolani Mcineka, Sandile Ndlanya & Tshatha Ngobe
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#E36414] font-semibold block">
              Experience
            </span>
            <div className="flex flex-col space-y-2 text-sm text-[#A8A29E]">
              <button
                onClick={() => onNavigate('home')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Festival Overview
              </button>
              <button
                onClick={() => onNavigate('artists')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Artists & Lineup
              </button>
              <button
                onClick={() => onNavigate('archive')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Festival History & Archive
              </button>
              <button
                onClick={() => onNavigate('gallery')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Documentary Gallery
              </button>
              <button
                onClick={() => onNavigate('stories')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Cultural Chronicle
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs uppercase tracking-wider text-[#E36414] font-semibold block">
              Practical & Portal
            </span>
            <div className="flex flex-col space-y-2 text-sm text-[#A8A29E]">
              <button
                onClick={() => onNavigate('information')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Venue Information & Rules
              </button>
              <button
                onClick={() => onNavigate('vendors')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Vendor Registrations
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="text-left hover:text-white transition-colors cursor-pointer"
              >
                Press & Official Contacts
              </button>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenCMS}
                className="px-4 py-2 border border-[#44403C] hover:border-[#E36414] text-xs text-[#A8A29E] hover:text-white uppercase tracking-wider transition-colors cursor-pointer"
              >
                Organiser Portal
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#78716C] font-normal gap-4">
          <p>© 2026 Impucuzeko Maskandi Festival. All rights reserved.</p>
          <p>Moses Mabhida People&apos;s Park • Durban, KwaZulu-Natal</p>
        </div>
      </div>
    </footer>
  );
};
