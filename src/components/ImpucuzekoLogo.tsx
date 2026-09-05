import React, { useState } from 'react';

interface LogoProps {
  variant?: 'full' | 'compact' | 'badge' | 'text-only' | 'header-big';
  className?: string;
}

export const LOGO_URL = 'https://i.ibb.co/v68hjKTg/252072-removebg-preview.png';

export const ImpucuzekoLogo: React.FC<LogoProps> = ({ variant = 'full', className = '' }) => {
  const [imgError, setImgError] = useState(false);

  if (variant === 'header-big') {
    return (
      <div className={`flex items-center group select-none ${className}`}>
        <div className="relative shrink-0 h-14 sm:h-16 md:h-20 flex items-center justify-center">
          {!imgError ? (
            <img
              src={LOGO_URL}
              alt="Impucuzeko Maskandi Festival Logo"
              className="h-full w-auto max-h-14 sm:max-h-16 md:max-h-20 object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
              onError={() => setImgError(true)}
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-[#E36414]/20 border border-[#E5A93C] flex items-center justify-center text-[#E5A93C] font-normal text-sm">
              IMF
            </div>
          )}
        </div>
      </div>
    );
  }

  if (variant === 'text-only') {
    return (
      <div className={`flex flex-col ${className}`}>
        <span className="font-display text-xl sm:text-2xl font-bold tracking-[0.2em] text-[#1C1917] uppercase leading-none">
          IMPUCUZEKO
        </span>
        <span className="text-[10px] font-semibold tracking-[0.22em] text-[#B45309] uppercase mt-1">
          The Maskandi World Cup
        </span>
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-3.5 group select-none ${className}`}>
        <div className="relative shrink-0 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center">
          {!imgError ? (
            <img
              src={LOGO_URL}
              alt="Impucuzeko Maskandi Festival Logo"
              className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
              onError={() => setImgError(true)}
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-[#E36414]/15 border border-[#B45309] flex items-center justify-center text-[#B45309] font-bold text-xs">
              IMF
            </div>
          )}
        </div>

        <div className="flex flex-col leading-tight">
          <span className="text-base sm:text-lg font-bold tracking-[0.2em] text-[#1C1917] uppercase font-display">
            IMPUCUZEKO
          </span>
          <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.22em] text-[#B45309] uppercase">
            The Maskandi World Cup
          </span>
        </div>
      </div>
    );
  }

  // Default 'full' variant
  return (
    <div className={`flex items-center gap-4 group select-none ${className}`}>
      <div className="relative shrink-0 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
        {!imgError ? (
          <img
            src={LOGO_URL}
            alt="Impucuzeko Maskandi Festival Logo"
            className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
            onError={() => setImgError(true)}
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-[#E36414]/15 border border-[#B45309] flex items-center justify-center text-[#B45309] font-bold text-sm">
            IMF
          </div>
        )}
      </div>

      <div className="flex flex-col leading-tight">
        <span className="text-lg sm:text-xl font-bold tracking-[0.2em] text-[#1C1917] uppercase font-display">
          IMPUCUZEKO
        </span>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E36414]" />
          <span className="text-[10px] font-semibold tracking-[0.22em] text-[#B45309] uppercase">
            The Maskandi World Cup
          </span>
        </div>
      </div>
    </div>
  );
};
