"use client";

import { useState } from "react";
import { ExternalLink, Info } from "lucide-react";
import { policyMilestones } from "@/content/policy";
import { Reveal } from "./Reveal";

export function PolicyTimeline() {
  const [activeId, setActiveId] = useState(policyMilestones[0].id);
  const active = policyMilestones.find((m) => m.id === activeId) ?? policyMilestones[0];

  return (
    <section id="policy" className="bg-deep-green py-24 text-paper md:py-32">
      <div className="container-page">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf">
            Government policy landscape
          </span>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl font-medium leading-tight sm:text-4xl md:text-5xl">
            From National Policy to Farm-Level Action.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-paper/75">
            India&apos;s agroforestry framework has evolved in stages — from a national policy
            statement, to a dedicated mission, to a restructured programme inside a wider rural
            development scheme. Select a milestone to read what it set out to do.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-[minmax(0,320px)_1fr] md:gap-16">
          <div
            role="tablist"
            aria-label="Policy timeline milestones"
            aria-orientation="vertical"
            className="relative flex flex-col gap-1 border-l border-paper/15 pl-6 md:gap-2"
          >
            {policyMilestones.map((milestone) => {
              const isActive = milestone.id === activeId;
              return (
                <button
                  key={milestone.id}
                  role="tab"
                  id={`tab-${milestone.id}`}
                  aria-selected={isActive}
                  aria-controls={`panel-${milestone.id}`}
                  onClick={() => setActiveId(milestone.id)}
                  className="relative py-3 text-left transition-colors"
                >
                  <span
                    className={`absolute -left-[29px] top-5 h-2.5 w-2.5 rounded-full border-2 transition-colors ${
                      isActive ? "border-leaf bg-leaf" : "border-paper/40 bg-deep-green"
                    }`}
                    aria-hidden="true"
                  />
                  <span
                    className={`block text-xs font-semibold uppercase tracking-wide transition-colors ${
                      isActive ? "text-leaf" : "text-paper/50"
                    }`}
                  >
                    {milestone.period}
                  </span>
                  <span
                    className={`mt-1 block font-serif text-lg leading-snug transition-colors ${
                      isActive ? "text-paper" : "text-paper/60"
                    }`}
                  >
                    {milestone.name}
                  </span>
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id={`panel-${active.id}`}
            aria-labelledby={`tab-${active.id}`}
            key={active.id}
            className="animate-fade-up rounded-2xl border border-paper/10 bg-paper/[0.04] p-6 md:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-leaf">
              {active.period}
            </p>
            <h3 className="mt-2 font-serif text-2xl text-paper md:text-3xl">{active.name}</h3>
            <p className="mt-5 leading-relaxed text-paper/80">{active.summary}</p>

            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-wide text-paper/50">
                Objectives
              </p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {active.objectives.map((o) => (
                  <li key={o} className="flex gap-2 text-sm leading-relaxed text-paper/80">
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-leaf" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 rounded-xl bg-paper/5 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-paper/50">
                Why it matters to farmers
              </p>
              <p className="mt-2 text-sm leading-relaxed text-paper/80">
                {active.farmerRelevance}
              </p>
            </div>

            {active.note && (
              <div className="mt-5 flex gap-3 rounded-xl border border-clay/40 bg-clay/10 p-4">
                <Info className="mt-0.5 h-4 w-4 flex-none text-clay" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-paper/85">{active.note}</p>
              </div>
            )}

            <a
              href={active.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-leaf underline-offset-4 hover:underline"
            >
              {active.sourceLabel}
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
