import React from 'react';

interface IndidaneTributeProps {
  onReadMore?: () => void;
}

export const IndidaneTribute: React.FC<IndidaneTributeProps> = ({ onReadMore }) => {
  return (
    <section id="indidane-tribute-section" className="py-20 sm:py-24 lg:py-32 bg-[#FAFAF8] text-[#1C1917] border-t border-[#E7E5E4] grain-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#E36414] block">
              13th Annual Festival Legacy Tribute
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1917] leading-[1.1]">
              Remembering Indidane
            </h2>

            <p className="font-display text-base sm:text-lg text-[#B45309] font-medium leading-snug">
              A Legacy That Lives On in Every Maskandi Chord
            </p>

            <div className="space-y-4 text-base text-[#57534E] font-normal leading-[1.6] max-w-[65ch]">
              <p>
                During the 13th Annual Impucuzeko Maskandi Festival in 2026, the event paid tribute to the late Maskandi titan, Mtshengiseni “Indidane” Gcwensa.
              </p>
              <p>
                Indidane was one of the most prolific and influential figures in the history of traditional South African music. His virtuosic acoustic compositions, rapid picking technique, and searing poetic honesty transformed the genre and inspired an entire generation of performers.
              </p>
              <p>
                The festival honored his memory on the grand stage at Moses Mabhida People’s Park, acknowledging his foundational contribution to the sound and spirit of Maskandi.
              </p>
            </div>

            {onReadMore && (
              <div className="pt-2">
                <button
                  id="indidane-tribute-read-btn"
                  onClick={onReadMore}
                  className="inline-flex items-center text-xs uppercase tracking-wider font-semibold text-[#E36414] hover:underline pb-1 cursor-pointer"
                >
                  Read editorial retrospective →
                </button>
              </div>
            )}
          </div>

          {/* Portrait & Archival framing */}
          <div className="lg:col-span-5">
            <div className="border border-[#E7E5E4] p-4 bg-white shadow-sm">
              <div className="relative overflow-hidden aspect-[4/5] bg-[#FAFAF8]">
                <img
                  src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=900&q=80"
                  alt="Acoustic Guitar Tribute in Honour of Mtshengiseni Indidane Gcwensa"
                  className="w-full h-full object-cover object-center grayscale contrast-110"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="pt-4 pb-1 text-center">
                <p className="font-display text-base font-bold tracking-tight text-[#1C1917]">
                  Mtshengiseni “Indidane” Gcwensa
                </p>
                <p className="text-xs text-[#78716C] font-medium mt-0.5">
                  Maskandi Legend & Cultural Icon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
