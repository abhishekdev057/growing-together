import Image from "next/image";
import Link from "next/link";
import { images } from "@/content/images";
import { Reveal } from "./Reveal";

export function ClosingSection() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-deep-green text-paper">
      <Image
        src={images.farmerPortraitKarnataka.src}
        alt={images.farmerPortraitKarnataka.alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-green via-deep-green/70 to-deep-green/30" />

      <div className="container-page relative z-10 py-24 md:py-32">
        <Reveal>
          <h2 className="max-w-3xl text-balance font-serif text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
            A More Resilient Rural Future Starts on the Land.
          </h2>
          <p className="mt-6 max-w-xl text-balance leading-relaxed text-paper/85">
            Agroforestry can connect agricultural productivity, diversified livelihoods and
            environmental stewardship. Realising its potential depends on farmer-centred policy,
            appropriate farming systems and dependable market access.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/#policy"
              className="rounded-full bg-paper px-6 py-3 text-sm font-semibold text-forest transition-transform hover:scale-[1.02] hover:bg-ivory"
            >
              Explore the Policy Framework
            </Link>
            <Link
              href="/#references"
              className="rounded-full border border-paper/50 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:border-paper hover:bg-paper/10"
            >
              Read the Research
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
