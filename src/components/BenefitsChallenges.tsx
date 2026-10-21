import { CheckCircle2, AlertTriangle } from "lucide-react";
import { Reveal } from "./Reveal";

const benefits = [
  "Additional and diversified revenue opportunities across crops, fruit, timber and fodder",
  "Potential improvements in resilience to climatic and market shocks",
  "Rural employment and value-chain activity, from nurseries to processing",
  "Long-term, productive use of farmland alongside annual cropping",
  "Environmental and resource-management co-benefits, such as soil and water retention",
];

const challenges = [
  "Time required before some tree products generate any revenue",
  "Initial investment and access to quality planting material",
  "Price volatility and uncertain market access for tree products",
  "Competition between trees and crops for light, water and nutrients",
  "State-level regulatory complexity around felling and transit",
  "Inadequate technical advice or infrastructure in some regions",
  "Unequal ability of farmers to wait years for long-term returns",
];

export function BenefitsChallenges() {
  return (
    <section id="impact" className="bg-paper py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
            Impact & challenges
          </span>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-medium leading-tight text-deep-green sm:text-4xl md:text-5xl">
            Promise Meets Practice.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted">
            Agroforestry is not universally profitable or suitable for every farm. Supportive
            policy, market development, locally appropriate research, extension services and
            accessible finance all shape whether its promise is realised.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-forest/10 md:grid-cols-2">
          <Reveal className="bg-sage/30 p-8 md:p-12">
            <div className="flex items-center gap-2 text-forest">
              <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
              <h3 className="font-serif text-xl">Benefits to examine</h3>
            </div>
            <ul className="mt-6 space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3 text-sm leading-relaxed text-deep-green/90">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-forest" />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="bg-ivory p-8 md:p-12">
            <div className="flex items-center gap-2 text-clay">
              <AlertTriangle className="h-5 w-5" aria-hidden="true" />
              <h3 className="font-serif text-xl">Challenges to examine</h3>
            </div>
            <ul className="mt-6 space-y-4">
              {challenges.map((c) => (
                <li key={c} className="flex gap-3 text-sm leading-relaxed text-deep-green/90">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-clay" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
