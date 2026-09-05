import React from 'react';
import { motion } from 'motion/react';

type Variant = 'primary' | 'dark' | 'outline' | 'link';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
  type?: 'button' | 'submit';
  ariaLabel?: string;
  fullWidth?: boolean;
}

const base =
  'inline-flex items-center justify-center gap-2 font-semibold uppercase tracking-[0.12em] cursor-pointer select-none';

const variants: Record<Variant, string> = {
  primary: 'px-7 sm:px-10 py-3 sm:py-3.5 text-xs sm:text-sm bg-[#E36414] text-white',
  dark: 'px-5 py-2.5 text-xs bg-[#1C1917] text-white',
  outline: 'px-5 py-2.5 text-xs border border-[#E7E5E4] text-[#1C1917]',
  link: 'text-xs font-semibold text-[#E36414]'
};

/**
 * Animated button: lifts with a soft shadow on hover, settles on tap,
 * and slides its trailing arrow when `arrow` is set.
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  arrow = false,
  type = 'button',
  ariaLabel,
  fullWidth = false
}) => {
  const isLink = variant === 'link';
  return (
    <motion.button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      whileHover={isLink ? { x: 3 } : { y: -2, boxShadow: '0 10px 28px rgba(227,100,20,0.28)' }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      className={`${base} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      <span>{children}</span>
      {arrow && (
        <motion.span
          className="text-base leading-none"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          ›
        </motion.span>
      )}
    </motion.button>
  );
};
