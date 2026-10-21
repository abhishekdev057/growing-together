"use client";

import { useState } from "react";
import { journeySteps } from "@/content/journey";
import { Reveal } from "./Reveal";

export function PolicyToPractice() {
  const [openStep, setOpenStep] = useState(1);

  return (
    <section className="bg-sage/40 py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
            Policy to practice
          </span>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-medium leading-tight text-deep-green sm:text-4xl md:text-5xl">
            Turning Policy Into Farm-Level Opportunity.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted">
            Successful implementation is a chain, not a single decision. Each link depends on
            different institutions — and a weak link anywhere can slow a farmer down.
          </p>
        </Reveal>

        {/* Desktop horizontal journey */}
        <div className="mt-16 hidden md:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-6 h-px bg-forest/15" aria-hidden="true" />
            <div className="grid grid-cols-7 gap-4">
              {journeySteps.map((s) => (
                <button
                  key={s.step}
                  onClick={() => setOpenStep(s.step)}
                  aria-expanded={openStep === s.step}
                  className="group flex flex-col items-center text-center"
                >
                  <span
                    className={`relative z-10 flex h-12 w-12 flex-none items-center justify-center rounded-full border-2 font-serif text-lg transition-colors ${
                      openStep === s.step
                        ? "border-forest bg-forest text-paper"
                        : "border-forest/30 bg-sage/40 text-forest group-hover:border-forest"
                    }`}
                  >
                    {s.step}
                  </span>
                  <span className="mt-4 text-xs font-medium leading-snug text-deep-green">
                    {s.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <Reveal key={openStep} className="mx-auto mt-10 max-w-2xl rounded-2xl border border-forest/10 bg-paper p-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-clay">
              Step {openStep}
            </p>
            <h3 className="mt-2 font-serif text-2xl text-deep-green">
              {journeySteps[openStep - 1].title}
            </h3>
            <p className="mt-4 leading-relaxed text-muted">
              {journeySteps[openStep - 1].description}
            </p>
            <p className="mt-4 text-sm font-medium text-forest">
              Involves: {journeySteps[openStep - 1].stakeholders}
            </p>
          </Reveal>
        </div>

        {/* Mobile vertical journey */}
        <div className="mt-14 space-y-6 md:hidden">
          {journeySteps.map((s) => (
            <Reveal key={s.step} className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full border-2 border-forest bg-forest font-serif text-base text-paper">
                  {s.step}
                </span>
                {s.step < journeySteps.length && (
                  <span className="mt-1 w-px flex-1 bg-forest/20" aria-hidden="true" />
                )}
              </div>
              <div className="pb-2">
                <h3 className="font-serif text-xl text-deep-green">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
                <p className="mt-2 text-xs font-medium text-forest">
                  Involves: {s.stakeholders}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
