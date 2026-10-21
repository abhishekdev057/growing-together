import Image from "next/image";
import { Reveal } from "./Reveal";
import { AgroforestrySchematic } from "./AgroforestrySchematic";
import { images } from "@/content/images";

export function IntroSection() {
  return (
    <section id="intro" className="bg-paper py-24 md:py-32">
      <div className="container-page">
        <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
              What is agroforestry?
            </span>
            <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-deep-green sm:text-4xl md:text-5xl">
              More Than Planting Trees.
            </h2>
            <p className="mt-6 text-balance leading-relaxed text-muted">
              Agroforestry is the deliberate integration of trees, shrubs or other woody
              perennials with crops and/or livestock on the same piece of land — either side by
              side in space, or in sequence over time. A single farm can draw on the same plot for
              grain this season, fruit in a few years and timber over a decade, while trees help
              hold soil, moisture and shade in place throughout.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              What works well on one farm will not necessarily work on another. The right
              combination of species and spacing depends on local rainfall, soil type, water
              availability, farm size and how easily a farmer can reach buyers and markets — which
              is why India&apos;s agroforestry systems look different from Punjab to Kerala.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src={images.introCloseCrop.src}
                alt={images.introCloseCrop.alt}
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-16 md:mt-20">
          <h3 className="font-serif text-2xl text-deep-green md:text-3xl">
            One farm, several layers
          </h3>
          <p className="mt-3 max-w-2xl leading-relaxed text-muted">
            Hover or focus each element below to see how it fits into a single integrated system.
          </p>
          <div className="mt-8">
            <AgroforestrySchematic />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
