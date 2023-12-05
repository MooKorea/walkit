export type LocationType = {
  name: string;
  address: string;
  photo1: string;
  photo2: string;
  photo3: string;
  starRating: number; //0 - 5
  pricing: number; //0 - 3
  distance: number; //miles 0 - 1 mi
  closeTime: number; //1 - 12
  description: string;
};

export const locationData: LocationType[] = [
  {
    name: "Adventure Oasis",
    address: "123 Adventure Street",
    photo1: "https://source.unsplash.com/random/200x200/?adventure",
    photo2: "https://source.unsplash.com/random/200x200/?nature",
    photo3: "https://source.unsplash.com/random/500x500/?outdoor",
    starRating: 4.5,
    pricing: 2,
    distance: 1.2,
    closeTime: 8,
    description:
      "Explore the thrill of nature with exciting adventures and breathtaking landscapes.",
  },
  {
    name: "Sunset Retreat",
    address: "456 Sunset Avenue",
    photo1: "https://source.unsplash.com/random/200x200/?sunset",
    photo2: "https://source.unsplash.com/random/200x200/?travel",
    photo3: "https://source.unsplash.com/random/500x500/?sunset",
    starRating: 3.8,
    pricing: 1,
    distance: 0.8,
    closeTime: 10,
    description:
      "Relax and unwind at our tranquil retreat with stunning sunset views and peaceful surroundings.",
  },
  {
    name: "Zen Garden",
    address: "789 Tranquil Lane",
    photo1: "https://source.unsplash.com/random/200x200/?garden",
    photo2: "https://source.unsplash.com/random/200x200/?meditation",
    photo3: "https://source.unsplash.com/random/500x500/?zen",
    starRating: 4.2,
    pricing: 2,
    distance: 1.5,
    closeTime: 7,
    description:
      "Find serenity in our Zen Garden, a peaceful oasis for relaxation and inner harmony.",
  },
  {
    name: "Thrillville Park",
    address: "101 Thrill Street",
    photo1: "https://source.unsplash.com/random/200x200/?amusement",
    photo2: "https://source.unsplash.com/random/200x200/?rollercoaster",
    photo3: "https://source.unsplash.com/random/500x500/?amusement-park",
    starRating: 4.0,
    pricing: 2,
    distance: 0.9,
    closeTime: 9,
    description:
      "Experience the excitement at Thrillville Park, where thrilling rides and fun adventures await.",
  },
  {
    name: "Sports Haven",
    address: "202 Sports Boulevard",
    photo1: "https://source.unsplash.com/random/200x200/?sports",
    photo2: "https://source.unsplash.com/random/200x200/?stadium",
    photo3: "https://source.unsplash.com/random/500x500/?sports",
    starRating: 4.8,
    pricing: 3,
    distance: 1.0,
    closeTime: 11,
    description:
      "Play, cheer, and celebrate at Sports Haven, your go-to destination for sports and entertainment.",
  },
  {
    name: "Nature Trails",
    address: "303 Nature Lane",
    photo1: "https://source.unsplash.com/random/200x200/?hiking",
    photo2: "https://source.unsplash.com/random/200x200/?forest",
    photo3: "https://source.unsplash.com/random/500x500/?nature-trails",
    starRating: 4.3,
    pricing: 1,
    distance: 1.3,
    closeTime: 7,
    description:
      "Embark on a journey through scenic Nature Trails, surrounded by the beauty of the great outdoors.",
  },
  {
    name: "Chill Beach Lounge",
    address: "404 Relaxation Avenue",
    photo1: "https://source.unsplash.com/random/200x200/?beach",
    photo2: "https://source.unsplash.com/random/200x200/?ocean",
    photo3: "https://source.unsplash.com/random/500x500/?beach",
    starRating: 3.5,
    pricing: 1,
    distance: 0.7,
    closeTime: 10,
    description:
      "Unwind at the Chill Beach Lounge, a beachfront paradise offering relaxation and stunning ocean views.",
  },
  {
    name: "Sky High Observatory",
    address: "505 Skyview Drive",
    photo1: "https://source.unsplash.com/random/200x200/?observatory",
    photo2: "https://source.unsplash.com/random/200x200/?stars",
    photo3: "https://source.unsplash.com/random/500x500/?observatory",
    starRating: 4.7,
    pricing: 2,
    distance: 1.8,
    closeTime: 8,
    description:
      "Reach for the stars at Sky High Observatory, offering breathtaking views of the night sky.",
  },
  {
    name: "Artsy Studio Gallery",
    address: "606 Artistic Lane",
    photo1: "https://source.unsplash.com/random/200x200/?art",
    photo2: "https://source.unsplash.com/random/200x200/?gallery",
    photo3: "https://source.unsplash.com/random/500x500/?art-gallery",
    starRating: 4.1,
    pricing: 2,
    distance: 1.2,
    closeTime: 6,
    description:
      "Immerse yourself in creativity at Artsy Studio Gallery, showcasing the finest art in a vibrant space.",
  },
  {
    name: "Family Fun Park",
    address: "707 Family Street",
    photo1: "https://source.unsplash.com/random/200x200/?family",
    photo2: "https://source.unsplash.com/random/200x200/?fun",
    photo3: "https://source.unsplash.com/random/500x500/?family-fun",
    starRating: 3.9,
    pricing: 2,
    distance: 0.9,
    closeTime: 9,
    description:
      "Create lasting memories at Family Fun Park, where laughter and joy are at the heart of every adventure.",
  },
  {
    name: "Gourmet Picnic Spot",
    address: "808 Picnic Avenue",
    photo1: "https://source.unsplash.com/random/200x200/?picnic",
    photo2: "https://source.unsplash.com/random/200x200/?food",
    photo3: "https://source.unsplash.com/random/500x500/?picnic",
    starRating: 4.4,
    pricing: 2,
    distance: 1.1,
    closeTime: 7,
    description:
      "Indulge in a culinary delight at Gourmet Picnic Spot, a perfect blend of delicious flavors and outdoor charm.",
  },
  {
    name: "Tranquil Waters Spa",
    address: "909 Spa Lane",
    photo1: "https://source.unsplash.com/random/200x200/?spa",
    photo2: "https://source.unsplash.com/random/200x200/?relaxation",
    photo3: "https://source.unsplash.com/random/500x500/?spa",
    starRating: 4.6,
    pricing: 3,
    distance: 1.5,
    closeTime: 6,
    description:
      "Revitalize your senses at Tranquil Waters Spa, where relaxation and rejuvenation meet in harmony.",
  },
  // ... (10 more objects)
];
