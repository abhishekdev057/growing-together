import Image from "next/image";
import { Reveal } from "./Reveal";
import type { SiteImage } from "@/content/images";

export function FullBleedPhoto({
  image,
  caption,
}: {
  image: SiteImage;
  caption: string;
}) {
  return (
    <section className="relative h-[55vh] w-full overflow-hidden md:h-[70vh]">
      <Image src={image.src} alt={image.alt} fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-green/75 via-deep-green/10 to-transparent" />
      <Reveal className="absolute inset-x-0 bottom-0 p-6 md:p-10">
        <p className="max-w-xl text-balance font-serif text-xl text-paper md:text-2xl">
          {caption}
        </p>
      </Reveal>
    </section>
  );
}
