import React, { useState } from 'react';
import { Story } from '../types';

interface StoriesViewProps {
  stories: Story[];
}

export const StoriesView: React.FC<StoriesViewProps> = ({ stories }) => {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  return (
    <div className="pt-20 sm:pt-28 pb-16 sm:pb-24 bg-[#FAFAF8] text-[#1C1917] min-h-screen grain-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-[#E7E5E4] pb-5 mb-6 sm:pb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#1C1917] font-display leading-[1.05]">
            Stories & Dispatches
          </h1>
          <p className="mt-2 sm:mt-4 text-sm sm:text-lg text-[#57534E] font-normal max-w-xl leading-[1.6]">
            In-depth dispatches, artist profiles, cultural analysis, and official announcements from the Impucuzeko archives.
          </p>
        </div>

        {/* Stories List */}
        <div className="space-y-8 sm:space-y-14">
          {stories.map((story) => (
            <article
              key={story.id}
              onClick={() => setSelectedStory(story)}
              className="cursor-pointer group grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-14 items-center border-b border-[#E7E5E4] pb-8 sm:pb-12"
            >
              <div className="lg:col-span-7 aspect-[16/10] overflow-hidden bg-[#FAFAF8]">
                <img
                  src={story.coverImage}
                  alt={story.title}
                  className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="lg:col-span-5 space-y-2.5 sm:space-y-4">
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1C1917] group-hover:text-[#E36414] transition-colors leading-[1.15] font-display">
                  {story.title}
                </h2>
                <p className="text-xs text-[#78716C]">
                  {story.category} • {story.publishedDate}
                </p>
                <p className="text-sm sm:text-base text-[#57534E] font-normal leading-[1.6] max-w-[65ch]">
                  {story.subtitle}
                </p>
                <div className="pt-1 sm:pt-2 text-xs font-semibold text-[#E36414] group-hover:underline">
                  Read full dispatch →
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Reader Modal */}
      {selectedStory && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={() => setSelectedStory(null)}
        >
          <div
            className="bg-white border border-[#E7E5E4] max-w-3xl w-full max-h-[90vh] overflow-y-auto text-[#1C1917] p-6 sm:p-12 space-y-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center border-b border-[#E7E5E4] pb-4 text-xs uppercase tracking-wider text-[#78716C]">
              <span>{selectedStory.category} • {selectedStory.publishedDate}</span>
              <button
                onClick={() => setSelectedStory(null)}
                className="text-[#1C1917] hover:text-[#E36414] transition-colors cursor-pointer"
              >
                Close [ESC]
              </button>
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1917] leading-[1.1] font-display">
                {selectedStory.title}
              </h2>
              <p className="text-base sm:text-lg text-[#E36414] font-medium leading-[1.5]">
                {selectedStory.subtitle}
              </p>
            </div>

            <div className="aspect-[16/9] overflow-hidden border border-[#E7E5E4]">
              <img
                src={selectedStory.coverImage}
                alt={selectedStory.title}
                className="w-full h-full object-cover object-center filter contrast-105"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-4 text-base text-[#57534E] font-normal leading-[1.7]">
              {selectedStory.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
