// js/manga-data.js
const mangaData = [
  {
    id: 1,
    title: "One Piece",
    cover: "img/placeholder.jpg",
    author: "Eiichiro Oda",
    artist: "Eiichiro Oda",
    status: "Ongoing",
    releaseYear: 1999,
    genres: ["Action", "Adventure", "Comedy", "Fantasy", "Shounen"],
    rating: 4.9,
    views: "10.2M",
    followers: "5.3M",
    description: "In a world where pirates rule the seas, one boy sets out to become the Pirate King. Monkey D. Luffy, a young man with a heart of gold and the ability to stretch like rubber after eating a Devil Fruit, assembles a diverse crew of pirates, named the Straw Hat Pirates, and embarks on a grand adventure to find the legendary treasure known as 'One Piece'.",
    chapters: [
      { id: 1, number: 1089, title: "The Final Island", date: "2023-08-06", views: "1.5M", pages: generateMockPages(20) },
      { id: 2, number: 1088, title: "Luffy vs Blackbeard", date: "2023-07-30", views: "1.4M", pages: generateMockPages(22) },
      { id: 3, number: 1087, title: "The New Era", date: "2023-07-23", views: "1.3M", pages: generateMockPages(19) }
    ]
  },
  {
    id: 2,
    title: "Demon Slayer",
    cover: "img/placeholder.jpg",
    author: "Koyoharu Gotouge",
    artist: "Koyoharu Gotouge",
    status: "Completed",
    releaseYear: 2016,
    genres: ["Action", "Supernatural", "Historical", "Shounen"],
    rating: 4.8,
    views: "8.7M",
    followers: "4.2M",
    description: "In Taisho-era Japan, Tanjiro Kamado is a kindhearted boy who makes a living selling charcoal. But his peaceful life is shattered when a demon slaughters his entire family. His little sister Nezuko is the only survivor, but she has been transformed into a demon herself! Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.",
    chapters: [
      { id: 1, number: 205, title: "Final Battle", date: "2020-05-17", views: "1.5M", pages: generateMockPages(24) },
      { id: 2, number: 204, title: "Muzan's Defeat", date: "2020-05-10", views: "1.4M", pages: generateMockPages(21) },
      { id: 3, number: 203, title: "Dawn Approaches", date: "2020-05-03", views: "1.3M", pages: generateMockPages(23) }
    ]
  },
  {
    id: 3,
    title: "My Hero Academia",
    cover: "img/placeholder.jpg",
    author: "Kohei Horikoshi",
    artist: "Kohei Horikoshi",
    status: "Ongoing",
    releaseYear: 2014,
    genres: ["Action", "Superhero", "School", "Shounen"],
    rating: 4.7,
    views: "7.5M",
    followers: "3.8M",
    description: "In a world where most of the population has superpowers, or 'Quirks', Izuku Midoriya is born without one. However, his dream is to become a hero like his idol All Might. After a chance encounter with All Might, Izuku is chosen to inherit the hero's Quirk, and enters U.A. High School, a prestigious school for heroes in training.",
    chapters: [
      { id: 1, number: 402, title: "Beyond", date: "2023-08-07", views: "1.2M", pages: generateMockPages(18) },
      { id: 2, number: 401, title: "The Final Act", date: "2023-07-31", views: "1.1M", pages: generateMockPages(20) },
      { id: 3, number: 400, title: "Number 400", date: "2023-07-24", views: "1.3M", pages: generateMockPages(22) }
    ]
  },
  {
    id: 4,
    title: "Attack on Titan",
    cover: "img/placeholder.jpg",
    author: "Hajime Isayama",
    artist: "Hajime Isayama",
    status: "Completed",
    releaseYear: 2009,
    genres: ["Action", "Dark Fantasy", "Post-Apocalyptic", "Drama"],
    rating: 4.9,
    views: "9.8M",
    followers: "5.1M",
    description: "In a world where humanity resides within enormous walled cities to protect themselves from Titans, gigantic humanoid creatures, Eren Yeager vows to cleanse the earth of Titans after a Titan brings about the destruction of his hometown and the death of his mother.",
    chapters: [
      { id: 1, number: 139, title: "Toward the Tree on That Hill", date: "2021-04-09", views: "2.1M", pages: generateMockPages(25) },
      { id: 2, number: 138, title: "A Long Dream", date: "2021-03-09", views: "1.9M", pages: generateMockPages(23) },
      { id: 3, number: 137, title: "Titans", date: "2021-02-09", views: "1.8M", pages: generateMockPages(21) }
    ]
  },
  {
    id: 5,
    title: "Jujutsu Kaisen",
    cover: "img/placeholder.jpg",
    author: "Gege Akutami",
    artist: "Gege Akutami",
    status: "Ongoing",
    releaseYear: 2018,
    genres: ["Action", "Supernatural", "Horror", "Shounen"],
    rating: 4.8,
    views: "6.9M",
    followers: "3.5M",
    description: "Yuji Itadori is an unnaturally fit high school student living a normal life. But when he consumes a cursed object to save his friends, he finds himself sharing a body with Sukuna, a powerful Curse. Now, Yuji is thrust into the world of Curses and Jujutsu Sorcerers, and must learn to use his new powers to fight against the Curses that threaten humanity.",
    chapters: [
      { id: 1, number: 229, title: "Inhuman Makyo Shinjuku Showdown", date: "2023-08-07", views: "1.1M", pages: generateMockPages(19) },
      { id: 2, number: 228, title: "Fearsome Womb", date: "2023-07-31", views: "1.0M", pages: generateMockPages(21) },
      { id: 3, number: 227, title: "Perfect Preparation", date: "2023-07-24", views: "0.9M", pages: generateMockPages(20) }
    ]
  },
  {
    id: 6,
    title: "Chainsaw Man",
    cover: "img/placeholder.jpg",
    author: "Tatsuki Fujimoto",
    artist: "Tatsuki Fujimoto",
    status: "Ongoing",
    releaseYear: 2018,
    genres: ["Action", "Dark Fantasy", "Horror", "Supernatural"],
    rating: 4.7,
    views: "5.8M",
    followers: "3.2M",
    description: "Denji is a young man trapped in poverty, working as a Devil Hunter with his pet Devil, Pochita, to pay off his deceased father's debt. After a betrayal, Denji merges with Pochita, giving him the ability to transform parts of his body into chainsaws. Now as 'Chainsaw Man', Denji works for a government Devil-hunting organization, hoping to live a normal life.",
    chapters: [
      { id: 1, number: 145, title: "The Weapon-Human War", date: "2023-08-08", views: "0.9M", pages: generateMockPages(21) },
      { id: 2, number: 144, title: "Denji vs the World", date: "2023-08-01", views: "0.8M", pages: generateMockPages(23) },
      { id: 3, number: 143, title: "New Allies", date: "2023-07-25", views: "0.7M", pages: generateMockPages(19) }
    ]
  }
];

// Generate mock pages for chapters
function generateMockPages(count) {
  const pages = [];
  for (let i = 1; i <= count; i++) {
    pages.push({
      id: i,
      url: `img/placeholder.jpg`
    });
  }
  return pages;
}

// Helper functions to work with manga data
function getAllManga() {
  return mangaData;
}

function getMangaById(id) {
  return mangaData.find(manga => manga.id === Number(id));
}

function getFeaturedManga() {
  return mangaData.slice(0, 3);
}

function getPopularManga() {
  return mangaData.slice(0, 6);
}

function getMangaChapter(mangaId, chapterId) {
  const manga = getMangaById(mangaId);
  if (!manga) return null;
  return manga.chapters.find(chapter => chapter.id === Number(chapterId));
}