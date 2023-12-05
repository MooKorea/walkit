export type LocationType = {
  name: string;
  address: string;
  photo1: string;
  photo2: string;
  starRating: number; //0 - 5
  pricing: number; //0 - 3
  distance: number; //miles 0 - 1 mi
  closeTime: number; //1 - 12
};

export const recreationalBusinesses: LocationType[] = [
  {
    name: "Adventure Oasis",
    address: "123 Adventure Street",
    photo1: "https://source.unsplash.com/random/200x200/?adventure",
    photo2: "https://source.unsplash.com/random/200x200/?nature",
    starRating: 4.5,
    pricing: 2,
    distance: 1.2,
    closeTime: 8,
  },
  {
    name: "Sunset Retreat",
    address: "456 Sunset Avenue",
    photo1: "https://source.unsplash.com/random/200x200/?sunset",
    photo2: "https://source.unsplash.com/random/200x200/?travel",
    starRating: 3.8,
    pricing: 1,
    distance: 0.8,
    closeTime: 10,
  },
  {
    name: "Zen Garden",
    address: "789 Tranquil Lane",
    photo1: "https://source.unsplash.com/random/200x200/?garden",
    photo2: "https://source.unsplash.com/random/200x200/?meditation",
    starRating: 4.2,
    pricing: 2,
    distance: 1.5,
    closeTime: 7,
  },
  {
    name: "Thrillville Park",
    address: "101 Thrill Street",
    photo1: "https://source.unsplash.com/random/200x200/?amusement",
    photo2: "https://source.unsplash.com/random/200x200/?rollercoaster",
    starRating: 4.0,
    pricing: 2,
    distance: 0.9,
    closeTime: 9,
  },
  {
    name: "Sports Haven",
    address: "202 Sports Boulevard",
    photo1: "https://source.unsplash.com/random/200x200/?sports",
    photo2: "https://source.unsplash.com/random/200x200/?stadium",
    starRating: 4.8,
    pricing: 3,
    distance: 1.0,
    closeTime: 11,
  },
  {
    name: "Nature Trails",
    address: "303 Nature Lane",
    photo1: "https://source.unsplash.com/random/200x200/?hiking",
    photo2: "https://source.unsplash.com/random/200x200/?forest",
    starRating: 4.3,
    pricing: 1,
    distance: 1.3,
    closeTime: 7,
  },
  {
    name: "Chill Beach Lounge",
    address: "404 Relaxation Avenue",
    photo1: "https://source.unsplash.com/random/200x200/?beach",
    photo2: "https://source.unsplash.com/random/200x200/?ocean",
    starRating: 3.5,
    pricing: 1,
    distance: 0.7,
    closeTime: 10,
  },
  {
    name: "Sky High Observatory",
    address: "505 Skyview Drive",
    photo1: "https://source.unsplash.com/random/200x200/?observatory",
    photo2: "https://source.unsplash.com/random/200x200/?stars",
    starRating: 4.7,
    pricing: 2,
    distance: 1.8,
    closeTime: 8,
  },
  {
    name: "Artsy Studio Gallery",
    address: "606 Artistic Lane",
    photo1: "https://source.unsplash.com/random/200x200/?art",
    photo2: "https://source.unsplash.com/random/200x200/?gallery",
    starRating: 4.1,
    pricing: 2,
    distance: 1.2,
    closeTime: 6,
  },
  {
    name: "Family Fun Park",
    address: "707 Family Street",
    photo1: "https://source.unsplash.com/random/200x200/?family",
    photo2: "https://source.unsplash.com/random/200x200/?fun",
    starRating: 3.9,
    pricing: 2,
    distance: 0.9,
    closeTime: 9,
  },
  {
    name: "Gourmet Picnic Spot",
    address: "808 Picnic Avenue",
    photo1: "https://source.unsplash.com/random/200x200/?picnic",
    photo2: "https://source.unsplash.com/random/200x200/?food",
    starRating: 4.4,
    pricing: 2,
    distance: 1.1,
    closeTime: 7,
  },
  {
    name: "Tranquil Waters Spa",
    address: "909 Spa Lane",
    photo1: "https://source.unsplash.com/random/200x200/?spa",
    photo2: "https://source.unsplash.com/random/200x200/?relaxation",
    starRating: 4.6,
    pricing: 3,
    distance: 1.5,
    closeTime: 6,
  },
  // ... (10 more objects)
];
