import { ExternalLink } from "lucide-react";
import { references } from "@/content/references";
import { Reveal } from "./Reveal";

export function ReferencesSection() {
  return (
    <section id="references" className="bg-paper py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
            Sources and further reading
          </span>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-medium leading-tight text-deep-green sm:text-4xl md:text-5xl">
            Read the Primary Sources.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted">
            This research draws on official government communication and peer-reviewed
            agricultural research. Not every linked article represents official government
            policy — publisher and context are noted for each.
          </p>
        </Reveal>

        <div className="mt-12 divide-y divide-forest/10 border-y border-forest/10">
          {references.map((ref, i) => (
            <Reveal key={ref.id} delay={i * 0.04}>
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-2 py-6 transition-colors hover:bg-sage/20 md:flex-row md:items-center md:justify-between md:gap-8 md:px-4"
              >
                <div>
                  <p className="font-serif text-lg text-deep-green group-hover:text-forest">
                    {ref.title}
                  </p>
                  <p className="mt-1 text-sm text-muted">{ref.publisher}</p>
                  <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted/90">
                    {ref.description}
                  </p>
                </div>
                <ExternalLink
                  className="h-4 w-4 flex-none text-forest/50 transition-colors group-hover:text-forest"
                  aria-hidden="true"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
