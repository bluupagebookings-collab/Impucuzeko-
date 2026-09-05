import React from 'react';
import { motion } from 'motion/react';

interface PortraitCardProps {
  name: string;
  role: string;
  note?: string;
  image?: string;
}

/**
 * A person block: portrait (or warm placeholder with initials), name, role.
 * Designed so real photos can be dropped in later by passing `image`.
 */
export const PortraitCard: React.FC<PortraitCardProps> = ({ name, role, note, image }) => {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-[#E7DDD3] via-[#DCC9B8] to-[#C9A98E]">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-top"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl sm:text-5xl font-bold text-white/70 font-display tracking-tight select-none">
              {initials}
            </span>
          </div>
        )}
      </div>
      <h4 className="mt-3 text-base sm:text-lg font-bold tracking-tight text-[#1C1917] font-display leading-tight">
        {name}
      </h4>
      <p className="text-xs font-semibold text-[#E36414] mt-0.5">{role}</p>
      {note && (
        <p className="text-xs text-[#78716C] leading-relaxed mt-1.5">{note}</p>
      )}
    </motion.div>
  );
};
