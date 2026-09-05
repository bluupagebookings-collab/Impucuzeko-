import React from 'react';
import { motion } from 'motion/react';

interface SectionHeadingProps {
  title: string;
  description?: string;
  align?: 'left' | 'center';
  action?: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  description,
  align = 'left',
  action,
  className = '',
  dark = false
}) => {
  const centered = align === 'center';
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12 pb-5 sm:pb-7 border-b ${dark ? 'border-white/10' : 'border-amber-900/10'} ${className}`}
    >
      <div className={`space-y-3 ${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}`}>
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-display leading-[1.08]">
          {title}
        </h2>
        {description && (
          <p className={`text-sm sm:text-base md:text-lg font-normal leading-relaxed ${dark ? 'text-stone-300' : 'text-[#57534E]'}`}>
            {description}
          </p>
        )}
      </div>
      {action && (
        <div className="shrink-0 self-start md:self-auto">{action}</div>
      )}
    </motion.div>
  );
};
