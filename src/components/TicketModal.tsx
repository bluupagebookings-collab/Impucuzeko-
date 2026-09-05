import React, { useState } from 'react';
import { FestivalEdition } from '../types';

interface TicketModalProps {
  festival: FestivalEdition;
  isOpen: boolean;
  onClose: () => void;
}

export const TicketModal: React.FC<TicketModalProps> = ({ festival, isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const isSoldOut = festival.ticketStatus === 'sold_out';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white border border-[#E7E5E4] max-w-lg w-full text-[#1C1917] p-6 sm:p-10 space-y-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b border-[#E7E5E4] pb-4 text-xs uppercase tracking-wider text-[#78716C]">
          <span>Official Ticket Allocations</span>
          <button
            onClick={onClose}
            className="text-[#1C1917] hover:text-[#E36414] transition-colors cursor-pointer"
          >
            Close [ESC]
          </button>
        </div>

        <div className="space-y-1">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1C1917] font-display">
            {isSoldOut ? 'Capacity Reached' : 'Festival Passes'}
          </h2>
          <p className="text-xs text-[#78716C] font-normal">
            {festival.editionName} • {festival.date} • {festival.venue}
          </p>
        </div>

        {isSoldOut ? (
          <div className="space-y-6 border-t border-[#E7E5E4] pt-6">
            <p className="text-sm text-[#57534E] font-normal leading-[1.6]">
              Official ticket allocations for the 13th Annual Impucuzeko Maskandi Festival have officially reached full capacity. No further passes are available for general sale.
            </p>

            {submitted ? (
              <div className="p-4 border border-[#E7E5E4] bg-[#FAFAF8] text-xs text-[#1C1917] space-y-1">
                <div className="text-[#E36414] font-bold">Priority List Confirmed</div>
                <p className="text-[#78716C]">You will be notified immediately when early passes for the upcoming 14th edition are released.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3 pt-2">
                <label className="text-xs uppercase tracking-wider text-[#78716C] block font-semibold">
                  Get priority notice for next edition
                </label>
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-white border border-[#E7E5E4] px-3.5 py-2.5 text-xs text-[#1C1917] focus:outline-none focus:border-[#E36414]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#E36414] hover:bg-[#BF4A04] text-white text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 shadow-sm cursor-pointer"
                  >
                    Register
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          <div className="space-y-6 border-t border-[#E7E5E4] pt-6">
            <p className="text-sm text-[#57534E] font-normal leading-[1.6]">
              Admission passes are available through official authorized outlets.
            </p>
            <button
              onClick={() => window.open('https://computicket.com', '_blank')}
              className="w-full py-3.5 bg-[#E36414] hover:bg-[#BF4A04] text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
            >
              Purchase via Computicket
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
