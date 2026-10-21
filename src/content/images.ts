// Verified Unsplash photographs of real Indian rural/agricultural settings.
// All images are published under the Unsplash License (free for commercial and
// non-commercial use). Photographer and location credited per Unsplash guidance.

export type SiteImage = {
  src: string;
  alt: string;
  credit: string;
};

function unsplash(id: string, params = "w=2400&q=80&auto=format&fit=crop") {
  return `https://images.unsplash.com/${id}?${params}`;
}

export const images = {
  heroLandscape: {
    src: unsplash("photo-1726425130149-a84a3ea169ff", "w=2800&q=80&auto=format&fit=crop"),
    alt: "Terraced farmland threaded with trees in the hills of Uttarakhand, India",
    credit: "Vivek Arya · Uttarakhand, India",
  } as SiteImage,
  introCloseCrop: {
    src: unsplash("photo-1671769195087-58336aa02943"),
    alt: "A farm field bordered by trees along a dirt path in Rajanna Sircilla, Telangana",
    credit: "Praveen Kumar Nandagiri · Telangana, India",
  } as SiteImage,
  ruralWorkersBihar: {
    src: unsplash("photo-1648102796336-0a5f2c417770"),
    alt: "Farmers working together in a field in Kutlupur, Bihar",
    credit: "Manish Patel · Bihar, India",
  } as SiteImage,
  odishaField: {
    src: unsplash("photo-1633410195091-bd66114cef5f"),
    alt: "Farm workers tending a field in rural Odisha",
    credit: "Jagamohan Senapati · Odisha, India",
  } as SiteImage,
  farmerPortraitKarnataka: {
    src: unsplash("photo-1639229969089-92a9255062c5"),
    alt: "A farmer standing on a dirt road in Davangere, Karnataka",
    credit: "Manoj Kulkarni · Karnataka, India",
  } as SiteImage,
  marketPune: {
    src: unsplash("photo-1676475007077-b02be1724106"),
    alt: "Fruit and vegetable stalls inside the Mahatma Phule Mandai market, Pune",
    credit: "Shrikant Ambawale · Pune, Maharashtra",
  } as SiteImage,
  teaHillsKerala: {
    src: unsplash("photo-1737261790470-47de85da4a13"),
    alt: "Terraced, tree-covered hillside near Munnar, Kerala",
    credit: "Aswin Karuvally · Kerala, India",
  } as SiteImage,
  marketStallDelhi: {
    src: unsplash("photo-1677381342494-df65499bb0ca"),
    alt: "A produce stall with crates of fruit and vegetables in Defence Colony, Delhi",
    credit: "Sehajpal Singh · Delhi, India",
  } as SiteImage,
};
