"use client";

import { Sprout, Tractor, Factory, ShoppingBasket, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const stages = [
  { label: "Nursery", detail: "Saplings raised and distributed", icon: Sprout },
  { label: "Farm", detail: "Trees and crops grown together", icon: Tractor },
  { label: "Processor", detail: "Timber, fruit or fodder handled & added to", icon: Factory },
  { label: "Market", detail: "Sold to traders, industry or consumers", icon: ShoppingBasket },
];

export function ValueChainFlow() {
  return (
    <div className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
      {stages.map((stage, i) => (
        <div key={stage.label} className="contents">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="flex flex-col items-center gap-3 rounded-xl border border-forest/10 bg-paper px-4 py-6 text-center"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage">
              <stage.icon className="h-5 w-5 text-forest" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <span className="font-serif text-lg text-deep-green">{stage.label}</span>
            <span className="text-xs leading-snug text-muted">{stage.detail}</span>
          </motion.div>
          {i < stages.length - 1 && (
            <div className="flex items-center justify-center py-1 sm:py-0" aria-hidden="true">
              <ArrowRight className="h-5 w-5 rotate-90 text-leaf sm:rotate-0" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const circulationNodes = [
  { label: "Farm investment", angle: -90 },
  { label: "Nursery & planting", angle: 0 },
  { label: "Harvest & transport", angle: 90 },
  { label: "Local market revenue", angle: 180 },
];

export function CirculationDiagram() {
  const r = 120;
  const center = 160;

  return (
    <div className="flex flex-col items-center">
      <svg viewBox="0 0 320 320" className="h-auto w-full max-w-sm" role="img" aria-label="Diagram showing farm investment, nursery and planting, harvest and transport, and local market revenue circulating money and goods between each other">
        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0,0 L8,4 L0,8 Z" fill="#83A96B" />
          </marker>
        </defs>
        <circle cx={center} cy={center} r={r} fill="none" stroke="#DCE6D5" strokeWidth="2" strokeDasharray="4 6" />
        {circulationNodes.map((node, i) => {
          const next = circulationNodes[(i + 1) % circulationNodes.length];
          const a1 = (node.angle * Math.PI) / 180;
          const a2 = (next.angle * Math.PI) / 180;
          const x1 = center + r * Math.cos(a1);
          const y1 = center + r * Math.sin(a1);
          const x2 = center + r * Math.cos(a2);
          const y2 = center + r * Math.sin(a2);
          const mx = center + (r + 34) * Math.cos((a1 + a2) / 2);
          const my = center + (r + 34) * Math.sin((a1 + a2) / 2);
          return (
            <path
              key={node.label}
              d={`M${x1},${y1} Q${mx},${my} ${x2},${y2}`}
              fill="none"
              stroke="#83A96B"
              strokeWidth="2"
              markerEnd="url(#arrow)"
            />
          );
        })}
        {circulationNodes.map((node, i) => {
          const a = (node.angle * Math.PI) / 180;
          const x = center + r * Math.cos(a);
          const y = center + r * Math.sin(a);
          return (
            <g key={node.label} transform={`translate(${x}, ${y})`}>
              <circle r="30" fill="#173C2F" />
              <circle r="30" fill="none" stroke="#83A96B" strokeWidth="1.5" />
              <text
                textAnchor="middle"
                dominantBaseline="central"
                fill="#F3EBDD"
                fontSize="18"
                fontFamily="var(--font-newsreader)"
              >
                {i + 1}
              </text>
            </g>
          );
        })}
      </svg>
      <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-3 text-center text-xs font-medium text-deep-green sm:grid-cols-4">
        {circulationNodes.map((node) => (
          <div key={node.label}>{node.label}</div>
        ))}
      </div>
    </div>
  );
}
