import React from 'react';
import { motion } from 'motion/react';
import { Story } from '../types';

interface StoriesSectionProps {
  stories: Story[];
  onViewAllStories?: () => void;
  onSelectStory?: (story: Story) => void;
}

export const StoriesSection: React.FC<StoriesSectionProps> = ({
  stories,
  onViewAllStories,
  onSelectStory
}) => {
  return (
    <section id="stories-editorial" className="relative py-12 sm:py-20 md:py-24 bg-gradient-to-b from-[#FAF6F0] via-[#FCFAF7] to-[#F5EFEB] text-[#1C1917] border-t border-amber-900/10 grain-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-10 pb-4 sm:pb-6 border-b border-amber-900/10"
        >
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1917] font-display">
              Stories & Journal
            </h2>
          </div>

          {onViewAllStories && (
            <button
              id="stories-view-all-btn"
              onClick={onViewAllStories}
              className="text-xs font-semibold text-[#E36414] hover:underline self-start md:self-auto cursor-pointer"
            >
              All News & Dispatches →
            </button>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {stories.slice(0, 2).map((story, idx) => (
            <motion.article
              key={story.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              onClick={() => onSelectStory ? onSelectStory(story) : onViewAllStories && onViewAllStories()}
              className="cursor-pointer group space-y-4"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#FAFAF8]">
                <img
                  src={story.coverImage}
                  alt={story.title}
                  className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-2">
                <div className="text-xs uppercase tracking-wider text-[#E36414] font-bold">
                  {story.category} • {story.publishedDate}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1C1917] group-hover:text-[#E36414] transition-colors leading-snug font-display">
                  {story.title}
                </h3>
                <p className="text-sm text-[#57534E] font-normal leading-[1.6] line-clamp-2 max-w-[65ch]">
                  {story.subtitle}
                </p>
                <div className="text-xs uppercase tracking-wider font-bold text-[#E36414] group-hover:underline pt-1 flex items-center gap-1">
                  <span>Read full dispatch</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
