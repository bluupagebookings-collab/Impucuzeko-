export type FestivalStatus = 'completed' | 'upcoming' | 'postponed';
export type TicketStatus = 'sold_out' | 'coming_soon' | 'on_sale' | 'closed';

export interface Artist {
  id: string;
  name: string;
  category: 'headliner' | 'main_lineup' | 'featured' | 'legend' | 'honouree';
  isFeatured: boolean;
  yearsPerformed: number[];
  bio: string;
  origin?: string;
  soundDescription?: string;
  knownFor?: string;
  image: string;
  socials?: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    spotify?: string;
  };
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'artists' | 'crowd' | 'backstage' | 'train' | 'venue' | 'history';
  year: number;
  url: string;
  caption?: string;
  credit?: string;
  aspect?: 'landscape' | 'portrait' | 'square' | 'wide';
}

export interface Story {
  id: string;
  title: string;
  subtitle: string;
  publishedDate: string;
  author?: string;
  category: 'heritage' | 'partnership' | 'review' | 'tribute' | 'announcement';
  coverImage: string;
  content: string[];
  featured?: boolean;
}

export interface FestivalEdition {
  year: number;
  editionNumber: number;
  editionName: string;
  date: string;
  venue: string;
  city: string;
  status: FestivalStatus;
  ticketStatus: TicketStatus;
  ticketPriceNote?: string;
  ticketUrl?: string;
  crowdEstimate: string;
  heroTagline: string;
  highlightSummary: string;
  honouree?: string;
  keyMoments: string[];
}

export interface Partner {
  id?: string;
  name: string;
  role: string;
  category: 'transport' | 'media' | 'public_sector' | 'cultural' | string;
  description: string;
  logoText?: string;
  badge?: string;
}

export interface VendorCategory {
  id: string;
  title: string;
  description: string;
  examples: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: 'venue' | 'transport' | 'tickets' | 'safety' | string;
}

export interface Organiser {
  name: string;
  role: string;
  note?: string;
  bio?: string;
}
