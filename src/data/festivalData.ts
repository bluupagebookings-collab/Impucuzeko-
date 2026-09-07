import { FestivalEdition, Artist, GalleryImage, Story, Partner, PartnerLogo, VendorCategory, FaqItem } from '../types';

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
    name: 'Sandile Ndlanya',
    role: 'Festival Co-Founder & Director',
    image: 'https://i.ibb.co/99mTY5WW/1788740559492.jpg',
    note: 'Co-founder and cultural producer overseeing talent, logistics, and heritage preservation for the festival.',
    bio: 'Co-founder and cultural producer overseeing talent, logistics, and heritage preservation for the festival.'
  },
  {
    name: 'Xolani Mcineka',
    role: 'Festival Co-Founder & Director',
    image: 'https://i.ibb.co/GvGnpxmg/1788740508554.jpg',
    note: 'Co-founder steering Impucuzeko from its origins at Curries Fountain to Moses Mabhida People’s Park.',
    bio: 'Co-founder steering Impucuzeko from its origins at Curries Fountain to Moses Mabhida People’s Park.'
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
    soundDescription: 'Fast-tempo, driving acoustic guitar with booming, authoritative vocals and massive stadium choruses.',
    knownFor: 'High-octane vocal delivery, record-breaking concert turnouts, and anthemic songcraft',
    bio: 'Known across South Africa as "Indlamlenze", Khuzani Mpungose is a reigning giant of modern Maskandi. Famous for filling stadiums and commanding the devoted "Blue Nation" fan base, his energetic stage presence and anthems like "Iskhova" have earned him countless music awards.',
    image: 'https://i.ibb.co/LDw1Pfk4/1788653526687.jpg',
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
    soundDescription: 'Smooth and sweet acoustic melodies, heartfelt singing, and rich traditional vocal harmonies with modern appeal.',
    knownFor: 'Emotive lyricism, crossover appeal, and heartfelt traditional harmonies',
    bio: 'Senzo "Ntencane" Zondi made history when his song "Wawuthembeni" crossed over into mainstream South African radio to win SAMA Song of the Year. He is admired for his tender love ballads, poetic lyricism, and seamless blend of traditional and modern sounds.',
    image: 'https://i.ibb.co/V0VQjPpp/1788654580558.jpg',
    socials: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 'mjolisi',
    name: 'Mjolisi',
    category: 'headliner',
    isFeatured: true,
    yearsPerformed: [2026, 2025],
    soundDescription: 'Deep, authoritative vocals over heavy rhythmic acoustic basslines and unforgettable sing-along melodies.',
    knownFor: 'Massive cultural anthems including "My Dululu", "Ubambo Lwami", and Ukhozi FM Song of the Year contender',
    bio: 'Mlungisi "Mjolisi" Gwala is a powerhouse vocalist and revered composer in contemporary Maskandi. Renowned for chart-topping singles such as "My Dululu" (which earned over 500,000 votes in Ukhozi FM’s Song of the Year) and albums like "Baba kaEnzo" and "Inganono", Mjolisi commands devoted stadiums across South Africa with his emotive storytelling and unshakeable traditional roots.',
    image: 'https://i.ibb.co/hvHzpxy/1788654825838.jpg',
    socials: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 'limit',
    name: 'Limit Nala',
    category: 'main_lineup',
    isFeatured: true,
    yearsPerformed: [2026],
    soundDescription: 'Fast-paced, aggressive acoustic guitar picking combined with rapid praise poetry (izibongo) and energetic dance.',
    knownFor: 'Rapid-fire poetic izibongo and dynamic stage movements',
    bio: 'Limit Ivelamumva Nala is renowned for electric stage energy. He delivers rapid-fire praise poetry while dancing with lightning speed, turning every festival performance into a showcase of traditional warrior spirit and musical endurance.',
    image: 'https://i.ibb.co/JRc6hwpp/1788654837100.jpg',
    socials: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 'falabo',
    name: 'Falabo',
    category: 'main_lineup',
    isFeatured: true,
    yearsPerformed: [2026],
    soundDescription: 'Ultra-fast, delicate thumb-and-finger picking technique ("Magic Fingers") with warm, classic acoustic grooves.',
    knownFor: 'Masterful guitar picking dexterity earning him the nickname "Magic Fingers"',
    bio: 'Nicknamed "Magic Fingers" by Maskandi devotees, Falabo is widely recognized as one of the most technically gifted guitarists in the genre, creating complex melodic patterns that sound like multiple instruments playing at once.',
    image: 'https://i.ibb.co/q33mW3F9/1788654874225.jpg',
    socials: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 'is-nkeshemba',
    name: 'Is Nkeshemba',
    category: 'main_lineup',
    isFeatured: true,
    yearsPerformed: [2026],
    soundDescription: 'Melodic acoustic storytelling blending classic Maskandi picking with modern youth energy.',
    knownFor: 'Breakthrough releases including "Soft Skin", "Usungikhombisile", and Bhodloza Foundation award winner',
    bio: 'Qiniso "Is Nkeshemba" Nkomo is one of modern Maskandi’s most electrifying young storytellers. Winner of the prestigious Bhodloza Foundation competition, his nimble guitar phrasing and poignant lyricism on hits like "Soft Skin" and "Isibaya Sikababa" have made him an indispensable festival favorite.',
    image: 'https://i.ibb.co/234PXMz4/1788654913370.jpg',
    socials: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 'gadla-nxumalo',
    name: 'Gadla Nxumalo',
    category: 'main_lineup',
    isFeatured: true,
    yearsPerformed: [2026],
    soundDescription: 'Punchy acoustic riffs, driving traditional tempo, and fearless narrative lyrics touching on everyday life.',
    knownFor: 'Acclaimed albums including "March in March", "Iso Lenyathi", and popular tracks like "Udwendwe emandaba"',
    bio: 'Known to Maskandi purists as UGadla, Gadla Nxumalo is celebrated for his vibrant stage presence, rapid acoustic picking, and prolific discography including "March in March" and "Iso Lenyathi". His candid social commentary and high-energy performances make him a major draw at People’s Park.',
    image: 'https://i.ibb.co/mCwpLdDr/1788654752372.jpg',
    socials: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 'gandaganda',
    name: 'Gandaganda',
    category: 'main_lineup',
    isFeatured: true,
    yearsPerformed: [2026],
    soundDescription: 'Soul-stirring guitar picking, inspiring lyricism for youth, and energetic warrior dance rhythm.',
    knownFor: 'Touching positive messages, authentic Maskandi compositions, and dynamic live festival performances',
    bio: 'Jabulani "UGandaganda" Gwala, known as "UGandaganda Ongenasteringi", is admired for writing touching songs that inspire pride in African culture among youth. His solo albums and tracks like "Halala" and "Lilizela" highlight his mastery of the acoustic guitar and commanding stage personality.',
    image: 'https://i.ibb.co/Tqv9MbYp/1788654736655.jpg',
    socials: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 'shenge',
    name: 'Shenge',
    category: 'main_lineup',
    isFeatured: true,
    yearsPerformed: [2026],
    soundDescription: 'Traditional Zulu guitar riffs, driving percussive rhythm, and raw vocal authenticity.',
    knownFor: 'Standout Maskandi recordings such as "Sengigowishe Kwadlula" and pure acoustic musicianship',
    bio: 'Shenge Wasehlalankosi is an authentic Maskandi traditionalist known for his sharp guitar picking and rich cultural resonance. With celebrated tracks like "Sengigowishe Kwadlula", Shenge embodies the timeless spirit of Zulu folklore, captivating festival audiences with authentic rhythms and acoustic prowess.',
    image: 'https://i.ibb.co/prBfYr0r/1788654586490.jpg',
    socials: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 'dumakahle',
    name: 'Dumakahle',
    category: 'headliner',
    isFeatured: true,
    yearsPerformed: [2026, 2025, 2024],
    soundDescription: 'Brisk acoustic guitar strumming and punchy rhythms with direct, honest lyrics about youth struggles and everyday reality.',
    knownFor: 'Punchy acoustic picking and relatable youth anthems including "Life after matric"',
    bio: 'Mpilo Seluleko Nkosi, known on stage as Dumakahle, is a prominent Maskandi voice who connects deeply with young listeners. His tracks, such as "Life after matric" and "Ukuhlanya Ngenqondo", address the real-life choices and struggles facing youth, performed with sharp acoustic technique and relentless stage energy.',
    image: 'https://i.ibb.co/nMhGgGHW/1788738525437.jpg',
    socials: {
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 'gatsheni',
    name: 'Gatsheni',
    category: 'main_lineup',
    isFeatured: true,
    yearsPerformed: [2026, 2025],
    soundDescription: 'Deep, resonant acoustic basslines and gravelly, powerful vocals that tell real stories of working-class life.',
    knownFor: 'Unflinching narrative depth and commanding stage presence',
    bio: 'Zwelivelile Ntombela, known as Gatsheni, has become one of Maskandi’s most respected voices through songs that speak honestly about the struggles of migrant workers, perseverance, and brotherhood, backed by heavy rhythmic grooves.',
    image: 'https://i.ibb.co/ynpgx1xG/Ugatsheni-Picture.jpg',
    socials: {
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 'jaiva-zimnike',
    name: 'Jaiva Zimnike',
    category: 'main_lineup',
    isFeatured: true,
    yearsPerformed: [2026],
    soundDescription: 'Celebratory, up-tempo party grooves with infectious call-and-response crowd chants.',
    knownFor: 'Festive crowd-rousing chants and signature rhythmic breakdowns',
    bio: 'Jaiva Zimnike is celebrated for his vibrant party atmosphere and crowd control. His songs are tailored for massive festival singalongs, with driving bass notes and jubilant Zulu refrains that keep the stadium dancing.',
    image: 'https://i.ibb.co/XkrCPwLP/images-46.jpg',
    socials: {
      facebook: 'https://facebook.com'
    }
  },
  {
    id: 'mdumazi',
    name: 'Mdumazi',
    category: 'legend',
    isFeatured: true,
    yearsPerformed: [2026, 2025],
    soundDescription: 'Intricate, clean acoustic fingerpicking patterns paired with thoughtful, conversational vocal phrasing.',
    knownFor: 'Exquisite acoustic picking technique, iconic live stage entrances, and reflective songs about Zulu morality',
    bio: 'Mxolisi Mhlongo, known professionally as Mdumazi, is widely praised by Maskandi purists for his dynamic stage entrances, complex chord phrasing, and songs about morality and cultural pride, joining the legendary reunion lineup.',
    image: '/images/mdumazi.jpg',
    socials: {
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    id: 'shwi-nomtekhala',
    name: 'Shwi NoMtekhala',
    category: 'legend',
    isFeatured: true,
    yearsPerformed: [2026, 2025, 2016],
    soundDescription: 'Soulful, gentle acoustic guitar rhythms with spiritual two-part harmonies and poetic folk wisdom.',
    knownFor: 'Multi-platinum folk-maskandi arrangements and the record-breaking classic "Wangisiza Baba"',
    bio: 'Formed by childhood friends Mandla Xaba ("Shwi") and Zwelenduna Rodgers Magubane ("Mtekhala"), this legendary duo revolutionized South African music in 2004 with their album "Wangisiza Baba", which sold over 500,000 copies. Their peaceful, spiritual harmonies remain a cornerstone of African folk music.',
    image: 'https://i.ibb.co/Tq1T7HW4/1788652291389.jpg',
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
    soundDescription: 'Harmonious all-women chorus singing, traditional call-and-response chants, and steady acoustic percussion.',
    knownFor: 'Fearless political and social commentary, multi-platinum albums, and pioneering women leadership in Maskandi',
    bio: 'Formed in 1993, Izingane ZoMa is South Africa’s most famous all-women Maskandi group. Led for decades by Khulekani Khuzwayo, their bold lyrics have tackled national politics, corruption, HIV awareness, and community justice, earning multiple platinum awards and legendary cultural status.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80',
    socials: {
      facebook: 'https://facebook.com'
    }
  },
  {
    id: 'imfezi',
    name: 'Imfezi',
    category: 'legend',
    isFeatured: true,
    yearsPerformed: [2026],
    soundDescription: 'Modern, punchy acoustic guitar melodies with smooth vocal phrasing and catchy contemporary hooks.',
    knownFor: 'Distinctive voice, Amabunjwa sound, and relatable modern Zulu lyricism',
    bio: 'Phumlani Khumalo, popularly known as Imfezemnyama, is celebrated across South Africa as a prolific composer and studio head of Amabunjwa Records. Famous for bringing a crisp modern feel to traditional Maskandi guitar lines, he unites with the festival legends on the grand stage.',
    image: 'https://images.unsplash.com/photo-1520523839898-5071282543e1?auto=format&fit=crop&w=1000&q=80',
    socials: {
      facebook: 'https://facebook.com'
    }
  },
  {
    id: 'bahubhe',
    name: 'Bahubhe',
    category: 'legend',
    isFeatured: true,
    yearsPerformed: [2026],
    soundDescription: 'Mellow acoustic guitar runs with a rich, soothing tenor voice singing of romance and tradition.',
    knownFor: 'Melodic lyricism, warm vocal tone, and heartfelt ballads',
    bio: 'A respected master of the guitar, Bahubhe is known for his sweet melodic voice and romantic storytelling. His music focuses on love, respect between partners, and the timeless beauty of traditional Zulu culture, taking his place in the legendary reunion roster.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1000&q=80',
    socials: {
      facebook: 'https://facebook.com'
    }
  },
  {
    id: 'menzi',
    name: 'Menzi',
    category: 'main_lineup',
    isFeatured: false,
    yearsPerformed: [2026],
    soundDescription: 'Joyful, uptempo acoustic guitar progressions with uplifting choruses and infectious rhythm arrangements.',
    knownFor: 'High-energy choruses and spirited rhythm arrangements',
    bio: 'Menzi Msawenkosi Majola has earned a strong reputation for his energetic live band arrangements. His music carries themes of hope, resilience, and brotherhood, consistently moving stadium crowds to dance and sing along.',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'mzukulu',
    name: 'Mzukulu',
    category: 'featured',
    isFeatured: false,
    yearsPerformed: [2026],
    soundDescription: 'Poetic, acoustic-led Maskandi with contemplative melodies and rich traditional storytelling.',
    knownFor: 'Deep lyrical poetry and acoustic compositions bridging folk and modern soul',
    bio: 'Mzukulu is widely admired for his sensitive songwriting and deep respect for cultural proverbs. His music explores spiritual identity, heritage, and the modern experiences of young Zulu people.',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'mlabalaba',
    name: 'Mlabalaba',
    category: 'featured',
    isFeatured: false,
    yearsPerformed: [2026],
    soundDescription: 'Sturdy, roots-oriented acoustic guitar picking following the deep Tugela valley tradition.',
    knownFor: 'Authentic Tugela-style acoustic picking and classic Maskandi soundscapes',
    bio: 'Carrying forward the historic picking traditions, Mlabalaba is known for preserving the classic, unhurried acoustic sound that defines traditional Maskandi.',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'saliwa',
    name: 'Saliwa',
    category: 'featured',
    isFeatured: false,
    yearsPerformed: [2026],
    soundDescription: 'Soulful fingerstyle guitar with sincere, storytelling ballads about family and rural life.',
    knownFor: 'Rich acoustic phrasing and heartfelt traditional ballads',
    bio: 'Saliwa is a dedicated Maskandi songwriter whose acoustic ballads reflect the beauty and resilience of rural communities, praised for his warm guitar tone and poetic lyrics.',
    image: 'https://images.unsplash.com/photo-1520523839898-5071282543e1?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'thwasalekhansela',
    name: 'Thwasalekhansela',
    category: 'featured',
    isFeatured: false,
    yearsPerformed: [2026],
    soundDescription: 'Fast, high-spirited acoustic picking with rapid vocal rhythms and energetic Zulu dance breaks.',
    knownFor: 'Energetic vocal dynamics, fast rhythm guitars, and warrior-style dance interplay',
    bio: 'A high-energy performer, Thwasalekhansela brings electrifying dance choreography and spirited rhythm guitar to the stage, keeping audiences engaged throughout his sets.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'cevuzile',
    name: 'Cevuzile',
    category: 'featured',
    isFeatured: false,
    yearsPerformed: [2026],
    soundDescription: 'Bright, rhythmic acoustic guitar and upbeat vocal arrangements filled with joyful celebration.',
    knownFor: 'Harmonious arrangements, vibrant stage presence, and engaging live shows',
    bio: 'Cevuzile is an acclaimed Maskandi artist whose joyful, uplifting melodies celebrate Zulu cultural life. His performances are known for rich harmonies and positive, unifying messages.',
    image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=80'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'gal-2026-05',
    title: '25,000 Maskandi Supporters at Moses Mabhida',
    category: 'crowd',
    year: 2026,
    url: 'https://i.ibb.co/wZwkf82r/1788653442330.jpg',
    caption: 'The vast amphitheatre lawn filled to absolute capacity under the iconic Durban arch.',
    aspect: 'wide'
  },
  {
    id: 'gal-2026-01',
    title: 'Festival Stage & Vibrant Crowd Gathering',
    category: 'artists',
    year: 2026,
    url: 'https://i.ibb.co/4gScB1nF/1788653558580.jpg',
    caption: 'Dynamic stage performance at Moses Mabhida People’s Park, surrounded by thousands of passionate Maskandi followers.',
    aspect: 'portrait'
  },
  {
    id: 'gal-2026-02',
    title: 'Zulu Cultural Regalia & Devotion',
    category: 'crowd',
    year: 2026,
    url: 'https://i.ibb.co/kVYZ3fjL/1788653544953.jpg',
    caption: 'Celebrating authentic Zulu heritage in full traditional attire, beadwork, and ceremonial headdresses.',
    aspect: 'portrait'
  },
  {
    id: 'gal-2026-04',
    title: 'Royal Entrance & Festival Pageantry',
    category: 'artists',
    year: 2026,
    url: 'https://i.ibb.co/JF2WX0RH/1788653470577.jpg',
    caption: 'Grand stage appearance in full traditional warrior regalia commanding the audience at Impucuzeko.',
    aspect: 'portrait'
  },
  {
    id: 'gal-2026-06',
    title: 'PRASA Isitimela Sabantu Activation',
    category: 'train',
    year: 2026,
    url: 'https://i.ibb.co/CsX1nKHf/1788652363354.jpg',
    caption: 'PRASA brand activation banners celebrating #IsitimelaSabantu — connecting communities across KwaZulu-Natal to Durban.',
    aspect: 'wide'
  },
  {
    id: 'gal-2026-08',
    title: 'Traditional Dance & Warrior Precision',
    category: 'crowd',
    year: 2026,
    url: 'https://i.ibb.co/zWbtnzDw/1788561661417.jpg',
    caption: 'Indlamu traditional Zulu dancing showcase demonstrating poise, cultural unity, and ancestral rhythm.',
    aspect: 'portrait'
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
    coverImage: 'https://i.ibb.co/XfcLjMH4/1788653290952.jpg',
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
    coverImage: 'https://i.ibb.co/wZwkf82r/1788653442330.jpg',
    featured: false,
    content: [
      'In its earliest years, Impucuzeko found its voice at Durban’s historic Curries Fountain — a site steeped in the memory of mass assembly, civic resilience, and cultural solidarity.',
      'Yet by the 5th Annual edition in 2016, the festival had already outgrown all conventional boundaries. Devotees had begun spontaneously calling the event "The World Cup of Maskandi", a title embraced by national media and fans for its sheer competitive energy, unmatched lineup density, and pride.',
      'Recognizing the need for a stage worthy of this momentum, organisers made the decisive move to Moses Mabhida People’s Park. Nestled beneath the iconic arch of the stadium, the venue provided the vast lawns, acoustics, and central dignity that 25,000+ supporters deserved.',
      'Thirteen editions later, Impucuzeko stands as a testament to the unshakeable power of indigenous African music, drawing devotees from every province across South Africa and the diaspora.'
    ]
  },
  {
    id: 'economic-impact-local-traders',
    title: 'Empowering Local Commerce: 50+ Traders and Artisans at Impucuzeko',
    subtitle: 'From traditional beadwork to street cuisine, how the festival fuels the local township and creative economy.',
    publishedDate: 'September 2026',
    author: 'Economic Insights',
    category: 'review',
    coverImage: 'https://i.ibb.co/kVYZ3fjL/1788653544953.jpg',
    featured: false,
    content: [
      'Beyond its unmatched musical lineup, Impucuzeko has consistently served as an economic engine for small and micro businesses throughout Durban and greater KwaZulu-Natal.',
      'The 2026 edition hosted over 50 registered independent vendors. From master beadworkers crafting authentic Zulu adornments to braai masters, beverage stalls, and custom fashion designers, the festival perimeter buzzed with commerce from morning till late into the night.',
      'Organisers ensure that vendor application windows prioritize authentic local craftspeople, ensuring that the financial returns of this monumental cultural gathering flow directly back into the hands of the community.'
    ]
  }
];

export const FESTIVAL_PROMOTERS = [
  {
    name: 'Sikinya Media',
    role: 'Lead Event Promoter',
    note: 'Lead promoters and stage production for the 13th edition.'
  },
  {
    name: 'Name Surname',
    role: 'Promoter',
    note: ''
  },
  {
    name: 'Name Surname',
    role: 'Promoter',
    note: ''
  }
];

export const FESTIVAL_INFLUENCERS = [
  {
    name: 'Mtembayizile Mbatha',
    role: 'Maskandi Journalist',
    image: 'https://i.ibb.co/QWXcYck/1788740284851.jpg',
    category: 'Journalist'
  },
  {
    name: 'Mashudula',
    role: 'Influencer',
    image: 'https://i.ibb.co/cKd9N5PM/1788740201447.jpg',
    category: 'Influencer'
  },
  {
    name: 'Yenzi Ndimande',
    role: 'Influencer',
    image: 'https://i.ibb.co/q3ptfnK1/1788739991981.jpg',
    category: 'Influencer'
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

export const PARTNER_LOGOS: PartnerLogo[] = [
  {
    id: 'prasa',
    name: 'PRASA Passenger Rail Agency of South Africa',
    url: 'https://i.ibb.co/20nh9gFN/Prasa-logo-svg.png'
  },
  {
    id: 'partner-2',
    name: 'Official Partner',
    url: 'https://i.ibb.co/H12TSck/254086-removebg-preview.png'
  },
  {
    id: 'partner-3',
    name: 'Official Partner',
    url: 'https://i.ibb.co/QvGMt614/254081-removebg-preview-1.png'
  },
  {
    id: 'partner-4',
    name: 'Official Partner',
    url: 'https://i.ibb.co/ns7MfxTM/254090-removebg-preview.png'
  },
  {
    id: 'partner-5',
    name: 'Official Partner',
    url: 'https://i.ibb.co/rGCvhKtw/254088-removebg-preview.png'
  },
  {
    id: 'partner-6',
    name: 'Official Partner',
    url: 'https://i.ibb.co/JFqV6tZH/254087-removebg-preview.png'
  },
  {
    id: 'ukhozi',
    name: 'Ukhozi FM',
    url: 'https://i.ibb.co/RkqK83r8/Ukhozi-FM-2013-Logo.gif'
  },
  {
    id: 'partner-8',
    name: 'Official Partner',
    url: 'https://i.ibb.co/3mFcGvwB/254076-removebg-preview.png'
  },
  {
    id: 'partner-9',
    name: 'Official Partner',
    url: 'https://i.ibb.co/hJdJBKdX/254075-removebg-preview.png'
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
