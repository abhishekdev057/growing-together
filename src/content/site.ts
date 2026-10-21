export const siteConfig = {
  name: "Growing Together",
  subtitle:
    "How policy, trees and sustainable farming can shape rural India's economic future.",
  description:
    "Government policies on agroforestry in India and their impact on the rural economy — an editorial research website covering the National Agroforestry Policy, the Agroforestry Component under RKVY, farm economics and regional diversity.",
  url: "https://growing-together.example.org",
};

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Policy Landscape", href: "/#policy" },
  { label: "Rural Economy", href: "/#economy" },
  { label: "Impact & Challenges", href: "/#impact" },
  { label: "Watch Film", href: "/#film" },
  { label: "References", href: "/#references" },
];

/**
 * Single configuration point for the documentary video.
 * `localSrc` points at a self-hosted file under /public/videos — swap it
 * for a verified YouTube/Vimeo ID in `youtubeId` if an official publisher
 * video becomes available instead.
 */
export const videoConfig = {
  youtubeId: null as string | null,
  localSrc: "/videos/agroforestry-in-india.mp4" as string | null,
  title: "Agroforestry in India: Policy, Practice and Rural Economy",
  publisher: "An original explainer film produced for this project",
  description:
    "A narrated explainer on how integrating trees with crops and livestock connects government policy to farm incomes, rural employment and climate resilience — including a look at the Parasai-Sindh watershed project in Uttar Pradesh.",
  posterAlt:
    "Rows of trees bordering farmland in the hills of Uttarakhand, India, the kind of landscape this film's narration describes",
};
