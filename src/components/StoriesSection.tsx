import React from 'react';
import { motion } from 'motion/react';
import { Story } from '../types';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';

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
        <SectionHeading
          title="Stories & Journal"
          action={onViewAllStories ? (
            <Button variant="link" arrow onClick={onViewAllStories}>
              All News & Dispatches
            </Button>
          ) : undefined}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {stories.slice(0, 2).map((story, idx) => (
            <motion.article
              key={story.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              onClick={(e) => {
                e.preventDefault();
                if (onSelectStory) {
                  onSelectStory(story);
                } else if (onViewAllStories) {
                  onViewAllStories();
                }
              }}
              className="cursor-pointer group space-y-4"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#FAFAF8] border border-amber-900/15 group-hover:border-amber-900/35 transition-colors">
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
                  <span>Read Article</span>
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
