import Image from "next/image";
import { Reveal } from "./Reveal";
import { ValueChainFlow, CirculationDiagram } from "./EconomicFlowDiagram";
import { images } from "@/content/images";

export function RuralEconomy() {
  return (
    <section id="economy" className="bg-paper py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
            Rural economy
          </span>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-medium leading-tight text-deep-green sm:text-4xl md:text-5xl">
            Growing More Than Crops.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted">
            Agroforestry can open several, sometimes overlapping, economic pathways for rural
            households — though each depends heavily on local conditions, management and market
            access rather than arriving automatically.
          </p>
        </Reveal>

        <div className="mt-16 space-y-20 md:mt-20 md:space-y-28">
          {/* A */}
          <Reveal className="grid gap-8 md:grid-cols-[auto_1fr] md:gap-12">
            <span className="font-serif text-6xl leading-none text-sage md:text-7xl">A</span>
            <div>
              <h3 className="font-serif text-2xl text-deep-green md:text-3xl">
                Diversified farm income
              </h3>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted">
                A well-designed system can draw revenue from more than one source on the same
                land — field crops harvested annually, fruit that arrives seasonally, and timber
                or poles that may take years to mature. Annual receipts and long-horizon tree
                income behave very differently, and actual returns depend on costs, yields,
                species choice, cultivation method and the prices a farmer can actually get at
                harvest time.
              </p>
            </div>
          </Reveal>

          {/* B */}
          <div className="grid gap-10 md:grid-cols-[auto_1fr] md:gap-12">
            <Reveal>
              <span className="font-serif text-6xl leading-none text-sage md:text-7xl">B</span>
            </Reveal>
            <div>
              <Reveal>
                <h3 className="font-serif text-2xl text-deep-green md:text-3xl">
                  Employment and rural enterprises
                </h3>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted">
                  A functioning agroforestry economy needs people and businesses at every stage —
                  from raising saplings to getting a finished product to a buyer.
                </p>
              </Reveal>
              <Reveal delay={0.1} className="mt-8">
                <ValueChainFlow />
              </Reveal>
            </div>
          </div>

          {/* Market image panel */}
          <Reveal className="relative overflow-hidden rounded-2xl">
            <div className="relative aspect-[16/8] w-full md:aspect-[16/6]">
              <Image
                src={images.marketPune.src}
                alt={images.marketPune.alt}
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-green/70 via-deep-green/10 to-transparent" />
            </div>
            <p className="absolute bottom-4 left-4 text-xs text-paper/80 md:bottom-6 md:left-6">
              Local markets are where farm, nursery and processing activity ultimately turn into
              household income.
            </p>
          </Reveal>

          {/* C */}
          <Reveal className="grid gap-8 md:grid-cols-[auto_1fr] md:gap-12">
            <span className="font-serif text-6xl leading-none text-sage md:text-7xl">C</span>
            <div>
              <h3 className="font-serif text-2xl text-deep-green md:text-3xl">
                Risk diversification — not risk elimination
              </h3>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted">
                Having more than one product on a farm can spread revenue across different
                harvests and markets. It does not remove agricultural risk. Drought, pests,
                market-price swings, delayed tree returns and competition between trees and crops
                for light, water and nutrients all remain real exposures that farmers continue to
                manage.
              </p>
            </div>
          </Reveal>

          {/* D */}
          <Reveal className="grid gap-8 md:grid-cols-[auto_1fr] md:gap-12">
            <span className="font-serif text-6xl leading-none text-sage md:text-7xl">D</span>
            <div>
              <h3 className="font-serif text-2xl text-deep-green md:text-3xl">
                Ecosystem and production benefits
              </h3>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted">
                Suitable systems may help protect soil, store carbon, moderate microclimates,
                support biodiversity and, with appropriate fodder species, support livestock. These
                are potential, design-dependent benefits, not guaranteed outcomes — how well a
                system performs depends on its design, management and the local environment.
              </p>
            </div>
          </Reveal>

          {/* E */}
          <div className="grid gap-10 md:grid-cols-[auto_1fr] md:gap-12">
            <Reveal>
              <span className="font-serif text-6xl leading-none text-sage md:text-7xl">E</span>
            </Reveal>
            <div>
              <Reveal>
                <h3 className="font-serif text-2xl text-deep-green md:text-3xl">
                  Rural economic circulation
                </h3>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted">
                  Money invested on the farm can circulate back through nurseries, harvesting and
                  transport crews, and local markets — and returning revenue can fund the next
                  season&apos;s investment.
                </p>
              </Reveal>
              <Reveal delay={0.1} className="mt-10 flex justify-center rounded-2xl border border-forest/10 bg-ivory/60 p-8">
                <CirculationDiagram />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
