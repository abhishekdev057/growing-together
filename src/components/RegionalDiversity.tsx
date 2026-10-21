"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, MapPin } from "lucide-react";
import { stateProfiles } from "@/content/states";
import { images } from "@/content/images";
import { Reveal } from "./Reveal";

export function RegionalDiversity() {
  const [activeId, setActiveId] = useState(stateProfiles[0].id);
  const active = stateProfiles.find((s) => s.id === activeId) ?? stateProfiles[0];

  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
            Regional diversity
          </span>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-medium leading-tight text-deep-green sm:text-4xl md:text-5xl">
            One Country. Many Agroforestry Systems.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted">
            What grows well together depends on local agroecology. The examples below are
            illustrative possibilities drawn from well-documented regional practice — not
            guarantees of subsidy, eligibility or species permission for any specific farm. Select
            a state to see its illustrative system and official department.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-[280px_1fr] md:gap-12">
          <Reveal className="flex flex-wrap gap-2 md:flex-col md:gap-1.5">
            {stateProfiles.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveId(s.id)}
                aria-pressed={activeId === s.id}
                className={`rounded-full px-4 py-2 text-left text-sm font-medium transition-colors md:rounded-lg ${
                  activeId === s.id
                    ? "bg-forest text-paper"
                    : "bg-sage/40 text-deep-green hover:bg-sage/70"
                }`}
              >
                {s.name}
              </button>
            ))}
          </Reveal>

          <Reveal key={active.id} delay={0.05} className="overflow-hidden rounded-2xl border border-forest/10">
            <div className="relative aspect-[16/7]">
              <Image
                src={images.teaHillsKerala.src}
                alt={images.teaHillsKerala.alt}
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-green/80 via-deep-green/10 to-transparent" />
              <div className="absolute bottom-4 left-5 flex items-center gap-2 text-paper md:bottom-6 md:left-7">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                <span className="text-sm font-medium">{active.region}</span>
              </div>
            </div>
            <div className="bg-ivory/60 p-6 md:p-8">
              <h3 className="font-serif text-2xl text-deep-green">{active.name}</h3>
              <p className="mt-1 text-sm font-semibold text-clay">{active.illustrativeSystem}</p>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted">{active.context}</p>
              <a
                href={active.departmentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-forest underline-offset-4 hover:underline"
              >
                {active.departmentName}
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <p className="mt-3 text-xs leading-relaxed text-muted">
                Always confirm current subsidies, eligibility and species permissions with this
                department before acting — rules and support can change.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
