import { ExternalLink, MapPin } from "lucide-react";
import { parasaiSindhCaseStudy as cs } from "@/content/caseStudy";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

export function CaseStudy() {
  return (
    <section className="bg-forest py-24 text-paper md:py-32">
      <div className="container-page">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf">
            Real-world impact
          </span>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
            {cs.title}
          </h2>
          <p className="mt-4 flex items-center gap-2 text-sm text-paper/70">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {cs.location}
          </p>
          <p className="mt-6 max-w-2xl leading-relaxed text-paper/80">{cs.summary}</p>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cs.stats.map((stat) => (
            <RevealItem
              key={stat.label}
              className="rounded-2xl border border-paper/15 bg-paper/5 p-6"
            >
              <p className="font-serif text-3xl text-leaf md:text-4xl">{stat.value}</p>
              <p className="mt-2 text-sm leading-snug text-paper/75">{stat.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1} className="mt-10 max-w-3xl rounded-2xl bg-paper/5 p-6 md:p-8">
          <p className="text-sm leading-relaxed text-paper/85">{cs.takeaway}</p>
        </Reveal>

        <Reveal delay={0.15} className="mt-6 max-w-3xl">
          <p className="text-xs leading-relaxed text-paper/55">{cs.caveat}</p>
          <a
            href={cs.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-leaf underline-offset-4 hover:underline"
          >
            {cs.sourceLabel}
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
