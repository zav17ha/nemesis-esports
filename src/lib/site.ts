export const site = {
  name: "Nemesis Esports",
  shortName: "Nemesis",
  slogan: "Ignite your Nemesis",
  founded: "2024",
  url: "https://nemesisesps.com",
  description:
    "Nemesis Esports is a Sri Lankan esports organisation founded in 2024, dedicated to developing competitive talent, delivering professionally run tournaments and building lasting partnerships.",
  email: "hello@nemesisesps.com",
  socials: {
    facebook: "https://facebook.com/ne.esps",
    instagram: "https://instagram.com/ne.esps",
    tiktok: "https://www.tiktok.com/@ne.esps",
  },
  credit: { name: "Craxe", url: "https://craxe.org" },
  partners: {
    gearloop: "https://www.instagram.com/gear_looplk/",
  },
};

export const nav: { href: string; label: string; soon?: boolean }[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/tournaments", label: "Tournaments" },
  { href: "/merch", label: "Merch", soon: true },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
];

export const tournaments = [
  {
    slug: "nemesis-summer-playoff-24",
    name: "Nemesis Summer Playoff '24",
    shortName: "Summer Playoff '24",
    year: "2024",
    status: "Completed",
    format: "Team competition",
    image: "/images/summer-playoff-24.jpg",
    summary:
      "Our first major tournament brought together some of the most competitive teams in Sri Lanka for a season of decisive, high-level play, and set the standard that now defines every Nemesis event.",
  },
];
