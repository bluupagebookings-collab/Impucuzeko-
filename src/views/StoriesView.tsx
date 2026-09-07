import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Clock, Calendar, MapPin, Share2, Check, BookOpen } from 'lucide-react';
import { Story } from '../types';

interface StoriesViewProps {
  stories: Story[];
  selectedStoryId?: string | null;
  onSelectStory?: (story: Story | null) => void;
  onNavigateHome?: () => void;
}

export const StoriesView: React.FC<StoriesViewProps> = ({
  stories,
  selectedStoryId,
  onSelectStory,
  onNavigateHome
}) => {
  const [activeStoryId, setActiveStoryId] = useState<string | null>(selectedStoryId || null);
  const [copied, setCopied] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    if (selectedStoryId !== undefined) {
      setActiveStoryId(selectedStoryId);
    }
  }, [selectedStoryId]);

  const activeStory = stories.find((s) => s.id === activeStoryId);

  const handleSelectStory = (story: Story | null) => {
    setActiveStoryId(story ? story.id : null);
    if (onSelectStory) {
      onSelectStory(story);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  // Filtered stories for index list
  const filteredStories = selectedCategory === 'all'
    ? stories
    : stories.filter((s) => s.category.toLowerCase() === selectedCategory.toLowerCase());

  // Other stories to display when reading an article
  const otherStories = activeStory
    ? stories.filter((s) => s.id !== activeStory.id)
    : [];

  const getReadTime = (story: Story) => {
    const totalWords = story.content.join(' ').split(/\s+/).length + story.title.split(/\s+/).length + story.subtitle.split(/\s+/).length;
    const minutes = Math.max(2, Math.ceil(totalWords / 130));
    return `${minutes} min read`;
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'tribute':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'partnership':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'heritage':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'review':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      default:
        return 'bg-stone-100 text-stone-800 border-stone-200';
    }
  };

  // ==========================================
  // DEDICATED ARTICLE READING PAGE
  // ==========================================
  if (activeStory) {
    return (
      <div className="pt-20 sm:pt-28 pb-20 sm:pb-32 bg-[#FAFAF8] text-[#1C1917] min-h-screen grain-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Editorial Breadcrumbs & Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 sm:pb-8 border-b border-[#E7E5E4] text-xs">
            <button
              onClick={() => handleSelectStory(null)}
              className="inline-flex items-center gap-2 font-semibold text-[#57534E] hover:text-[#E36414] transition-colors py-1.5 px-3 rounded-lg hover:bg-amber-900/5 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to all news & stories</span>
            </button>

            <div className="flex items-center gap-3">
              <span className="hidden sm:inline text-[#A8A29E]">|</span>
              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 font-medium text-[#57534E] hover:text-[#E36414] transition-colors py-1 px-2.5 rounded-md hover:bg-amber-900/5 cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share Article</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Article Header */}
          <header className="mt-8 sm:mt-12 space-y-4 sm:space-y-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className={`text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-full border ${getCategoryColor(activeStory.category)}`}>
                {activeStory.category}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-[#78716C] font-medium">
                <Clock className="w-3.5 h-3.5" />
                {getReadTime(activeStory)}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1917] font-display leading-[1.08]">
              {activeStory.title}
            </h1>

            <p className="text-lg sm:text-2xl text-[#57534E] leading-relaxed font-normal pt-1">
              {activeStory.subtitle}
            </p>

            {/* Author & Byline Metadata Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-[#E7E5E4] text-xs text-[#78716C]">
              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-amber-900/10 flex items-center justify-center text-[#E36414] font-bold text-xs">
                    IM
                  </div>
                  <div>
                    <span className="font-semibold text-[#1C1917] block">
                      {activeStory.author || 'Impucuzeko Media Desk'}
                    </span>
                    <span className="text-[11px] text-[#78716C]">Festival Editorial Archive</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#A8A29E]" />
                  <span>{activeStory.publishedDate}</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] text-[#A8A29E]">
                <MapPin className="w-3.5 h-3.5 text-[#E36414]" />
                <span>Moses Mabhida People’s Park, Durban</span>
              </div>
            </div>
          </header>

          {/* Featured Full Cover Image */}
          <div className="my-8 sm:my-12">
            <div className="aspect-[16/9] sm:aspect-[21/10] w-full overflow-hidden border border-amber-900/15 bg-[#E7E5E4]">
              <img
                src={activeStory.coverImage}
                alt={activeStory.title}
                className="w-full h-full object-cover object-center filter contrast-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="mt-2.5 text-xs text-[#78716C] text-center italic">
              Archival documentation from the 13th Annual Impucuzeko Maskandi Festival.
            </p>
          </div>

          {/* Article Main Body */}
          <article className="max-w-[70ch] mx-auto space-y-6 text-[#292524] text-lg sm:text-xl leading-[1.85] font-normal">
            {activeStory.content.map((paragraph, idx) => (
              <React.Fragment key={idx}>
                <p className={idx === 0 ? "first-letter:text-5xl first-letter:font-bold first-letter:font-display first-letter:mr-2.5 first-letter:float-left first-letter:text-[#1C1917] leading-[1.85]" : ""}>
                  {paragraph}
                </p>

                {/* Inset Pull Quote halfway through the story */}
                {idx === 1 && (
                  <div className="my-8 p-6 sm:p-8 bg-gradient-to-br from-[#FAF6F0] to-[#FFFDF9] rounded-2xl border-l-4 border-[#E36414] shadow-xs">
                    <p className="text-xl sm:text-2xl font-bold font-display text-[#1C1917] italic leading-snug">
                      "{activeStory.subtitle}"
                    </p>
                    <span className="block mt-3 text-xs uppercase tracking-wider font-semibold text-[#E36414]">
                      — Impucuzeko Official Chronicle
                    </span>
                  </div>
                )}
              </React.Fragment>
            ))}

            {/* Official Archival Sign-off */}
            <div className="mt-12 pt-8 border-t border-[#E7E5E4] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#78716C]">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#E36414]" />
                <span>Verified Historical Record • Impucuzeko Maskandi Festival</span>
              </div>
              <span className="text-[11px] text-[#A8A29E]">Durban, KwaZulu-Natal, South Africa</span>
            </div>
          </article>

          {/* ========================================================= */}
          {/* "SEE OTHER ARTICLES AS WELL" SECTION (Crucial user request) */}
          {/* ========================================================= */}
          {otherStories.length > 0 && (
            <section className="mt-16 sm:mt-24 pt-12 sm:pt-16 border-t-2 border-[#E7E5E4]">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 sm:mb-10">
                <div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1C1917] font-display">
                    Other Articles to Read
                  </h2>
                  <p className="mt-1 text-sm text-[#57534E]">
                    Continue exploring official dispatches, artist tributes, and festival heritage.
                  </p>
                </div>
                <button
                  onClick={() => handleSelectStory(null)}
                  className="text-xs font-bold uppercase tracking-wider text-[#E36414] hover:underline inline-flex items-center gap-1 self-start sm:self-auto cursor-pointer"
                >
                  <span>View All Stories</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Grid of Other Articles */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {otherStories.map((story) => (
                  <div
                    key={story.id}
                    onClick={() => handleSelectStory(story)}
                    className="group cursor-pointer flex flex-col bg-white border border-amber-900/15 overflow-hidden hover:border-amber-900/35 transition-colors"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-[#FAFAF8]">
                      <img
                        src={story.coverImage}
                        alt={story.title}
                        className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1 justify-between space-y-3">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-[11px] text-[#78716C]">
                          <span className={`font-semibold uppercase tracking-wider px-2 py-0.5 rounded ${getCategoryColor(story.category)}`}>
                            {story.category}
                          </span>
                          <span>{story.publishedDate}</span>
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-[#1C1917] font-display group-hover:text-[#E36414] transition-colors leading-snug line-clamp-2">
                          {story.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#57534E] line-clamp-2 leading-relaxed">
                          {story.subtitle}
                        </p>
                      </div>

                      {/* Explicit Read Article Button */}
                      <div className="pt-2 border-t border-[#F5F5F4] flex items-center justify-between">
                        <span className="text-xs font-bold text-[#E36414] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                          Read Article <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                        <span className="text-[11px] text-[#A8A29E]">{getReadTime(story)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>
      </div>
    );
  }

  // ==========================================
  // ALL STORIES & NEWS DIRECTORY (NO ARTICLE SELECTED)
  // ==========================================
  const categories = [
    { id: 'all', label: 'All Dispatches' },
    { id: 'tribute', label: 'Tributes' },
    { id: 'partnership', label: 'Partnerships' },
    { id: 'heritage', label: 'Heritage & History' },
    { id: 'review', label: 'Reviews & Commerce' }
  ];

  return (
    <div className="pt-20 sm:pt-28 pb-16 sm:pb-24 bg-[#FAFAF8] text-[#1C1917] min-h-screen grain-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="border-b border-[#E7E5E4] pb-6 sm:pb-10 mb-8 sm:mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2 sm:space-y-4 max-w-3xl">
              <span className="text-xs uppercase tracking-widest text-[#E36414] font-bold">
                The Impucuzeko Chronicle
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#1C1917] font-display leading-[1.05]">
                Stories & Dispatches
              </h1>
              <p className="text-sm sm:text-lg text-[#57534E] font-normal max-w-2xl leading-[1.6]">
                Official journalism, artist profiles, cultural analysis, transit reports, and historical reflections from the Impucuzeko archives.
              </p>
            </div>

            {onNavigateHome && (
              <button
                onClick={onNavigateHome}
                className="text-xs font-semibold text-[#57534E] hover:text-[#E36414] inline-flex items-center gap-1.5 cursor-pointer self-start md:self-auto"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Festival Home</span>
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#E36414] text-white shadow-xs'
                    : 'bg-white text-[#57534E] border border-amber-900/10 hover:border-amber-900/30 hover:text-[#1C1917]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Top Article */}
        {filteredStories.length > 0 && (
          <div className="mb-12 sm:mb-16">
            <div
              onClick={() => handleSelectStory(filteredStories[0])}
              className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center bg-white border border-amber-900/15 p-5 sm:p-8 hover:border-amber-900/35 transition-colors"
            >
              <div className="lg:col-span-7 aspect-[16/10] overflow-hidden bg-[#FAFAF8] border border-amber-900/10">
                <img
                  src={filteredStories[0].coverImage}
                  alt={filteredStories[0].title}
                  className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="lg:col-span-5 space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2">
                  <span className={`text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded ${getCategoryColor(filteredStories[0].category)}`}>
                    {filteredStories[0].category}
                  </span>
                  <span className="text-xs text-[#78716C]">• {filteredStories[0].publishedDate}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1C1917] group-hover:text-[#E36414] transition-colors leading-[1.15] font-display">
                  {filteredStories[0].title}
                </h2>

                <p className="text-sm sm:text-base text-[#57534E] font-normal leading-[1.6]">
                  {filteredStories[0].subtitle}
                </p>

                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 bg-[#E36414] text-white px-4 py-2 text-xs sm:text-sm font-semibold group-hover:bg-[#C9530C] transition-colors shadow-xs">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredStories.slice(1).map((story) => (
            <article
              key={story.id}
              onClick={() => handleSelectStory(story)}
              className="group cursor-pointer flex flex-col bg-white border border-amber-900/15 overflow-hidden hover:border-amber-900/35 transition-colors"
            >
              <div className="aspect-[16/10] overflow-hidden bg-[#FAFAF8]">
                <img
                  src={story.coverImage}
                  alt={story.title}
                  className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-[#78716C]">
                    <span className={`font-semibold uppercase tracking-wider px-2 py-0.5 rounded text-[10px] ${getCategoryColor(story.category)}`}>
                      {story.category}
                    </span>
                    <span>{story.publishedDate}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#1C1917] group-hover:text-[#E36414] transition-colors leading-[1.25] font-display line-clamp-2">
                    {story.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#57534E] font-normal leading-[1.6] line-clamp-3">
                    {story.subtitle}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F5F5F4] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#E36414] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[11px] text-[#A8A29E]">{getReadTime(story)}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
};
