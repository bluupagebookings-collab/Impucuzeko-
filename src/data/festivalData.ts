import { FestivalEdition, Artist, GalleryImage, Story, Partner, VendorCategory, FaqItem } from '../types';

export const INITIAL_CURRENT_FESTIVAL: FestivalEdition = {
  year: 2026,
  editionNumber: 13,
  editionName: '13th Annual Impucuzeko Maskandi Festival',
  date: '29 August 2026',
  venue: "Moses Mabhida People's Park",
  city: 'Durban, KwaZulu-Natal',
  status: 'completed',
  ticketStatus: 'sold_out',
  ticketPriceNote: 'Admission strictly via official ticketing outlets. Sold out.',
  crowdEstimate: '25,000+ Maskandi devotees',
  heroTagline: 'THE MASKANDI WORLD CUP',
  highlightSummary: "Impucuzeko Maskandi Festival is South Africa's premier maskandi music gathering, nicknamed 'the Maskandi World Cup' by fans. The sold-out 13th edition at Moses Mabhida People's Park paid tribute to Sicebi 'Inkosi Yamagcokama' Dlamini.",
  honouree: 'Sicebi "Inkosi Yamagcokama" Dlamini',
  keyMoments: [
    "Sold-out capacity attendance of over 25,000 at Moses Mabhida People's Park",
    "Landmark PRASA partnership providing free People's Train (#IsitimelaSabantu) transit for ticket holders",
    "Tribute honouring Sicebi 'Inkosi Yamagcokama' Dlamini in memoriam",
    'Over 19 headline and master ensemble Maskandi performances on the grand stage',
    'Support for over 50 local SMME traders, traditional artisans, and food vendors'
  ]
};

export const FESTIVAL_ORGANISERS = [
  {
    name: 'Xolani Mcineka',
    role: 'Festival Co-Founder & Director',
    note: 'Co-organiser steering Impucuzeko from its origins at Curries Fountain to Moses Mabhida People’s Park.',
    bio: 'Co-organiser steering Impucuzeko from its origins at Curries Fountain to Moses Mabhida People’s Park.'
  },
  {
    name: 'Sandile Ndlanya',
    role: 'Festival Co-Founder & Director',
    note: 'Co-organiser and cultural producer overseeing talent, logistics, and heritage preservation for the festival.',
    bio: 'Co-organiser and cultural producer overseeing talent, logistics, and heritage preservation for the festival.'
  },
  {
    name: 'Tshatha Ngobe',
    role: 'Festival Co-Director & Cultural Patron',
    note: 'Ukhozi FM broadcaster, cultural champion, and co-director championing the Maskandi World Cup.',
    bio: 'Renowned Ukhozi FM broadcaster, cultural champion, and festival co-director.'
  }
];

export const HISTORICAL_EDITIONS: FestivalEdition[] = [
  {
    year: 2026,
    editionNumber: 13,
    editionName: '13th Annual Impucuzeko Maskandi Festival',
    date: '29 August 2026',
    venue: "Moses Mabhida People's Park",
    city: 'Durban',
    status: 'completed',
    ticketStatus: 'sold_out',
    crowdEstimate: '25,000+',
    heroTagline: 'The Maskandi World Cup',
    highlightSummary: "A completely sold-out 13th edition featuring the historic PRASA People's Train (#IsitimelaSabantu) activation and the tribute honouring Sicebi 'Inkosi Yamagcokama' Dlamini in memoriam.",
    honouree: 'Sicebi "Inkosi Yamagcokama" Dlamini',
    keyMoments: ['Sold out crowd', "PRASA People's Train partnership", 'Honouring Sicebi "Inkosi Yamagcokama" Dlamini']
  },
  {
    year: 2025,
    editionNumber: 12,
    editionName: '12th Annual Impucuzeko Maskandi Festival',
    date: 'August 2025',
    venue: "Moses Mabhida People's Park",
    city: 'Durban',
    status: 'completed',
    ticketStatus: 'sold_out',
    crowdEstimate: '25,000+',
    heroTagline: 'The Maskandi World Cup',
    highlightSummary: 'Celebration of intergenerational Maskandi excellence with record attendance across KwaZulu-Natal and Gauteng branches.',
    keyMoments: ['Full capacity at People’s Park', 'Showcase of traditional attire and acoustic guitar duels']
  },
  {
    year: 2024,
    editionNumber: 11,
    editionName: '11th Annual Impucuzeko Maskandi Festival',
    date: 'August 2024',
    venue: "Moses Mabhida People's Park",
    city: 'Durban',
    status: 'completed',
    ticketStatus: 'sold_out',
    crowdEstimate: '25,000+',
    heroTagline: 'The Maskandi World Cup',
    highlightSummary: 'A milestone 11th edition marking uninterrupted cultural vitality and massive audience solidarity.',
    keyMoments: ['National broadcast coverage', 'Comprehensive youth Maskandi segment']
  },
  {
    year: 2016,
    editionNumber: 5,
    editionName: '5th Annual Impucuzeko Maskandi Festival',
    date: '2016',
    venue: 'Curries Fountain / Durban',
    city: 'Durban',
    status: 'completed',
    ticketStatus: 'sold_out',
    crowdEstimate: 'Overflowing capacity',
    heroTagline: 'The Maskandi World Cup',
    highlightSummary: 'The historic 5th edition where national media and legions of devoted fans universally cemented the festival as "The World Cup of Maskandi".',
    keyMoments: ['Official popularization of "The Maskandi World Cup" title', 'Groundwork for venue transition to Moses Mabhida precinct']
  },
  {
    year: 2012,
    editionNumber: 1,
    editionName: '1st Annual Impucuzeko Maskandi Festival',
    date: '2012',
    venue: 'Curries Fountain',
    city: 'Durban',
    status: 'completed',
    ticketStatus: 'sold_out',
    crowdEstimate: 'Inaugural audience',
    heroTagline: 'Umcimbi WeMaskandi',
    highlightSummary: 'Founded by Xolani Mcineka and Sandile Ndlanya to create an unapologetic, world-class stage dedicated purely to authentic Maskandi music.',
    keyMoments: ['Inaugural gathering at Curries Fountain', 'Foundation for a national cultural institution']
  }
];

export const INITIAL_ARTISTS: Artist[] = [
  {
    id: 'sicebi-inkosi-yamagcokama-dlamini',
    name: 'Sicebi "Inkosi Yamagcokama" Dlamini',
    category: 'honouree',
    isFeatured: true,
    yearsPerformed: [2026],
    origin: 'Msinga, KwaZulu-Natal',
    soundDescription: '2026 Festival Honouree commemorated in memoriam for his enduring cultural legacy.',
    knownFor: '2023 SATMA Best Maskandi winner, known for "Kuyanzenzakalela" and his deep Msinga heritage',
    bio: 'Sicebi "Inkosi Yamagcokama" Dlamini was one of Maskandi’s most beloved young artists. Born in Msinga, KwaZulu-Natal, he won Best Maskandi at the 2023 South African Traditional Music Awards (SATMA). At the 13th Annual Impucuzeko Maskandi Festival, fellow musicians, collaborators, and community members from his home area took to the stage to celebrate his life and perform his music in his memory.',
    image: 'https://i.ibb.co/4nfFc3TJ/1788561661417.jpg',
    socials: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 'khuzani',
    name: 'Khuzani',
    category: 'headliner',
    isFeatured: true,
    yearsPerformed: [2026, 2025, 2024, 2016],
    origin: 'Nkandla, KwaZulu-Natal',
    soundDescription: 'Fast-tempo, driving acoustic guitar with booming, authoritative vocals and massive stadium choruses.',
    knownFor: 'High-octane vocal delivery, record-breaking concert turnouts, and anthemic songcraft',
    bio: 'Known across South Africa as "Indlamlenze", Khuzani Mpungose from Nkandla is a reigning giant of modern Maskandi. Famous for filling stadiums and commanding the devoted "Blue Nation" fan base, his energetic stage presence and anthems like "Iskhova" have earned him countless music awards.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=80',
    socials: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 'ntencane',
    name: 'Ntencane',
    category: 'headliner',
    isFeatured: true,
    yearsPerformed: [2026, 2025, 2024],
    origin: 'Nongoma, KwaZulu-Natal',
    soundDescription: 'Smooth and sweet acoustic melodies, heartfelt singing, and rich traditional vocal harmonies with modern appeal.',
    knownFor: 'Emotive lyricism, crossover appeal, and heartfelt traditional harmonies',
    bio: 'Senzo "Ntencane" Zondi from Nongoma made history when his song "Wawuthembeni" crossed over into mainstream South African radio to win SAMA Song of the Year. He is admired for his tender love ballads, poetic lyricism, and seamless blend of traditional and modern sounds.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80',
    socials: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 'gatsheni',
    name: 'Gatsheni',
    category: 'main_lineup',
    isFeatured: true,
    yearsPerformed: [2026, 2025],
    origin: 'Phongolo, KwaZulu-Natal',
    soundDescription: 'Deep, resonant acoustic basslines and gravelly, powerful vocals that tell real stories of working-class life.',
    knownFor: 'Unflinching narrative depth and commanding stage presence',
    bio: 'Zwelivelile Ntombela, known as Gatsheni, hails from Phongolo in northern KwaZulu-Natal. He has become one of Maskandi’s most respected voices through songs that speak honestly about the struggles of migrant workers, rural poverty, and family perseverance, backed by heavy rhythmic grooves.',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=80',
    socials: {
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 'dumakahle',
    name: 'Dumakahle',
    category: 'headliner',
    isFeatured: true,
    yearsPerformed: [2026, 2025, 2024],
    origin: 'KwaZulu-Natal',
    soundDescription: 'Brisk acoustic guitar strumming and punchy rhythms with direct, honest lyrics about youth struggles and everyday reality.',
    knownFor: 'Punchy acoustic picking and relatable youth anthems including "Life after matric"',
    bio: 'Mpilo Seluleko Nkosi, known on stage as Dumakahle, is a prominent Maskandi voice who connects deeply with young listeners. His tracks, such as "Life after matric" and "Ukuhlanya Ngenqondo", address the real-life choices and struggles facing youth, performed with sharp acoustic technique and relentless stage energy.',
    image: 'https://images.unsplash.com/photo-1520523839898-5071282543e1?auto=format&fit=crop&w=1000&q=80',
    socials: {
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 'shwi-nomtekhala',
    name: 'Shwi NoMtekhala',
    category: 'legend',
    isFeatured: true,
    yearsPerformed: [2026, 2025, 2016],
    origin: 'Msinga, KwaZulu-Natal',
    soundDescription: 'Soulful, gentle acoustic guitar rhythms with spiritual two-part harmonies and poetic folk wisdom.',
    knownFor: 'Multi-platinum folk-maskandi arrangements and the record-breaking classic "Wangisiza Baba"',
    bio: 'Formed by childhood friends Mandla Xaba ("Shwi") and Zwelenduna Rodgers Magubane ("Mtekhala") from Msinga, this legendary duo revolutionized South African music in 2004 with their album "Wangisiza Baba", which sold over 500,000 copies. Their peaceful, spiritual harmonies remain a cornerstone of African folk music.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80',
    socials: {
      facebook: 'https://facebook.com'
    }
  },
  {
    id: 'mdumazi',
    name: 'Mdumazi',
    category: 'main_lineup',
    isFeatured: true,
    yearsPerformed: [2026, 2025],
    origin: 'Mhlabuyalingana, KwaZulu-Natal',
    soundDescription: 'Intricate, clean acoustic fingerpicking patterns paired with thoughtful, conversational vocal phrasing.',
    knownFor: 'Exquisite acoustic picking technique and reflective songs about Zulu family values',
    bio: 'Mxolisi Mhlongo, known professionally as Mdumazi, comes from Mhlabuyalingana in northern KwaZulu-Natal. Revering the classical purity of the Zulu acoustic guitar, he is widely praised by Maskandi purists for his calm stage presence, complex chord phrasing, and songs about morality and community pride.',
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1000&q=80',
    socials: {
      facebook: 'https://facebook.com'
    }
  },
  {
    id: 'izingane-zoma',
    name: 'Izingane ZoMa',
    category: 'legend',
    isFeatured: true,
    yearsPerformed: [2026, 2024],
    origin: 'Nquthu, KwaZulu-Natal',
    soundDescription: 'Harmonious all-women chorus singing, traditional call-and-response chants, and steady acoustic percussion.',
    knownFor: 'Fearless political and social commentary, multi-platinum albums, and pioneering women leadership in Maskandi',
    bio: 'Formed in Nquthu in 1993, Izingane ZoMa is South Africa’s most famous all-women Maskandi group. Led for decades by Khulekani Khuzwayo, their bold lyrics have tackled national politics, corruption, HIV awareness, and community justice, earning multiple platinum awards and legendary cultural status.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80',
    socials: {
      facebook: 'https://facebook.com'
    }
  },
  {
    id: 'limit',
    name: 'Limit',
    category: 'main_lineup',
    isFeatured: false,
    yearsPerformed: [2026],
    origin: 'Nkandla, KwaZulu-Natal',
    soundDescription: 'Fast-paced, aggressive acoustic guitar picking combined with rapid praise poetry (izibongo) and energetic dance.',
    knownFor: 'Rapid-fire poetic izibongo and dynamic stage movements',
    bio: 'Limit Ivelamumva Nala from KwaNxamalala in Nkandla is renowned for electric stage energy. He delivers rapid-fire praise poetry while dancing with lightning speed, turning every festival performance into a showcase of traditional warrior spirit and musical endurance.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'falabo',
    name: 'Falabo',
    category: 'main_lineup',
    isFeatured: false,
    yearsPerformed: [2026],
    origin: 'Nquthu, KwaZulu-Natal',
    soundDescription: 'Ultra-fast, delicate thumb-and-finger picking technique ("Magic Fingers") with warm, classic acoustic grooves.',
    knownFor: 'Masterful guitar picking dexterity earning him the nickname "Magic Fingers"',
    bio: 'Nicknamed "Magic Fingers" by Maskandi devotees, Falabo hails from Nquthu. He is widely recognized as one of the most technically gifted guitarists in the genre, creating complex melodic patterns that sound like multiple instruments playing at once.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'menzi',
    name: 'Menzi',
    category: 'main_lineup',
    isFeatured: false,
    yearsPerformed: [2026],
    origin: 'Pietermaritzburg, KwaZulu-Natal',
    soundDescription: 'Joyful, uptempo acoustic guitar progressions with uplifting choruses and infectious rhythm arrangements.',
    knownFor: 'High-energy choruses and spirited rhythm arrangements',
    bio: 'Menzi Msawenkosi Majola was born in Pietermaritzburg and has earned a strong reputation for his energetic live band arrangements. His music carries themes of hope, resilience, and brotherhood, consistently moving stadium crowds to dance and sing along.',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'imfezi',
    name: 'Imfezi',
    category: 'main_lineup',
    isFeatured: false,
    yearsPerformed: [2026],
    origin: 'Nquthu, KwaZulu-Natal',
    soundDescription: 'Modern, punchy acoustic guitar melodies with smooth vocal phrasing and catchy contemporary hooks.',
    knownFor: 'Distinctive voice, Amabunjwa sound, and relatable modern Zulu lyricism',
    bio: 'Phumlani Khumalo, popularly known as Imfezemnyama, comes from Nquthu. As a prolific composer and studio head of Amabunjwa Records, he is famous for bringing a crisp, modern feel to traditional Maskandi guitar lines, making the genre popular among younger urban and rural generations alike.',
    image: 'https://images.unsplash.com/photo-1520523839898-5071282543e1?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'jaiva-zimnike',
    name: 'Jaiva Zimnike',
    category: 'main_lineup',
    isFeatured: false,
    yearsPerformed: [2026],
    origin: 'Nquthu, KwaZulu-Natal',
    soundDescription: 'Celebratory, up-tempo party grooves with infectious call-and-response crowd chants.',
    knownFor: 'Festive crowd-rousing chants and signature rhythmic breakdowns',
    bio: 'Jaiva Zimnike is celebrated for his vibrant party atmosphere and crowd control. His songs are tailored for massive festival singalongs, with driving bass notes and jubilant Zulu refrains that keep the stadium dancing.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'bahubhe',
    name: 'Bahubhe',
    category: 'featured',
    isFeatured: false,
    yearsPerformed: [2026],
    origin: 'Nongoma, KwaZulu-Natal',
    soundDescription: 'Mellow acoustic guitar runs with a rich, soothing tenor voice singing of romance and tradition.',
    knownFor: 'Melodic lyricism, warm vocal tone, and heartfelt ballads',
    bio: 'A respected artist from Nongoma, Bahubhe is known for his sweet melodic voice and romantic storytelling. His music focuses on love, respect between partners, and the timeless beauty of traditional Zulu life.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'mzukulu',
    name: 'Mzukulu',
    category: 'featured',
    isFeatured: false,
    yearsPerformed: [2026],
    origin: 'Nquthu, KwaZulu-Natal',
    soundDescription: 'Poetic, acoustic-led Maskandi with contemplative melodies and rich traditional storytelling.',
    knownFor: 'Deep lyrical poetry and acoustic compositions bridging folk and modern soul',
    bio: 'Mzukulu from Nquthu is widely admired for his sensitive songwriting and deep respect for cultural proverbs. His music explores spiritual identity, heritage, and the modern experiences of young Zulu people.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'mlabalaba',
    name: 'Mlabalaba',
    category: 'featured',
    isFeatured: false,
    yearsPerformed: [2026],
    origin: 'Msinga, KwaZulu-Natal',
    soundDescription: 'Sturdy, roots-oriented acoustic guitar picking following the deep Tugela valley tradition.',
    knownFor: 'Authentic Tugela-style acoustic picking and classic Maskandi soundscapes',
    bio: 'Carrying forward the historic picking traditions of Msinga, Mlabalaba is known for preserving the classic, unhurried acoustic sound that defines traditional Maskandi in KwaZulu-Natal.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'saliwa',
    name: 'Saliwa',
    category: 'featured',
    isFeatured: false,
    yearsPerformed: [2026],
    origin: 'Nquthu, KwaZulu-Natal',
    soundDescription: 'Soulful fingerstyle guitar with sincere, storytelling ballads about family and rural life.',
    knownFor: 'Rich acoustic phrasing and heartfelt traditional ballads',
    bio: 'Saliwa is a dedicated Maskandi songwriter from Nquthu whose acoustic ballads reflect the beauty and resilience of rural communities, praised for his warm guitar tone and poetic lyrics.',
    image: 'https://images.unsplash.com/photo-1520523839898-5071282543e1?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'thwasalekhansela',
    name: 'Thwasalekhansela',
    category: 'featured',
    isFeatured: false,
    yearsPerformed: [2026],
    origin: 'Nkandla, KwaZulu-Natal',
    soundDescription: 'Fast, high-spirited acoustic picking with rapid vocal rhythms and energetic Zulu dance breaks.',
    knownFor: 'Energetic vocal dynamics, fast rhythm guitars, and warrior-style dance interplay',
    bio: 'A high-energy performer from Nkandla, Thwasalekhansela brings electrifying dance choreography and spirited rhythm guitar to the stage, keeping audiences engaged throughout his sets.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'cevuzile',
    name: 'Cevuzile',
    category: 'featured',
    isFeatured: false,
    yearsPerformed: [2026],
    origin: 'KwaZulu-Natal',
    soundDescription: 'Bright, rhythmic acoustic guitar and upbeat vocal arrangements filled with joyful celebration.',
    knownFor: 'Harmonious arrangements, vibrant stage presence, and engaging live shows',
    bio: 'Cevuzile is an acclaimed Maskandi artist whose joyful, uplifting melodies celebrate Zulu cultural life. His performances are known for rich harmonies and positive, unifying messages.',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=80'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'gal-sicebi-honour-2026',
    title: '2026 Honouree: Sicebi "Inkosi Yamagcokama" Dlamini • 2026',
    category: 'artists',
    year: 2026,
    url: 'https://i.ibb.co/5hN1ymJk/1bca19808986dae7d39f89c2e3f1009c84ab7615-w700.webp',
    caption: 'Official portrait and ceremony honouring Sicebi "Inkosi Yamagcokama" Dlamini at the 13th Annual Impucuzeko Maskandi Festival.',
    aspect: 'wide'
  },
  {
    id: 'gal-stage-1',
    title: 'Main Stage Performance at Night • 2026',
    category: 'artists',
    year: 2026,
    url: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1600&q=85',
    caption: 'Electrifying headliner performance under stadium lights at Moses Mabhida People’s Park.',
    aspect: 'wide'
  },
  {
    id: 'gal-crowd-1',
    title: '25,000 Maskandi Devotees in Full Voice • 2026',
    category: 'crowd',
    year: 2026,
    url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=85',
    caption: 'A sea of over 25,000 supporters celebrating indigenous sound and Zulu pride.',
    aspect: 'wide'
  },
  {
    id: 'gal-train-1',
    title: "PRASA's Isitimela Sabantu Arrival",
    category: 'train',
    year: 2026,
    url: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1200&q=80',
    caption: 'The landmark PRASA partnership provided free rail transit for festival ticket holders across the province.',
    aspect: 'landscape'
  },
  {
    id: 'gal-guitar-1',
    title: 'Acoustic Mastery & Technique',
    category: 'artists',
    year: 2026,
    url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80',
    caption: 'Fastidious fingerpicking on the steel-string acoustic guitar — the undisputed heartbeat of Maskandi.',
    aspect: 'portrait'
  },
  {
    id: 'gal-attire-1',
    title: 'Traditional Regalia & Izimbadada',
    category: 'crowd',
    year: 2026,
    url: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1200&q=80',
    caption: 'Generations arriving in magnificent hand-crafted beadwork and traditional attire.',
    aspect: 'portrait'
  },
  {
    id: 'gal-backstage-1',
    title: 'Backstage Preparation & Brotherhood',
    category: 'backstage',
    year: 2026,
    url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80',
    caption: 'Acoustic tuning and quiet focus backstage before stepping onto the grand platform.',
    aspect: 'square'
  },
  {
    id: 'gal-venue-1',
    title: 'Moses Mabhida Stadium Arch Over People’s Park',
    category: 'venue',
    year: 2026,
    url: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1600&q=85',
    caption: 'The iconic arch framing the festival grounds in Durban.',
    aspect: 'wide'
  }
];

export const EDITORIAL_STORIES: Story[] = [
  {
    id: 'sicebi-inkosi-yamagcokama-story',
    title: 'Honouring Sicebi "Inkosi Yamagcokama" Dlamini',
    subtitle: 'The 13th Annual Impucuzeko Maskandi Festival officially dedicated its 2026 edition in honour of the late SATMA award-winning artist.',
    publishedDate: 'August 2026',
    author: 'Festival Archive Documentation',
    category: 'tribute',
    coverImage: 'https://i.ibb.co/5hN1ymJk/1bca19808986dae7d39f89c2e3f1009c84ab7615-w700.webp',
    featured: true,
    content: [
      'The 13th Annual Impucuzeko Maskandi Festival dedicated this edition to honouring Sicebi "Inkosi Yamagcokama" Dlamini, following his tragic passing in August 2026.',
      'Sicebi had earned widespread acclaim across South Africa, winning Best Maskandi at the 2023 South African Traditional Music Awards (SATMA). Devotees celebrated his humble spirit, his devotion to his Msinga roots, and memorable songs such as "Kuyanzenzakalela".',
      'Rather than formal speeches, fellow musicians, collaborators, and performers from his home area took to the People’s Park stage to celebrate his life, singing and dancing to his music in an uplifting communal tribute.'
    ]
  },
  {
    id: 'peoples-train-story',
    title: "The People's Train: Official PRASA Brand Partnership",
    subtitle: "Festival ticket holders travelled free to and from the festival on Isitimela Sabantu, the People's Train, through the completed 2026 PRASA brand partnership.",
    publishedDate: 'September 2026',
    author: 'Festival Archive Documentation',
    category: 'partnership',
    coverImage: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=1600&q=85',
    featured: true,
    content: [
      'For the 13th edition on 29 August 2026, PRASA executed an official brand partnership with the festival, operating #IsitimelaSabantu — the People\'s Train — to provide complimentary return passenger rail transit for ticket holders.',
      'For thousands of maskandi supporters traveling across KwaZulu-Natal, this landmark collaboration with the Passenger Rail Agency of South Africa made the journey safe, affordable, and deeply communal.',
      'Train carriages filled with song and acoustic guitar rhythms hours before reaching the platform, turning the transit into an inspiring preamble to the festival itself.',
      'Organisers and PRASA officials praised the orderly conduct and infectious spirit of the attendees, setting a national benchmark for transport integration at major cultural gatherings.'
    ]
  },
  {
    id: 'curries-fountain-to-moses-mabhida',
    title: 'From Curries Fountain to People’s Park: The Maskandi World Cup',
    subtitle: 'How an unapologetic celebration of traditional Zulu musicianship grew from historic grass roots to South Africa’s premier stadium park.',
    publishedDate: 'August 2026',
    author: 'Historical Archive',
    category: 'heritage',
    coverImage: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1600&q=85',
    featured: false,
    content: [
      'In its earliest years, Impucuzeko found its voice at Durban’s historic Curries Fountain — a site steeped in the memory of mass assembly and cultural solidarity.',
      'Yet by the 5th Annual edition in 2016, the festival had already outgrown all conventional boundaries. Devotees had begun spontaneously calling the event "The World Cup of Maskandi", a title embraced by media and fans for its sheer competitive energy, unmatched lineup density, and pride.',
      'Recognizing the need for a stage worthy of this momentum, organisers made the decisive move to Moses Mabhida People’s Park. Nestled beneath the iconic arch of the stadium, the venue provided the vast lawns, acoustics, and central dignity that 25,000+ supporters deserved.',
      'Thirteen editions later, Impucuzeko stands as a testament to the unshakeable power of indigenous African music.'
    ]
  },
  {
    id: 'economic-impact-local-traders',
    title: 'Empowering Local Commerce: 50+ Traders and Artisans at Impucuzeko',
    subtitle: 'From traditional beadwork to street cuisine, how the festival fuels the local township and creative economy.',
    publishedDate: 'September 2026',
    author: 'Economic Insights',
    category: 'review',
    coverImage: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1600&q=85',
    featured: false,
    content: [
      'Beyond its unmatched musical lineup, Impucuzeko has consistently served as an economic engine for small and micro businesses throughout Durban and greater KwaZulu-Natal.',
      'The 2026 edition hosted over 50 registered independent vendors. From master beadworkers crafting authentic Zulu adornments to braai masters, beverage stalls, and custom fashion designers, the festival perimeter buzzed with commerce from morning till late into the night.',
      'Organisers ensure that vendor application windows prioritize authentic local craftspeople, ensuring that the financial returns of this monumental cultural gathering flow directly back into the hands of the community.'
    ]
  }
];

export const VERIFIED_PARTNERS: Partner[] = [
  {
    name: 'PRASA',
    category: 'Public Transport & Rail Transit',
    description: 'Passenger Rail Agency of South Africa — official partner providing free commuter train transit for festival ticket holders.',
    role: 'Transport Partner'
  },
  {
    name: "Moses Mabhida Stadium / People's Park",
    category: 'Host Venue & Precinct',
    description: "Premier stadium in Durban; its People's Park precinct hosted this year's capacity crowd of 25,000+ maskandi fans.",
    role: 'Host Venue'
  },
  {
    name: 'eThekwini Municipality',
    category: 'Host City & Cultural Tourism',
    description: "Durban's metropolitan council, holding a multi-year hosting agreement with festival organisers supporting cultural heritage, traffic management, and emergency services.",
    role: 'Civic Partner'
  },
  {
    name: 'Ukhozi FM',
    category: 'Official Broadcast & Media Coverage',
    description: "SABC's isiZulu-language radio station, broadcasting live commentary, backstage interviews, and musical coverage across KwaZulu-Natal and nationally.",
    role: 'Broadcast Partner'
  }
];

export const VENDOR_CATEGORIES: VendorCategory[] = [
  {
    id: 'food',
    title: 'Traditional Cuisine & Shisanyama',
    description: 'Fresh local braai, traditional Zulu stews, dombolo, and refreshments.',
    examples: ['Braai & Shisanyama', 'Traditional Maize & Dumplings', 'Beverages & Ice']
  },
  {
    id: 'attire',
    title: 'Traditional Attire & Adornment',
    description: 'Authentic izimbadada sandals, beadwork, ibheshu, and regional insignia.',
    examples: ['Izimbadada Footwear', 'Zulu Beadwork & Necklaces', 'Headgear & Custom Regalia']
  },
  {
    id: 'crafts',
    title: 'Merchandise & Musical Craft',
    description: 'Guitar straps, handcrafted acoustic accessories, and festival souvenirs.',
    examples: ['Custom Instrument Accessories', 'Artisan Leather Goods', 'Commemorative Prints']
  },
  {
    id: 'services',
    title: 'Services & Mobile Support',
    description: 'Mobile battery stations, photography booths, and event convenience.',
    examples: ['Mobile Power & Device Stations', 'Instant Portrait Printing', 'Cultural Memorabilia']
  }
];

export const EVENT_FAQS: FaqItem[] = [
  {
    question: 'Where is Impucuzeko Maskandi Festival held?',
    answer: "The festival takes place at Moses Mabhida People's Park, directly adjacent to Moses Mabhida Stadium in Durban, KwaZulu-Natal. The expansive manicured lawns provide an open-air amphitheater that accommodates over 25,000 supporters."
  },
  {
    question: 'How was the PRASA People’s Train brand partnership executed?',
    answer: "PRASA entered into an official brand partnership with the 2026 festival, operating #IsitimelaSabantu — the People's Train — to provide complimentary return passenger rail transit for ticket holders across KwaZulu-Natal to Durban Station, alongside secure parking and shuttle transfers to Moses Mabhida People's Park."
  },
  {
    question: 'Why is Impucuzeko called "The Maskandi World Cup"?',
    answer: 'The title was first popularized by fans and national media during the 5th Annual edition in 2016 at Curries Fountain, reflecting the festival’s unmatched lineup density, competitive energy, and status as the premier championship gathering of the genre.'
  },
  {
    question: 'Who founded and directs the festival?',
    answer: 'Impucuzeko is organised and directed by Xolani Mcineka, Sandile Ndlanya & Tshatha Ngobe, who have guided the event from its inaugural 2012 gathering at Curries Fountain into South Africa’s largest traditional music stadium festival.'
  },
  {
    question: 'Who was honoured at the 13th Annual 2026 edition?',
    answer: 'The 13th Annual edition officially paid tribute to Sicebi "Inkosi Yamagcokama" Dlamini in memoriam, honouring his life and music.'
  },
  {
    question: 'Are festival tickets available at the gate on event day?',
    answer: 'No. Impucuzeko regularly sells out well in advance. Admission is strictly pre-sold through verified national ticketing outlets.'
  }
];
