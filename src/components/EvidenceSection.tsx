import { ExternalLink } from "lucide-react";
import { evidenceItems } from "@/content/evidence";
import { Reveal } from "./Reveal";

export function EvidenceSection() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
            Research and evidence
          </span>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-medium leading-tight text-deep-green sm:text-4xl md:text-5xl">
            Evidence Beyond the Headlines.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted">
            Every figure below is tied to a dated, named source and a specific reporting period —
            treat historical figures as historical, not as current running totals.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {evidenceItems.map((item) => (
            <Reveal key={item.id} className="flex flex-col rounded-2xl border border-forest/10 bg-paper p-7 md:p-8">
              <h3 className="font-serif text-xl text-deep-green md:text-2xl">{item.headline}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{item.detail}</p>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-2 border-t border-forest/10 pt-4">
                <span className="text-xs font-medium uppercase tracking-wide text-clay">
                  {item.period}
                </span>
                <a
                  href={item.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-forest underline-offset-4 hover:underline"
                >
                  {item.source}
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
