const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image:
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "New York City",
    country: "United States",
  },
  {
    title: "Mountain Retreat",
    description:
      "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 1000,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Lakefront Luxury Villa",
    description:
      "Experience ultimate luxury in this stunning lakefront villa. Private dock, hot tub, and breathtaking views.",
    image:
      "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Rustic Cabin in the Woods",
    description:
      "Get back to nature in this rustic log cabin nestled in the woods. Great for hiking and star-gazing.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 800,
    location: "Smoky Mountains",
    country: "United States",
  },
  {
    title: "Charming Countryside B&B",
    description:
      "Enjoy a peaceful stay at this charming countryside bed and breakfast. Homemade breakfast included!",
    image:
      "https://images.unsplash.com/photo-1517840901100-8179e982acb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 600,
    location: "Cotswolds",
    country: "United Kingdom",
  },
  {
    title: "Desert Glamping Experience",
    description:
      "Try glamping in the desert in a luxury tent with all modern comforts under starry skies.",
    image:
      "https://images.unsplash.com/photo-1549294413-26f195200c16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 1100,
    location: "Sahara",
    country: "Morocco",
  },
  {
    title: "Treehouse Adventure",
    description:
      "Live out your childhood dreams in this cozy, modern treehouse surrounded by forest.",
    image:
      "https://images.unsplash.com/photo-1604004218771-05c55db4f9f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJlZWhvdXNlfGVufDB8fDB8fHww",
    price: 950,
    location: "Portland",
    country: "United States",
  },
  {
    title: "Luxury Penthouse",
    description:
      "Top-floor penthouse with city skyline views, private elevator, and hot tub on the terrace.",
    image:
      "https://images.unsplash.com/photo-1542928658-22251e208ac1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVudGhvdXNlfGVufDB8fDB8fHww",
    price: 3000,
    location: "Dubai",
    country: "UAE",
  },
  {
    title: "Ice Hotel",
    description:
      "Stay cool at this one-of-a-kind hotel built entirely of ice and snow. A true arctic experience!",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Jukkasjärvi",
    country: "Sweden",
  },
  {
    title: "Historic Castle Stay",
    description:
      "Live like royalty in this 12th-century castle turned luxury hotel. Elegant, grand, and unforgettable.",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 2800,
    location: "Loire Valley",
    country: "France",
  },
  {
    title: "Underwater Room",
    description:
      "Sleep with the fishes—in a good way! This unique room is submerged below sea level.",
    image:
      "https://images.unsplash.com/photo-1675257701796-731590c2a7c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dW5kZXJ3YXRlciUyMHJvb218ZW58MHx8MHx8fDA%3D",
    price: 3500,
    location: "Zanzibar",
    country: "Tanzania",
  },
  {
    title: "Urban Studio",
    description:
      "Minimalist, bright studio apartment located just steps away from public transport and cafes.",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Berlin",
    country: "Germany",
  },
  {
    title: "Rainforest Eco-Lodge",
    description:
      "Stay green in this eco-lodge deep in the rainforest. Solar power, fresh food, and pure tranquility.",
    image:
      "https://images.unsplash.com/photo-1590675661607-c73d1f37e5f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFJhaW5mb3Jlc3QlMjBFY28lMjBMb2RnZXxlbnwwfHwwfHx8MA%3D%3D",
    price: 700,
    location: "Amazon",
    country: "Brazil",
  },
  {
    title: "Beach Bungalow",
    description:
      "Simple, sandy, and serene—perfect beachside bungalow for romantic or solo escapes.",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 1000,
    location: "Goa",
    country: "India",
  },
  {
    title: "Cliffside Hideout",
    description:
      "A stunning architectural marvel built right into the cliffside, overlooking the ocean.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    price: 2200,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Japanese Ryokan",
    description:
      "Traditional Japanese inn experience with tatami rooms, futons, and onsen hot spring.",
    image:
      "https://images.unsplash.com/photo-1585561642454-c03297e883c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEphcGFuZXNlJTIwUnlva2FufGVufDB8fDB8fHww",
    price: 1300,
    location: "Kyoto",
    country: "Japan",
  },
  {
    title: "Floating House",
    description:
      "A unique stay on the water. Enjoy sunrise and sunset from your own floating villa.",
    image:
      "https://images.unsplash.com/photo-1624799836634-b80e174b6a1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZsb3RpbmclMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D",
    price: 1900,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Ski Chalet",
    description:
      "Warm up by the fireplace after a day on the slopes in this cozy ski chalet.",
    image:
      "https://images.unsplash.com/photo-1642265991386-3147c7bc6c3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U2tpJTIwQ2hhbGV0fGVufDB8fDB8fHww",
    price: 1700,
    location: "Zermatt",
    country: "Switzerland",
  },
  {
    title: "Savannah Tented Camp",
    description:
      "Experience wildlife up close while enjoying luxury tents in the heart of the savannah.",
    image:
      "https://images.unsplash.com/photo-1718330008715-25c9c046426d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFNhdmFubmFoJTIwVGVudGVkJTIwQ2FtcHxlbnwwfHwwfHx8MA%3D%3D",
    price: 2100,
    location: "Maasai Mara",
    country: "Kenya",
  },
  {
    title: "Countryside Vineyard Villa",
    description:
      "Sip wine and relax in this villa surrounded by beautiful vineyards and rolling hills.",
    image:
      "https://images.unsplash.com/photo-1723537086954-8c6857f9b743?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fENvdW50cnlzaWRlJTIwVmluZXlhcmQlMjBWaWxsYXxlbnwwfHwwfHx8MA%3D%3D",
    price: 1600,
    location: "Tuscany",
    country: "Italy",
  },
  {
    title: "Snow Igloo",
    description:
      "Cozy up inside a real igloo under the northern lights. A truly magical Arctic experience.",
    image:
      "https://images.unsplash.com/photo-1610711353407-e69bdfb79d49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U25vdyUyMElnbG9vfGVufDB8fDB8fHww",
    price: 1800,
    location: "Rovaniemi",
    country: "Finland",
  },
  {
    title: "Art Deco Apartment",
    description:
      "Step back in time in this chic Art Deco apartment filled with vintage charm and style.",
    image:
      "https://images.unsplash.com/photo-1740484409598-31908ee6741a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEFydCUyMERlY28lMjBBcGFydG1lbnR8ZW58MHx8MHx8fDA%3D",
    price: 1400,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Jungle Tree Lodge",
    description:
      "Elevated among the trees, this lodge immerses you in jungle life with luxury comforts.",
    image:
      "https://plus.unsplash.com/premium_photo-1685305676839-26406ddbe4de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SnVuZ2xlJTIwVHJlZSUyMExvZGdlfGVufDB8fDB8fHww",
    price: 1250,
    location: "Ubud",
    country: "Indonesia",
  },
  {
    title: "Ocean Cliff Retreat",
    description:
      "Breathtaking views from this private retreat perched on ocean cliffs.",
    image:
      "https://images.unsplash.com/photo-1662180298721-a60370a96b83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8T2NlYW4lMjBDbGlmZiUyMFJldHJlYXR8ZW58MHx8MHx8fDA%3D",
    price: 2500,
    location: "Big Sur",
    country: "United States",
  },
  {
    title: "Cave Suite",
    description:
      "Sleep inside a modernized cave home with stunning sunset views.",
    image:
      "https://images.unsplash.com/photo-1572526707515-a88ec0bf6aa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2F2ZSUyMFN1aXRlfGVufDB8fDB8fHww",
    price: 2300,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Pagoda Palace",
    description:
      "An elegant palace stay featuring traditional architecture and serene gardens.",
    image:
      "https://images.unsplash.com/photo-1745239319714-0b9d5ccb4c36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGFnb2RhJTIwUGFsYWNlfGVufDB8fDB8fHww",
    price: 2000,
    location: "Kyoto",
    country: "Japan",
  },
  {
    title: "Eco Desert Camp",
    description:
      "Sustainable glamping in the desert with all the modern comforts.",
    image:
      "https://images.unsplash.com/photo-1559169690-131bab5594a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEVjbyUyMERlc2VydCUyMENhbXB8ZW58MHx8MHx8fDA%3D",
    price: 1500,
    location: "Wadi Rum",
    country: "Jordan",
  },
];

module.exports = { data: sampleListings };
